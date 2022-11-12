const jwt = require('jsonwebtoken');
const config = require('config');

const secretKey = getJwtSecretKey();

function getJwtSecretKey() {
    try {
        return config.get('jwt.secretkey');
    } catch (err) {
        console.error('jwt key req for starting');
        process.exit(0);
    }
}

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(400).send({
            message: 'Access denied. Authentication token not found.',
            messageCode: 'TKNERR'
        });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        next();
    } catch (err) {
        return res.status(400).send({
            message: 'invAlid token',
            messageCode: '400'
        });
    }
}