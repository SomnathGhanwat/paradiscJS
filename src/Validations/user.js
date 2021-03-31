'use strict';

const Joi = require('joi');

const UserValidation = {
    payload: Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        mobile:Joi.string().required().required(),
        emailID:Joi.string().required(),
        password: Joi.string().required()
    })
};

module.exports = {
    UserValidation
}