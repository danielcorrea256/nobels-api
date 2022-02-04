const { prizes } = require('./data/prize.json')


function getByFilter(filter){
    return new Promise(function(resolve, reject) {
        const nobels = prizes.filter(function(p){
            year_match = filter.year.length > 0 ? filter.year.includes(p.year) : true; 
            category_match = filter.category.length > 0? filter.category.includes(p.category) : true;
            return year_match && category_match;
        })
        resolve(nobels)
    })
}

module.exports = {
    getByFilter
}