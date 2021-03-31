'use strict';

const Promise = require('es6-promise')
const UserModel = require('../../src/models/user')
//const Bcrypt = require('bcrypt');
const { resolve } = require('bluebird');
let userSignUp = (request) => {

    console.log("Request Payload => ", request.payload);

    let user_data = {
        firstname: request.payload.firstname,
        lastname: request.payload.lastname,
        mobile: request.payload.mobile,
        emailID: request.payload.emailID,
        
    };

    const promise = new Promise((resolve, reject) => {
        UserModel.findOne({
            firstname: request.payload.firstname,
            lastname: request.payload.lastname,
            mobile: request.payload.mobile,
            password : request.payload.password,
            emailID : request.payload.emailID
        }, (err, data) => {
            if (err) {
                reject(err);
            }
            if (data) {
                console.log("Data", data);
                let response_object = {
                    status_code: 409,
                    message: "Conflict",
                    result: "User Already Exits"
                }

                resolve(response_object);

            } else {
                UserModel.create(user_data, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        let response_object = {
                            status_code: 200,
                            message: "Created",
                            result: "Add User SuccessFully"
                        }
                        resolve(response_object);
                    }
                })
            }
        })
    })
    return promise;
}

let userLogin = (request) => {

    console.log("Login Request Payload => ", request.payload);
  //  const salt =  Bcrypt.genSalt(20);
   // let encryted_test =  Bcrypt.hash(request.payload.password,salt)
    let user_data = {
        mobile: request.payload.mobile,
        password:request.payload.password
      
    };
    const promise = new Promise((resolve, reject) => {
        UserModel.findOne({
            mobile: request.payload.mobile,
            password:request.payload.password

            
        }, (err, data) => {
            if (err) {
                reject(err);
            }
            if (data) {
                let response_object = {
                    status_code: 200,
                    message: "Login",
                    result: " User Login Successfully"
                }
                resolve(response_object);

            } else {
                let response_object = {
                    status_code : 404,
                    message:"Not Found",
                    result:"Invalid Username and Password"
                }
                resolve(response_object);
            }
        })
    });
    return promise;

}

module.exports.User = {
    userSignUp,
    userLogin   
}