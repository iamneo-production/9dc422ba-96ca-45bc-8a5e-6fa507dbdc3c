const Logger = require('../logger/logger');
const log = new Logger('Account-Dao');
const mongoose = require('mongoose');
const accountSchema = require('./account-schema-model').mongoAccountSchema;
const AccountModel = mongoose.model('Account', accountSchema);
// const axios = require('axios');
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
            log.error(`Error in retrieving account details by account no. ${accountNo}: ` + err);
            return response.status(400).send({
                messageCode: 'ACCRE',
                message: 'Unable to retrieve account details for account no. ' + accountNo
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



module.exports = {
    createNewAccount,
    retrieveAccountDetails,
    retrieveAccountDetailsByUsername,
    addPayee
}