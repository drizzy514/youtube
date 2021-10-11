import videoData from "../assets/data/videoData";
const http = require("http")
const PORT = 3500

const server = http.createServer(async (res, req) => {
            if(req.url === "/videos" && req.method === "GET"){
                res.writeHead(200, {
                    "Access-Control-Allow-Origin" : "*",
                    "Content-type": "application/json charset=utf8"
                });
                res.end(JSON.stringify(videoData))
            }
})

server.listen(PORT, () => {
    console.log(`Bizning server ${PORT}-ishlamoqda`)
})