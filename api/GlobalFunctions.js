
function getRolesTable(req) {
    const { players, roles, calcBgs = false, bgRatio = 0.2, html = false } = req;
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
    if (html) {
        const table = tableMaker(assignments)
        return table;
    }
    else {
        return assignments
    }

};

const tableMaker = (o => {
    var keys = Object.keys(o[0]),
        rowMaker = (a, t) => a.reduce((p, c, i, a) => p + (i === a.length - 1 ? "<" + t + ">" + c + "</" + t + "></tr>"
            : "<" + t + ">" + c + "</" + t + ">"), "<tr>"),
        rows = o.reduce((r, c) => r + rowMaker(keys.reduce((v, k) => v.concat(c[k]), []), "td"), rowMaker(keys, "th"));
    return "<table>" + rows + "</table>";
});


module.exports = {
    getRolesTable
};