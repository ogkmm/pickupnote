const express = require("express")
const cors = require("cors")
const spotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(express.json())

const port = 8000

const credentials = {
    clientId: "ed6ad964016b4abdb116a69aeb5cb086",
    clientSecret: "47c46da85bcb47d2b305de5db9dad129",
    redirectUri: "http://localhost:5173/",
}

app.get("/", (req, res) => {
    console.log("Hello world")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
