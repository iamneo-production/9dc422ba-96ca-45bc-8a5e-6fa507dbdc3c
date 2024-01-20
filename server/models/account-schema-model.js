const Joi = require('joi');
const mongoose = require('mongoose');

const payeeInputSchemaModel = {
    accountNo: Joi.string().min(12).required(),
    payee: {
        firstname: Joi.string().required(),
        lastname: Joi.string(),
        accountNo: Joi.string().min(12).required()
    }
}

const sendOtpSchemaModel = {
    phoneNo: Joi.string().required()
}

const verifyOtpSchemaModel = {
    phoneNo: Joi.string().required(),
    otp: Joi.string().required()
}

const newAccountInputSchemaModel = {
    username: Joi.string().min(6).required(),
    closingBalance: Joi.string().required(),
}

const transferAmountSchemaModel = {
    from: {
        accountNo: Joi.string().min(12).required(),
        amount: Joi.string().required()
    },
    to: {
        accountNo: Joi.string().min(12).required(),
        amount: Joi.string()
    },
    remark: Joi.string().required()

}

const mongoAccountSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    accountNo: { type: String, unique: true },
    closingBalance: String,
    createdOn: Date,
    lastActive: Date,
    payees: [
        {
            firstname: String,
            lastname: String,
            accountNo: String
        }
    ],
    isClosed: Boolean,
    closedOn: Date
});

module.exports = {
    payeeInputSchemaModel,
    newAccountInputSchemaModel,
    transferAmountSchemaModel,
    mongoAccountSchema,
    sendOtpSchemaModel,
    verifyOtpSchemaModel
}