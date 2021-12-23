const express = require('express');
const {connectDB} = require("./helpers/db");
const {port, host, db, authApiUrl} = require("./configuration");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();

const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postSchema);

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly.')
})

app.get('/testwithcurrentuser', (req, res) => {
    console.log("authApiUrl", authApiUrl);
    axios.get(`${authApiUrl}/currentUser`).then(responce => {
        res.json({
            testwithcurrentuser: true,
            currnetUserFromAuth: responce.data
        });
    })
    // res.json({testwithcurrentuser: true});
})

app.get('/api/testapidata', (req, res)=> {
    res.json({
        testWithApi: true
    })
})

const startServer = () => {
    app.listen(port, ()=>{
        console.log(`Started api service on port!@@@ ${port}`)
        console.log(`Started api service on host ${host}`)
        console.log(`Our database ${db}`)

        const silence = new Post({ name: 'Silence' });
        // console.log(silence); // 'Silence'
        silence.save((err, savedSilence)=>{
            if(err) {
                console.log(err)
                return
            }

            console.log('savedSilence!', savedSilence)
        }
)

        // Post.find((err, posts)=>{
        //     if(err) {
        //         console.log(err)
        //         return
        //     }
        //
        //     console.log('Posts', posts)
        // })
    })
}

connectDB()
    .then(startServer)
    .catch(console.log)

