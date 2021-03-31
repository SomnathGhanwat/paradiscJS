'use strict';
const { User } = require('../factory/user');


let signup = () => {
    return {
        handler: (request, h) => {
            let response = User.userSignUp(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })
        }
    }
}

let login = () => {
    return {
        handler : (request , h) => {
            let response = User.userLogin(request);
            return response.then((value) => {
                return value;
            }).catch(err => {
                return err;
            })

        }
    }
}

module.exports.User = {
    login,
    signup
}