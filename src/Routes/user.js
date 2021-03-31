'use strict'

const {User}  = require('../Controllers/user');

 const array_of_user = [
    {
        method:"POST",
        path:"/signup",
        options:User.signup()
    },
    {
        method:"POST",
        path:"/login",
        options:User.login()
    }
]
module.exports = {
    array_of_user
}