const express = require('express');
const {connectDB} = require("./helpers/db");
const {port, host, db} = require("./configuration");

const app = express();


app.get('/test', (req, res) => {
    res.send('Our api server is working correctly')
})

const startServer = () => {
    app.listen(port, ()=>{
        console.log(`Started api service on port ${port}`)
        console.log(`Started api service on host ${host}`)
        console.log(`Our database ${db}`)
    })
}

connectDB()
    .then(startServer)
    .catch(console.log)

