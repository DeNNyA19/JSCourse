class Log {
    info(text) {
        console.log(`[INFO] ${text} [INFO]`);
    }

    warning(text = "Some text") {
        console.log(`[WARNING] ${text} [WARNING]`);
    }

    error(text) {
        console.log(`[ERROR] ${text} [ERROR]`);
    }
}

module.exports = new Log();