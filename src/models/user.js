'use strict'
const Mongoose = require('mongoose');
let userSchema = new Mongoose.Schema({
    firstname : { type : String, default:''},
    lastname: { type: String, default : ''},
    mobile: { type:String , default:''},
    emailID: { type : String , default :''},
    password: { type: String, default:''}

})

const UserModel = Mongoose.model("User",userSchema,"User");

module.exports = UserModel;