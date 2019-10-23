const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const getRolesTable = require('./GlobalFunctions');
const request = require('request');
var cors = require("cors");


const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];

// Creates express app
const app = express();
// The port used for Express server
const PORT = 9000;

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static(__dirname + '../ui/build'));
app.use(cors());
app.use(bodyParser.json());
app.get('/*', async (req, res) => {
    if (__dirname.indexOf('localhost') > 0) {
        res.send(await request.get('https://ww-randomizer.s3.amazonaws.com/build/index.html'))
    }
    else {
        if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {

            if (req.url.includes("wwrandomizer")) {
                req.url = req.url.replace("/wwrandomizer", "");
            }

            res.sendFile(path.resolve(`../ui/build/${req.url}`));
        } else {
            res.sendFile(path.resolve('..ui/build/index.html'));
        }
    }
})
app.post('/', async (req, res) => {
    const table = getRolesTable(req.body);
    res.send(table);
});


// Starts Local server -- COMMENT OUT FOR DEPLOYMENT
app.listen(process.env.PORT || PORT, () => {
    console.log(`Bot is listening on port ${PORT}`);
});

//Required for lambda Deployment, Comment out for Local Development
// module.exports = app;