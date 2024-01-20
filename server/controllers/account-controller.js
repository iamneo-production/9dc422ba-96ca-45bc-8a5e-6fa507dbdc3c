const express = require('express');
const accountrouter = express.Router();
const accountValidator = require('../validator/account-schema-validator');
const accountDao = require('../Dao/account-dao');
const Logger = require('../logger/logger');
const log = new Logger('Account-Controller-table');
const authTokenValidator = require('../middleware/auth-token-validator');
const notValidSchema = require('../lib/notValidSchema');
const isSameAccountNo = require('../lib/sameAccountNo');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const verifySid = process.env.verifySID;

// -----------> http://localhost:3000/account <----------------  //


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
    // console.log({ req });
    console.log(req.params.username);
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

accountrouter.post('/createnewaccount', authTokenValidator, async (req, res) => {
    console.log({ req });
    let newAccount = req.body;
    // validation for schema using joi
    let { error } = accountValidator.validateCreateNewAccountSchema(newAccount);
    // not valid function from lib
    if (notValidSchema.isNotValidSchema(error, res)) return;
    // here dao function create new account is async coming from dao
    try {
        await accountDao.createNewAccount(newAccount, res);
        console.log({ res });
    } catch (error) {
        log.error(`Error in creating new account for username ${newAccount.username}: ` + err);
    }
});

accountrouter.post('/sendOtp', authTokenValidator, async (req, res) => {
    const phoneNo = req.body;
    console.log("checkpoint 1");
    let { error } = accountValidator.validateSendOtpSchema(phoneNo);
    console.log("checkpoint 2");
    if (notValidSchema.isNotValidSchema(error, res)) return;
    try {
        // send otp service
        console.log(client);
        const otpResponse = await client.verify.v2
            .services(verifySid)
            .verifications.create({
                to: `+91${phoneNo.phoneNo}`,
                channel: 'sms',
            })
        console.log(otpResponse);
        log.info(`Sucessfully sent the otp to phoneNo ${phoneNo.phoneNo}`);
        res.status(200).send({
            message: 'Otp Sent to phoneNo' + phoneNo.phoneNo,
            result: otpResponse
        })
    } catch (error) {
        // error in sending the otp using twilio
        log.error(`Error in sending the otp using twilio for phone No ${phoneNo.phoneNo}`)
        return res.status(400).send({
            message: 'Error in sending otp!'
        })
    }
})

accountrouter.post('/verifyOtp', authTokenValidator, async (req, res) => {
    const otpInfo = req.body;
    console.log({ otpInfo });
    const otp = otpInfo.otp;
    const phoneNo = otpInfo.phoneNo;
    let { error } = accountValidator.validateVerifyOtpSchema(otpInfo);
    if (notValidSchema.isNotValidSchema(error, res)) return;
    try {
        const verifiedResponse = await client.verify.v2.services(verifySid)
            .verificationChecks
            .create({ to: `+91${phoneNo}`, code: otp });
        console.log({ verifiedResponse });

        if (verifiedResponse.status === 'approved') {
            log.info(`Successfully verified`);
            return res.status(200).send({
                message: 'Otp matched',
            });
        }
        else {
            res.status(400).send({
                message: 'Wrong otp entered'
            })
        }

    } catch (error) {
        log.error(`Error in verifing the otp` + error);
        res.status(404).send({
            message: 'Wrong otp'
        })
    }
})

//debugging some functions
// will be adding testing scripts of jest very soon


// after creating new account the second post function is add payee
// used for adding a beneficiary's account for transaction
// usses auth token (jwt for security)

accountrouter.post('/addpayee', authTokenValidator, async (req, res) => {
    console.log({ req });
    let newPayee = req.body;
    // validation for schema using joi
    let { error } = accountValidator.validatePayeeSchema(newPayee);
    if (notValidSchema.isNotValidSchema(error, res)) return;
    // if given beneficiarry already exists
    // comes from lib
    if (isSameAccountNo.isSameAccountNo(newPayee.accountNo, newPayee.payee.accountNo, res)) return;
    try {
        await accountDao.addPayee(newPayee, res);
    } catch (error) {
        log.error(`Error in adding payee ${newPayee}: ` + err);
    }
});

// get payee for getting details of that particular beneficiary

accountrouter.get('/getpayees/:accountno', authTokenValidator, async (req, res) => {
    console.log({ req });
    console.log({ res });
    let accountNo = req.params.accountno;
    // retrive coming from dao
    try {
        await accountDao.retrievePayeeList(accountNo, res);
        console.log({ res });
    } catch (error) {
        log.error(`Error in retrieving payee list for account no. ${accountNo}: ` + err);
    }
});

// probably the most difficult post function of this server
// Transfer ammount
// auth token is used for security

accountrouter.post('/transferamount', authTokenValidator, async (req, res) => {
    // console.log({ req }, { res });
    let transferAmount = req.body;
    // schema validation using joi
    let { error } = accountValidator.validateTransferAmountSchema(transferAmount);
    if (notValidSchema.isNotValidSchema(error, res)) return;
    if (isSameAccountNo.isSameAccountNo(transferAmount.from.accountNo, transferAmount.to.accountNo, res)) return;

    // before accessing the transfer function from dao
    // need to check whether the current account have enough closing balance
    if (transferAmount.from.amount !== transferAmount.to.amount) {
        res.status(400).send({
            messageCode: 'INVAMNT',
            message: 'Invalid transaction amount'
        });
        return;
    }

    // need jwt token for verification and authority of that user
    // transfer ammount coming from accoun dao

    try {
        await accountDao.transferAmount(transferAmount, res, req.header('x-auth-token'))
    } catch (error) {
        log.error(`Error in transaction from ${transferAmount.from.accountNo} to ${transferAmount.to.accountNo} of amount ${transferAmount.from.amount}: ` + error);
        return res.send({ message: 'Error in controller try catch' })
    }
});

// deleting a benificary
// uses jwt token

accountrouter.post('/deletepayee', authTokenValidator, async (req, res) => {
    console.log({ req });
    let requestBody = req.body;
    // validation of schema using joi from validator
    let { error } = accountValidator.validatePayeeSchema(requestBody);
    if (notValidSchema.isNotValidSchema(error, res)) return;
    // if acc no same with payee acc no then throw err
    if (isSameAccountNo.isSameAccountNo(requestBody.accountNo, requestBody.payee.accountNo, res)) return;

    // delete function coming from dao
    try {
        await accountDao.deletePayee(requestBody.accountNo, requestBody.payee, res);
    } catch (error) {
        log.error(`Error in deleting payee ${requestBody.payee} for account no. ${requestBody.accountNo}: ` + err);
    }
});

// lib functions
// ------------------------->LIB <------------------------------------- //
// notValidSchema isSameAccountNo



module.exports = accountrouter;