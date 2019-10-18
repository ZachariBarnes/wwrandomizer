const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const ui = require('../ui/build/index.html');
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
app.use(express.static(__dirname + '/build'));
app.use(cors());
app.use(bodyParser.json());
app.get('/*', async (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {

        if (req.url.includes("wwrandomizer")) {
            req.url = req.url.replace("/wwrandomizer", "");
        }

        res.sendFile(path.resolve(`../ui/build/${req.url}`));
    } else {
        res.sendFile(path.resolve('../ui/build/index.html'));
    }
})
app.post('/', async (req, res) => {
    const { players, roles, calcBgs = false, bgRatio = 0.2, } = req.body;
    if (calcBgs) {
        const numBGs = Math.ceil(players.length * bgRatio);
        console.log(`Caluclating number of BGs. \n Creating ...${numBGs} BGs`);
        for (var i = 0; i < numBGs; i++) {
            roles.push("BG");
        }
    }
    console.log(`Number of Roles: ${roles.length}, \nNumber of Player: ${players.length}`)
    if (roles.length < players.length) {
        console.log(`Creating ${players.length - roles.length} PJVs`)
    }
    while (roles.length < players.length) {
        roles.push("PJV");
    }

    players.sort(function () { return 0.5 - Math.random(); }); // shuffle arrays
    roles.sort(function () { return 0.5 - Math.random(); });
    const assignments = [];
    while (players.length) {
        var playerName = players.pop(), // get the last value of arr1
            roleName = roles.pop();
        const assignment = { Player: playerName, Role: roleName }
        assignments.push(assignment);
        console.log(playerName + ' gets ' + roleName);
    }
    const table = tableMaker(assignments)
    res.send(table);
});

const tableMaker = (o => {
    var keys = Object.keys(o[0]),
        rowMaker = (a, t) => a.reduce((p, c, i, a) => p + (i === a.length - 1 ? "<" + t + ">" + c + "</" + t + "></tr>"
            : "<" + t + ">" + c + "</" + t + ">"), "<tr>"),
        rows = o.reduce((r, c) => r + rowMaker(keys.reduce((v, k) => v.concat(c[k]), []), "td"), rowMaker(keys, "th"));
    return "<table>" + rows + "</table>";
});

function contstructTable(input) {
    var assignments = { assignments: input };

    // $.parseJSON will parse the txt (JSON) and convert it to an
    // JavaScript object. After its call, it gets the employees property
    // and sets it to the employees variable

    var myTable = $("<table></table>");

    for (var i = 0; i < assignments.length; i++) {
        var playerRole = assignments[i];
        var line = $("<tr></tr>");
        line.append($("<td></td>").html(playerRole.player));
        line.append($("<td></td>").html(playerRole.role));
        myTable.append(line);
    }

    return myTable;
}
// Starts Local server -- COMMENT OUT FOR DEPLOYMENT
app.listen(process.env.PORT || PORT, () => {
    console.log(`Bot is listening on port ${PORT}`);
});
