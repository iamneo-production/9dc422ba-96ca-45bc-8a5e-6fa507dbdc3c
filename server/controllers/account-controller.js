const express = require('express');
const accountrouter = express.Router();
const accountValidator = require('../validator/account-schema-validator');
const accountDao = require('../Dao/account-dao');
const Logger = require('../logger/logger');
const log = new Logger('Account-Controller-table');
const authTokenValidator = require('../middleware/auth-token-validator');


// main get feature that is by account no

accountrouter.get('/getaccountdetails/:accountno', authTokenValidator, async (req, res) => {
    console.log({ req });
    let accountNo = req.params.accountno;
    try {
        // retrieve details comes from dao
        await accountDao.retrieveAccountDetails(accountNo, res);
        console.log({ res });
    } catch (error) {
        log.error(`Error in retrieving account details by account no. ${accountNo}: ` + err);
    }
});


// get the details by username
accountrouter.get('/getaccountdetailsbyusername/:username', authTokenValidator, async (req, res) => {
    console.log({ req });
    let username = req.params.username;
    console.log({ username });
    try {
        // retrive function comes from dao
        await accountDao.retrieveAccountDetailsByUsername(username, res)
        console.log({ res });
    } catch (error) {
        log.error(`Error in retrieving account details by username ${username}: ` + err);
    }
});


// the most basic and yet the most crucial function in this table
// creating new account works only after new user has been created in user table cuz
// username is used as a foreign key in this table
// uses auth token for security

accountrouter.post('/createnewaccount', authTokenValidator, (req, res) => {
    console.log({ req });
    let newAccount = req.body;
    // validation for schema using joi
    let { error } = accountValidator.validateCreateNewAccountSchema(newAccount);
    // not valid function from lib
    if (isNotValidSchema(error, res)) return;
    // here dao function create new account is async coming from dao
    try {
        accountDao.createNewAccount(newAccount, res);
        console.log({ res });
    } catch (error) {
        log.error(`Error in creating new account for username ${newAccount.username}: ` + err);
    }
});

//debugging some functions
// will be adding testing scripts of jest very soon


// after creating new account the second post function is add payee
// used for adding a beneficiary's account for transaction
// usses auth token (jwt for security)

accountrouter.post('/addpayee', authTokenValidator, (req, res) => {
    console.log({ req });
    let newPayee = req.body;
    // validation for schema using joi
    let { error } = accountValidator.validatePayeeSchema(newPayee);
    if (isNotValidSchema(error, res)) return;
    // if given beneficiarry already exists
    // comes from lib
    if (isSameAccountNo(newPayee.accountNo, newPayee.payee.accountNo, res)) return;
    try {
        accountDao.addPayee(newPayee, res);
    } catch (error) {
        log.error(`Error in adding payee ${newPayee}: ` + err);
    }
});

// get payee for getting details of that particular beneficiary

accountrouter.get('/getpayees/:accountno', authTokenValidator, (req, res) => {
    console.log({ req });
    let accountNo = req.params.accountno;
    // 
    accountDao.retrievePayeeList(accountNo, res)
        .then()
        .catch((err) => log.error(`Error in retrieving payee list for account no. ${accountNo}: ` + err));
});

// probably the most difficult post function of this server
// Transfer ammount
// auth token is used for security

accountrouter.post('/transferamount', authTokenValidator, (req, res) => {
    let transferAmount = req.body;
    let { error } = accountValidator.validateTransferAmountSchema(transferAmount);
    if (isNotValidSchema(error, res)) return;
    if (isSameAccountNo(transferAmount.from.accountNo, transferAmount.to.accountNo, res)) return;
    if (transferAmount.from.amount !== transferAmount.to.amount) {
        res.status(400).send({
            messageCode: 'INVAMNT',
            message: 'Invalid transaction amount'
        });
        return;
    }
    accountDao.transferAmount(transferAmount, res, req.header('x-auth-token'))
        .then()
        .catch((err) => log.error(`Error in transaction from ${transferAmount.from.accountNo} to ${transferAmount.to.accountNo} of amount ${transferAmount.from.amount}: ` + err));
});

// deleting a benificary
// uses jwt token

accountrouter.post('/deletepayee', authTokenValidator, (req, res) => {
    let requestBody = req.body;
    let { error } = accountValidator.validatePayeeSchema(requestBody);
    if (isNotValidSchema(error, res)) return;
    if (isSameAccountNo(requestBody.accountNo, requestBody.payee.accountNo, res)) return;
    accountDao.deletePayee(requestBody.accountNo, requestBody.payee, res)
        .then()
        .catch((err) => log.error(`Error in deleting payee ${requestBody.payee} for account no. ${requestBody.accountNo}: ` + err));
});

// lib functions
// ------------------------->LIB <------------------------------------- //
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