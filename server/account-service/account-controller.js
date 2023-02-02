const express = require('express');
const accountrouter = express.Router();
const accountValidator = require('./account-schema-validator');
const accountDao = require('./account-dao');
const Logger = require('../logger/logger');
const log = new Logger('Account-Controller');
const authTokenValidator = require('../middleware/auth-token-validator');

accountrouter.get('/getaccountdetails/:accountno', authTokenValidator, (req, res) => {
    let accountNo = req.params.accountno;
    accountDao.retrieveAccountDetails(accountNo, res)
        .then()
        .catch((err) => log.error(`Error in retrieving account details by account no. ${accountNo}: ` + err));
});

accountrouter.get('/getaccountdetailsbyusername/:username', authTokenValidator, (req, res) => {
    let username = req.params.username;
    accountDao.retrieveAccountDetailsByUsername(username, res)
        .then()
        .catch((err) => log.error(`Error in retrieving account details by username ${username}: ` + err));
});

accountrouter.post('/createnewaccount', authTokenValidator, (req, res) => {
    let newAccount = req.body;
    let { error } = accountValidator.validateCreateNewAccountSchema(newAccount);
    if (isNotValidSchema(error, res)) return;
    accountDao.createNewAccount(newAccount, res)
        .then()
        .catch((err) => log.error(`Error in creating new account for username ${newAccount.username}: ` + err));
});

//debugging some functions

accountrouter.post('/addpayee', authTokenValidator, (req, res) => {
    let newPayee = req.body;
    let { error } = accountValidator.validatePayeeSchema(newPayee);
    if (isNotValidSchema(error, res)) return;
    if (isSameAccountNo(newPayee.accountNo, newPayee.payee.accountNo, res)) return;
    accountDao.addPayee(newPayee, res)
        .then()
        .catch((err) => log.error(`Error in adding payee ${newPayee}: ` + err));
});

accountrouter.get('/getpayees/:accountno', authTokenValidator, (req, res) => {
    let accountNo = req.params.accountno;
    accountDao.retrievePayeeList(accountNo, res)
        .then()
        .catch((err) => log.error(`Error in retrieving payee list for account no. ${accountNo}: ` + err));
});

function isNotValidSchema(error, res) {
    if (error) {
        log.error(`Schema validation error: ${error.details[0].message}`);
        res.status(400).send({
            messageCode: 'VALDERR',
            message: error.details[0].message
        });
        return true;
    }
    return false;
}

function isSameAccountNo(accountNo_1, accountNo_2, res) {
    if (accountNo_1 === accountNo_2) {
        log.error(`Transaction cannot be done on same account, from ${accountNo_1} to ${accountNo_2}`);
        res.status(400).send({
            messageCode: 'INVOPR',
            message: 'Operation cannot be done on same account no.'
        });
        return true;
    }
    return false;
}

module.exports = accountrouter;