const Joi = require('joi');
const transactionSchemaModel = require('./transactionSchema_model');

const validateTransationSummarySchema = (transactionSummary) => {
    return Joi.validate(transactionSummary, transactionSchemaModel.transactionSummarySchemaModel);
}

module.exports = {
    validateTransationSummarySchema
}