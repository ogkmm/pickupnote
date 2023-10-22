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

app.post("/getToken", (req, res) => {
    let spotifyApi = new spotifyWebApi(credentials)

    // Get the 'code' parameter
    const code = req.body.code

    // Retrieve an access token
    spotifyApi.authorizationCodeGrant(code).then((data) => {
        console.log(data.body)
        res.json({
            accessToken: data.body.access_token,
            expiresTime: data.body.expires_in,
            refreshToken: data.body.refresh_token,
        })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
