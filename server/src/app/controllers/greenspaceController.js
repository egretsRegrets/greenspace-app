const mongoose = require('mongoose');
const jimp = require('jimp'); // package to alter uploaded images
const uuid = require('uuid'); // package to help us assign unique id's to uploaded images
const multer = require('multer'); // package that will allow us to use multipart form-data, needed for image upload
const Greenspace = mongoose.model('Greenspace');


exports.testPost = async (req, res) => {
    const greenspace = await (new Greenspace(req.body)).save();
    console.log(`saved?: ${greenspace}`);
};

exports.testGet = async (req, res) => {
    const stores = await Greenspace.find();
    console.log(stores);
};


/*
exports.testPost = (req, res) => {
    const greenspace = new Greenspace(req.body).save();
    console.log(`saved?: ${greenspace}`);
};
*/