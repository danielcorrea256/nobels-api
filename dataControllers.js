const { getByFilter } = require('./dataModels')

async function getNobels(req, res, filters){
    try {
        const nobels = await getByFilter(filters)
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