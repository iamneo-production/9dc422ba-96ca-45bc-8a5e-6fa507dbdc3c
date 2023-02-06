const Logger = require('../logger/logger');
const log = new Logger('Transaction-Dao');
const mongoose = require('mongoose');
const transactionSchema = require('../models/transaction-schema-model').mongoTransactionSchema;
const TransactionModel = mongoose.model('Transaction', transactionSchema);

const dbUrl = "mongodb+srv://ayush:ayush@cluster0.qrfvug8.mongodb.net/test";

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(log.info('connected to mongo database....'))
    .catch(err => log.error('unable to connect, please check your connection....' + err));

const logTransactionSummary = async (req, response) => {
    let newSummary = new TransactionModel({
        amount: req.amount,
        transferedOn: new Date(req.transferedOn),
        to: req.to,
        from: req.from,
        remark: req.remark
    });
    await newSummary.save((err, result) => {
        if (err || !result) {
            log.error(`Err in making new acc ${req}: ` + err);
            return response.status(401).send({
                messageCode: new String(err.errmsg).split(" ")[0],
                message: 'Unable to log transaction summary from ' + req.from + ' to ' + req.to
            });
        }
        log.info('Logged transaction summary from ' + req.from + ' to ' + req.to);
        return response.send({
            messageCode: 'TRNSMRLG',
            message: 'Transaction summary has been successfully logged.',
            from: result.from,
            to: result.to,
            amount: result.amount
        });
    });
}

const gettransSumm = async (req, res) => {
    await retrievetransSumm(req)
        .then((summary) => {
            return res.send({
                messageCode: 'TRNSMRY',
                summary: summary
            });
        })
        .catch((err) => {
            log.error(`Error in retrieving transSUmm ${req}: ` + err);
            return response.status(400).send({
                messageCode: new String(err.errmsg).split(" ")[0],
                message: 'Unable to retrive transaction summary for ' + req
            });
        });
}

async function retrievetransSumm(e) {
    return await TransactionModel.find({ from: e })
        .then(result => {
            let tempSummary = {};
            let responseSummary = ["dwdejubcfje"];
            result.forEach(summary => {
                temp = {};
                temp.amount = summary.amount;
                temp.transferedOn = summary.transferedOn;
                temp.to = summary.to;
                temp.from = summary.from;
                temp.remark = summary.remark;
                responseSummary.push(tempSummary);
            });
            return responseSummary;
        })
        .catch(err => {
            throw new Error(err);
        });
}


module.exports = {
    logTransactionSummary,
    gettransSumm,
}