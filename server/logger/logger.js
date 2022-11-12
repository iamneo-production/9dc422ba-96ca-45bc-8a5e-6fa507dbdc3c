class Logger {
    constructor(loggerName) {
        this.loggerName = loggerName;
    }

    info(message) {
        console.log(message);
    }

    warn(message) {
        console.log(message);
    }

    error(message) {
        console.log(message);
    }
}


module.exports = Logger;