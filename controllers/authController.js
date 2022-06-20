const User = require('../models/User')
const {StatusCodes} = require('http-status-codes');
const CoustomError = require('../errors');

const register = async (req, res) => {

    // visit https://mongoosejs.com/docs/api/model.html#model_Model.create
    const user = await User.create(req.body)

    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res) => {

    res.send('some string value')
}

const logout = async (req, res) => {

    res.send('some string value')
}





module.exports = {register, login,logout};