const express = require('express');
const userrouter = express.Router();
const userValidator = require('../validator/user-schema-validator');
const userDao = require('../Dao/user-dao');
const Logger = require('../logger/logger');
const log = new Logger('User-Controller-table');

// This table does not require JWR because new register dont need to have a header yet
// However if update and forgot functionalities are added then it will be required



// -----------> http://localhost:3000/users <----------------  //

// Registering the new user int he users table (do not confuse this with new account creation)

userrouter.post('/register', async (req, res) => {
    console.log({ req });
    let userObj = req.body || req.query;
    // joi is used for schema validation
    let { error } = userValidator.validateNewUserSchema(userObj);
    if (isNotValidSchema(error, res)) return;
    // register function is comeing form dao
    try {
        await userDao.resgisterNewUser(userObj, res)
    } catch (error) {
        log.error(`Error in registering new user with username ${userObj.username}: ` + err);
    }
});

// Manual validation for checking the credentials taken from the client is matching with
// the db if not then throw err
// else redirect it to the homepage

userrouter.post('/validateuser', async (req, res) => {
    console.log({ req });
    let loginInfo = req.body || req.query;
    // joi for schema validation
    let { error } = userValidator.validateLoginUserSchema(loginInfo);
    if (isNotValidSchema(error, res)) return;

    // Validation function manually coded no external libraries used
    // function is coming from dao
    try {
        await userDao.validateLoginUser(loginInfo, res);
    } catch (error) {
        log.error(`Error in login for username ${loginInfo.username}: ` + err);
    }
});


// ------------------->LIB<------------------------------- //

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

module.exports = userrouter;