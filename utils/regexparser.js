getResultsCount = (resultsText) => {
    return new RegExp(' ([\\d, ]+)').exec(resultsText)[1]
}

module.exports = { getResultsCount }