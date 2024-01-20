const Logger = require('../logger/logger');
const log = new Logger('LIB');


function isNotValidSchema(error, res) {
    if (error) {
        console.log("checkpoint 1");
        log.error(`Schema validation error: ${error.details[0].message}`);
        res.status(400).send({
            messageCode: 'VALDERR',
            message: error.details[0].message
        });
        return true;
    }
    return false;
}

module.exports = {
    isNotValidSchema
}