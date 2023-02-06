const Logger = require('../logger/logger');
const log = new Logger('Account-Dao');
const mongoose = require('mongoose');
const accountSchema = require('../models/account-schema-model').mongoAccountSchema;
const AccountModel = mongoose.model('Account', accountSchema);
const axios = require('axios');
// const config = require('config');

const dbUrl = "mongodb+srv://ayush:ayush@cluster0.qrfvug8.mongodb.net/test";

var accountNumberBase = Math.random() * 10000000000000000;
console.log({ accountNumberBase });

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(log.info('connected to mongo database....'))
    .catch(err => log.error('unable to connect, please check your connection....' + err));


// const transactionService = config.get('transaction-service-config');
// config._get = get();
// config.get = function (prop) {
//     if (config.has(prop)) console.log(config._get(prop));;
//     console.log({ undefined });;
// }
// const check = config.has();
// console.log({ check });
// const temp = config.get("custom_env_variable.jwt");
// console.log({ temp });
// console.log({ transactionService });

const createNewAccount = async (accountDetails, response) => {
    let newAccount = new AccountModel({
        username: accountDetails.username,
        accountNo: accountNumberBase++,
        closingBalance: accountDetails.closingBalance,
        createdOn: Date.now(),
        payees: []
    });

    await newAccount.save((err, result) => {
        if (err) {
            accountNumberBase--;
            log.error(`Error in creating new account for username ${accountDetails.username}: ` + err);
            return response.status(400).send({
                messageCode: new String(err.errmsg).split(" ")[0],
                message: 'Unable to create new account for username ' + accountDetails.username
            });
        }
        log.info('Account has been created with account no. ' + result.accountNo + 'for user with username ' + result.username);
        return response.send({
            messageCode: 'ACCR',
            message: 'Account has been successfully created.',
            accountNo: result.accountNo,
            closingBalance: result.closingBalance
        });
    });
}
const retrieveAccountDetails = async (accountNo, response) => {
    await AccountModel.findOne({ accountNo: accountNo }, (err, result) => {
        if (err || !result) {
            log.error(`Error in retrieving account details by account no. ${accountNo}: ` + err);
            return response.status(400).send({
                messageCode: 'ACCRE',
                message: 'Unable to retrieve account details for account no. ' + accountNo
            });
        }
        return response.send({
            messageCode: 'ACCDTLS',
            accountDetails: result
        });
    });
}

const retrieveAccountDetailsByUsername = async (username, response) => {
    await AccountModel.findOne({ username: username }, (err, result) => {
        if (err || !result) {
            log.error(`Error in retrieving account details by username ${username}: ` + err);
            return response.status(400).send({
                messageCode: 'ACCRE',
                message: 'Unable to retrieve account details with username ' + username
            });
        }
        return response.send({
            messageCode: 'ACCDTLS',
            accountDetails: result
        });
    });
}
const addPayee = async (newPayee, response) => {
    await AccountModel.findOneAndUpdate({ accountNo: newPayee.accountNo }, { $addToSet: { payees: newPayee.payee } }, (err, result) => {
        if (err || !result) {
            log.error(`Error in adding payee ${newPayee}: ` + err)
            return response.status(400).send({
                messageCode: 'ACCPAE',
                message: 'Unable to add payee for account no. ' + newPayee.accountNo
            });
        }
        return response.send({
            messageCode: 'ACCPA',
            payee: newPayee.payee
        });
    });
}

const retrievePayeeList = async (accountNo, response) => {
    await AccountModel.findOne({ accountNo: accountNo }, (err, result) => {
        if (err || !result) {
            log.error(`Error in retrieving payee list for account no. ${accountNo}: ` + err)
            return response.status(400).send({
                messageCode: 'ACCPLE',
                message: 'Unable to retrieve payees for account no. ' + accountNo
            });
        }
        return response.send({
            messageCode: 'ACCPL',
            payees: result.payees
        });
    });
}
const transferAmount = async (transferAmount, response, token) => {
    let from = transferAmount.from;
    let to = transferAmount.to;
    let fromResult = await AccountModel.findOne({ accountNo: from.accountNo }, (fromErr, fromResult) => {
        if (fromErr || !fromResult) {
            log.error('Error in retrieving account: ' + fromErr);
            return response.status(400).send({
                messageCode: 'ACCRE',
                message: 'Unable to retrieve account with account no. ' + from.accountNo
            });
        }
    });
    let fromClosingBalance = parseFloat(fromResult.closingBalance);
    let transactionAmount = parseFloat(from.amount);
    if (fromClosingBalance >= transactionAmount) {
        let toResult = await AccountModel.findOne({ accountNo: to.accountNo }, (toErr, toResult) => {
            if (toErr || !toResult) {
                log.error('Error in retrieving account: ' + toErr);
                return response.status(400).send({
                    messageCode: 'ACCRE',
                    message: 'Unable to retrieve account with account no. ' + to.accountNo
                });
            }
        });
        let toClosingBalance = parseFloat(toResult.closingBalance);
        await AccountModel.updateOne({ accountNo: to.accountNo }, { $set: { closingBalance: toClosingBalance + transactionAmount } }, (toTransactionErr, toResult) => {
            if (toTransactionErr || !toResult) {
                log.error('Error in transaction: ' + toTransactionErr);
                return response.status(400).send({
                    messageCode: 'ACCTRANE',
                    message: 'Unable to retrieve account with account no. ' + to.accountNo
                });
            }
        });
        await AccountModel.updateOne({ accountNo: from.accountNo }, { $set: { closingBalance: fromClosingBalance - transactionAmount } }, (fromTransactionErr, fromResult) => {
            if (fromTransactionErr || !fromResult) {
                log.error('Error in transaction: ' + fromTransactionErr);
                return response.status(400).send({
                    messageCode: 'ACCTRANE',
                    message: 'Unable to retrieve account with account no. ' + from.accountNo
                });
            }
        });

        //calling log trans
        logTransaction(transferAmount, token);
        log.info('Transaction completed from ' + from.accountNo + ' to ' + to.accountNo + ' of amount ' + from.amount);
        return response.send({
            messageCode: 'ACCTRANC',
            message: 'Transaction completed from ' + from.accountNo + ' to ' + to.accountNo + ' of amount ' + from.amount
        });
    } else {
        return response.send({
            messageCode: 'ACCINSF',
            message: 'Insufficient fund for transaction'
        });
    }
}

async function logTransaction(transferAmount, token) {
    const date = new Date();
    const MM = date.getMonth() + 1;
    const month = MM < 10 ? '0' + MM : MM;
    const requestBody = {
        amount: transferAmount.from.amount,
        from: transferAmount.from.accountNo,
        to: transferAmount.to.accountNo,
        transferedOn: date.getFullYear() + '-' + month + '-' + date.getDate(),
        remark: transferAmount.remark
    };

    console.log({ date }, { MM }, { month }, { requestBody },);
    await axios({
        method: 'post',
        url: 'http://localhost:8081/bankingapp/api/transaction/logtransactionsummary',
        data: JSON.stringify(requestBody),
        headers: {
            'content-type': 'application/json',
            'x-auth-token': token
        }
    }).then((res) => {
        console.log(res);
        log.info(JSON.stringify(res.data));
    }).catch((err) => {
        log.error('Unable to call logtransactionsummary service: ' + err);
    });
}

const deletePayee = async (accountNo, payee, response) => {
    let removePayee = {
        firstname: payee.firstname,
        lastname: payee.lastname,
        accountNo: payee.accountNo
    }

    await AccountModel.findOneAndUpdate({ accountNo: accountNo }, { $pull: { payees: removePayee } }, (err, result) => {
        if (err || !result) {
            log.error(`Error in deleting payee ${payee} for account no. ${accountNo}: ` + err);
            return response.status(400).send({
                messageCode: 'ACCPDE',
                message: 'Unable to delete payee with account no. ' + payee.accountNo
            });
        }
        return response.send({
            messageCode: 'ACCPDEL',
            message: 'Payee has been deleted with account no. ' + payee.accountNo
        });
    });
}

module.exports = {
    createNewAccount,
    retrieveAccountDetails,
    retrieveAccountDetailsByUsername,
    addPayee,
    retrievePayeeList,
    deletePayee,
    transferAmount
}