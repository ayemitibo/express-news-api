const app = require("express")()
const axios = require('axios')
const cors = require("cors")

app.use(
    cors({
      origin: '*', // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      optionsSuccessStatus: 200,
      credentials: true // allow session cookie from browser to pass through
    })
);

app.get("/top-headlines", async function(req, res) { 
    try {
        const params = req.query

        const response = await axios.get("https://newsapi.org/v2/top-headlines",{
            params: {
                ...params
            }
        })

        return res.status(200).send(response.data)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err.response.data)
    }
   
})

app.get("/everything", async function(req, res) { 
    try {
        const params = req.query

        const response = await axios.get("https://newsapi.org/v2/everything",{
            params: {
                ...params
            }
        })

        return res.status(200).send(response.data)
    } catch(err) {
        console.log(err)
        return res.status(500).send(err.response.data)
    }
   
})

app.listen(process.env.PORT || 5000)