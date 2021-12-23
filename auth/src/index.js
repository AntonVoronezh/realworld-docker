const express = require('express');
const {connectDB} = require("./helpers/db");
const axios = require("axios");
const {port, host, db, apiUrl} = require("./configuration");
const app = express();

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly.')
})

app.get('/api/currentUser', (req, res) => {
    res.json({
        "email": "fooooo@gggg.tu",
        "id": "1234"
    })
})

app.get('/testwithapidata', (req, res) => {
    axios.get(apiUrl + '/testapidata').then(response => {
        res.json({
            testApiData: response.data.testWithApi
        })
    })

})

const startServer = () => {
    app.listen(port, ()=> {
        console.log(`Started auth service on port! ${port}`)
        console.log(`Started auth service on host ${host}`)
        console.log(`Our database ${db}`)
    })
}

connectDB()
    .then(startServer)
    .catch(console.log)

