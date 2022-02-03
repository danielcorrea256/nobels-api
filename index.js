const http = require('http')
const url = require('url')
const { getNobels } = require('./dataControllers')

const server = http.createServer((req, res) => {
    const urlRequest = new URL(req.url, `http://${req.headers.host}`)
    if(urlRequest) {
        const year = urlRequest.searchParams.get('year')
        getNobels(req,res,year)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'I dont understand your request'}))
    }
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on ${PORT} port`))