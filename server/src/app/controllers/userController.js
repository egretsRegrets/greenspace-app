const mongoose = require('mongoose');
const jimp = require('jimp'); // package to alter uploaded images
const uuid = require('uuid'); // package to help us assign unique id's to uploaded images
const multer = require('multer'); // package that will allow us to use multipart form-data, needed for image upload

const User = mongoose.model('User');

exports.createUser = async (req, res) => {
    const user = await (new User(req.body)).save();
    console.log(`User saved?: ${user}`);
    res.status(201).json(user);
};