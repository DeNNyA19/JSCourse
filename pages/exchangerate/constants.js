const dateFormat = "YYYY-MM-DD";
const methods = {
    latestRate: (base) => `latest?base=${base}`,
    historyRate: (startAt, endAt, base) => `history?start_at=${startAt}&end_at=${endAt}&base=${base}` 
}

module.exports = { dateFormat, methods }
