const express = require('express');
const transactionrouter = express.Router();
const transactionSummaryValidator = require('./transaction-schema-validator');
const transactionDao = require('./transaction-dao');
const Logger = require('../logger/logger');
const log = new Logger('Transaction-Controller');

transactionrouter.post('/logtransactionsummary', (req, res) => {
    let transactionSummary = req.body;
    console.log(req);
    let { error } = transactionSummaryValidator.validateTransationSummarySchema(transactionSummary);
    if (notValid(error, res)) return;
    if (sameAcc(transactionSummary.from, transactionSummary.to, res)) return;
    transactionDao.logTransactionSummary(transactionSummary, res)
        .then()
        .catch((err) => log.error(`Error in logging transaction summary of ${transactionSummary}: ` + err));
});

transactionrouter.get('/transactionsummary/:accountno', (req, res) => {
    let accountNo = req.body.accountno;
    transactionDao.gettransSumm(accountNo, res)
        .then()
        .catch((err) => log.error(`Error in getting transSumm. ${accountNo}: ` + err));
});

function notValid(err,res){
    if (err) {
        log.error(`Schema validation error: ${err.details[0].message}`);
        res.send({
            messageCode: 'VALDERR',
            message: error.details[0].message
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
