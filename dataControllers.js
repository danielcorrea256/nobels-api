const { getByYear } = require('./dataModels')

async function getNobels(req, res, year){
    try {
        const nobels = await getByYear(year)
        if(!nobels){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Data not found'}))
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(nobels))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getNobels
}