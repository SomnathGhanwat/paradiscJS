'use strict';

const Hapi = require("hapi");
const {array_of_user} = require('../src/Routes/user')

 const node = async () => {
    const server = Hapi.server({
        host:'0.0.0.0',
        port:8080
    })

  
  for(const route in array_of_user){
      server.route(array_of_user[route])
  }
    await server.start();
    return server;
}


module.exports = node;