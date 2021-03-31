'use strict';

const mongo = require('./server/mongo_server');
const node = require('./server/node_server');


node().then(server => {
    console.log("Node Server Started Successfully")
});

mongo();