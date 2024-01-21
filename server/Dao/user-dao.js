const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const Logger = require('../logger/logger');
const log = new Logger('User-Dao-table');
const mongoose = require('mongoose');
const userSchema = require('../models/user-schema-model').mongoUserSchema;
const UserModel = mongoose.model('User', userSchema);
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs')


// MongoDB URL comes from .env file copy paste the url to make it work in dev mode
const dbUrl = "mongodb+srv://anuj:anuj@neobankanuj.car0yym.mongodb.net/";
console.log({ dbUrl });

// secret key needs to be same across all dao functions
const secretKey = "1122";

// Mongoose connection
try {
    mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
    log.info('connected to mongo database....');
} catch (error) {
    log.error("unable to connect to db" + error)
}

// Validate function for Login
async function validateLoginUser(loginInfo, response) {
    console.log(loginInfo);
    // search in db by username given and when it finds
    // something with that username trigger the function with err and result
    await UserModel.findOne({ username: loginInfo.username }, (err, result) => {
        // if there are no results or there is any error then throw err
        if (err || !result) {
            log.error(`Error in finding user with username ${loginInfo.username}: ` + err);
            return response.status(400).send({
                username: loginInfo.username,
                messageCode: 'USRFE',
                message: 'No user found with username ' + loginInfo.username
            });
        }

        // Now we have the username in result then check its password
        // for that use bcrypt for decrypting and then comparing it to our db
        // if there is a amtch then generate a JWT and send it to headers
        if (result && bcrypt.compareSync(loginInfo.password, result.password)) {
            log.info(loginInfo.username + ' has been validated');
            const jwtToken = jwt.sign({
                username: result.username,
            }, secretKey);

            return response.header('x-auth-token', jwtToken).send({
                username: loginInfo.username,
                'x-auth-token': jwtToken,
                messageCode: 'USRV',
                message: 'Valid credential.'
            });
        }
        else {
            // else if password does not match then throw something is wrong
            log.warn('Unable to validate ' + loginInfo.username);
            return response.status(404).send({
                username: loginInfo.username,
                messageCode: 'USRNPI',
                message: 'Username or Password incorrect.'
            });
        }
    });
}

// New User register Function

async function resgisterNewUser(userObj, response) {
    let newUser = new UserModel({
        firstname: userObj.firstname,
        lastname: userObj.lastname,
        emailId: userObj.emailId,
        username: userObj.username,
        password: userObj.password,
        phoneNo: userObj.phoneNo,
        city: userObj.city,
        state: userObj.state,
        country: userObj.country,
        pin: userObj.pin,
        aadharID: userObj.aadharId,
        panNo: userObj.panNo,
        gender: userObj.gender,
        annialIncome: userObj.annialIncome,
        marital: userObj.marital,
    });

    newUser.password = newUser.encryptPassword();

    // new user created now save it into the db
    await newUser.save((err, result) => {
        // if there is any err then throw err else show status 200
        if (err) {
            log.error(`Error in registering new user with username ${userObj.username}: ` + err);
            return response.status(400).send({
                messageCode: new String(err.errmsg).split(" ")[0],
                message: 'Username ' + userObj.username + ' already exists.'
            });
        };
        log.info(result.username + ' has been registered');
        return response.send({
            messageCode: 'USRR',
            message: 'You have been registered successfully.',
            username: result.username
        });
    });
}

// get details by username

async function getUserByUsername(username, response) {
    // search in db and see if there is any username matching with these
    await UserModel.find({ username: username }, (err, result) => {
        // if there arent any of them then throw err else show details
        if (err) {
            log.error(`Error in retrieving user by username ${username} : ` + err);
            return response.status(404).send({
                messageCode: 'USRFE',
                message: 'No user found by username ' + username
            });
        }
        log.info('Retrieving user details by username ' + username);
        return response.send(result);
    });
}

function getJWT() {
    // console.log("function working");
    try {
        var custom_env_variable = {
            "jwt": {
                "secretkey": process.env.JWT_SECRET_KEY
            }
        }
        const temp = custom_env_variable.jwt.secretkey;
        console.log({ temp });
        return temp;
        // console.log({ config });
        // return config.get('jwt.secretkey');
    }
    catch (err) {
        console.error(`jwt secret key setting up failed ${err} check logger`);
        process.exit(0);
    }
}

module.exports = {
    validateLoginUser,
    resgisterNewUser,
    getUserByUsername
}