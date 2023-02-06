const Joi = require('joi');
const transactionSchemaModel = require('../models/transaction-schema-model');

const validateTransationSummarySchema = (transactionSummary) => {
    return Joi.validate(transactionSummary, transactionSchemaModel.transactionSummarySchemaModel);
}

module.exports = {
    validateTransationSummarySchema
}