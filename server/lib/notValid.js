const Logger = require('../logger/logger');
const log = new Logger('LIB');

function notValid(err, res) {
    if (err) {
        log.error(`Schema validation error: ${err.details[0].message}`);
        res.send({
            messageCode: 'VALDERR',
            message: err.details[0].message
        });
        return true;
    }
    return false;
}

module.exports = {
    notValid
}