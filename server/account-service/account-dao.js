const Logger = require('../logger/logger');
const log = new Logger('Account-Dao');
const mongoose = require('mongoose');
const accountSchema = require('./account-schema-model').mongoAccountSchema;
const AccountModel = mongoose.model('Account', accountSchema);
const axios = require('axios');
const config = require('config');

const dbUrl = "mongodb+srv://ayush:ayush@cluster0.qrfvug8.mongodb.net/test";

var accountNumberBase = Math.random() * 10000000000000000;
console.log({ accountNumberBase });

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(log.info('connected to mongo database....'))
    .catch(err => log.error('unable to connect, please check your connection....' + err));


// const transactionService = config.get('transaction-service-config');
// const temp = config();
console.log({ config });
// console.log({ transactionService });

const createNewAccount = async (accountDetails, response) => {
    let newAccount = new AccountModel({
        username: accountDetails.username,
        accountNo: accountNumberBase++,
        closingBalance: accountDetails.closingBalance,
        createdOn: Date.now(),
        lastActive: Date.now(),
        payees: [],
        isClosed: false,
        closedOn: null
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
            log.error(`Error in retrieving account details by details ${accountNo}: ` + err);
            return response.status(400).send({
                messageCode: 'ACCRE',
                message: 'Unable to retrieve account details with accountNo ' + accountNo
            });
        }
        if (result.isClosed) {
            return response.send({
                messageCode: 'ACCCLD',
                isClosed: result.isClosed,
                closedOn: result.closedOn
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
        if (result.isClosed) {
            return response.send({
                messageCode: 'ACCCLD',
                isClosed: result.isClosed,
                closedOn: result.closedOn
            });
        }
        return response.send({
            messageCode: 'ACCDTLS',
            accountDetails: result
        });
    });
}

const addPayee = async (newPayee, response) => {
    await AccountModel.findOneAndUpdate({ accountNo: newPayee.accountNo, isClosed: false }, { $addToSet: { payees: newPayee.payee } }, (err, result) => {
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
    await AccountModel.findOne({ accountNo: accountNo, isClosed: false }, (err, result) => {
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

const deletePayee = async (accountNo, payee, response) => {
    let removePayee = {
        firstname: payee.firstname,
        lastname: payee.lastname,
        accountNo: payee.accountNo
    }

    await AccountModel.findOneAndUpdate({ accountNo: accountNo, isClosed: false }, { $pull: { payees: removePayee } }, (err, result) => {
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



const transferAmount = async (transferAmount, response, token) => {
    let from = transferAmount.from;
    let to = transferAmount.to;
    let fromResult = await AccountModel.findOne({ accountNo: from.accountNo, isClosed: false }, (fromErr, fromResult) => {
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
        let toResult = await AccountModel.findOne({ accountNo: to.accountNo, isClosed: false }, (toErr, toResult) => {
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


    await axios({
        method: 'post',
        url: transactionService.protocol + transactionService.host + transactionService.port + transactionService.base + transactionService.uri,
        data: JSON.stringify(requestBody),
        headers: {
            'content-type': 'application/json',
            'x-auth-token': token
        }
    }).then((res) => {
        log.info(JSON.stringify(res.data));
    }).catch((err) => {
        log.error('Unable to call logtransactionsummary service: ' + err);
    });
}


module.exports = {
    createNewAccount,
    retrieveAccountDetails,
    retrieveAccountDetailsByUsername,
    transferAmount,
    addPayee,
    deletePayee,
    retrievePayeeList,
}