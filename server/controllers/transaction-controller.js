const express = require('express');
const transactionrouter = express.Router();
const transactionSummaryValidator = require('../validator/transaction-schema-validator');
const transactionDao = require('../Dao/transaction-dao');
const Logger = require('../logger/logger');
const log = new Logger('Transaction-Controller-table');

// -----------> http://localhost:3000/transaction <----------------  //


// This function is only for internal use
// this will automatically be triggered by other dao functions
// for example when someone makes a transaction
// axios fetches data from this breakpoint gives the log transactions

transactionrouter.post('/logtransactionsummary', async (req, res) => {
    console.log({ req });
    let transactionSummary = req.body;
    // validate schema from joi in the validator
    let { error } = transactionSummaryValidator.validateTransationSummarySchema(transactionSummary);
    if (notValid(error, res)) return;
    // need to check whether summary is being asked for diff acc
    if (sameAcc(transactionSummary.from, transactionSummary.to, res)) return;

    // log trans comes from dao
    try {
        await transactionDao.logTransactionSummary(transactionSummary, res)
        console.log({ res });
    } catch (error) {
        log.error(`Error in logging transaction summary of ${transactionSummary}: ` + err);
    }
});

// get transaction summary function by account no

transactionrouter.get('/trasanctionsummary/:accountno', (req, res) => {
    // console.log({ req });
    let accountNo = req.params.accountno;
    console.log({ accountNo });
    // get trans comes from dao
    try {
        transactionDao.gettransSumm(accountNo, res);
    } catch (error) {
        log.error(`Error in getting transSumm. ${accountNo}: ` + err);
    }
});

// ----------------------------------->LIB<----------------------------------- //

function notValid(err, res) {
    if (err) {
        log.error(`Schema validation error: ${err.details[0].message}`);
        res.send({
            messageCode: 'VALDERR',
            message: err.details[0].message
        });
        return true;
    }
    return false;
}

function sameAcc(accountNo_1, accountNo_2, res) {
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

module.exports = transactionrouter;
