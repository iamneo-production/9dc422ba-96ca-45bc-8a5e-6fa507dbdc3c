const Joi = require('joi');
const accountSchemaModel = require('../models/account-schema-model');

const validateCreateNewAccountSchema = (newAccount) => {
    return Joi.validate(newAccount, accountSchemaModel.newAccountInputSchemaModel);
}

const validatePayeeSchema = (payee) => {
    return Joi.validate(payee, accountSchemaModel.payeeInputSchemaModel);
}

const validateTransferAmountSchema = (transferAmount) => {
    return Joi.validate(transferAmount, accountSchemaModel.transferAmountSchemaModel);
}

const validateSendOtpSchema = (phoneNo) => {
    return Joi.validate(phoneNo, accountSchemaModel.sendOtpSchemaModel)
}

const validateVerifyOtpSchema = (otpInfo) => {
    return Joi.validate(otpInfo, accountSchemaModel.verifyOtpSchemaModel)
}

module.exports = {
    validateCreateNewAccountSchema,
    validatePayeeSchema,
    validateTransferAmountSchema,
    validateSendOtpSchema,
    validateVerifyOtpSchema
}