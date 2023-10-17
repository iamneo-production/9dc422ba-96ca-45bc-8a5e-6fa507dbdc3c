const jwt = require('jsonwebtoken');

const secretKey = "1122";


module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(400).send({
            message: 'Access denied. Authentication token not found.',
            messageCode: 'TKNERR'
        });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        console.log({ payload });
        next();
    } catch (err) {
        return res.status(400).send({
            message: 'Access denied. Invalid authentication token.',
            messageCode: 'INVTKN'
        });
    }
}


function getJWT() {
    // console.log("function working");
    try {
        var custom_env_variable = {
            "jwt": {
                "secretkey": "bankingapp-secretkey"
            }
        }
        const temp = custom_env_variable.jwt.secretkey;
        console.log({ temp });
        return temp;
        // console.log({ config.get(custom_env_variable.jwt) });
        // return config.get('jwt.secretkey');
    }
    catch (err) {
        console.error(`jwt secret key setting up failed ${err} check logger`);
        process.exit(0);
    }
}
