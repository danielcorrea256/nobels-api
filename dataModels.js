const { prizes } = require('./data/prize.json')


function getByYear(year){
    return new Promise(function(resolve, reject) {
        const yearWinners = prizes.filter((p) => p.year === year)
        resolve(yearWinners)
    })
}

module.exports = {
    getByYear
}