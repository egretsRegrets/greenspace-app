const mongoose = require('mongoose');
const jimp = require('jimp'); // package to alter uploaded images
const uuid = require('uuid'); // package to help us assign unique id's to uploaded images
const multer = require('multer'); // package that will allow us to use multipart form-data, needed for image upload
const Greenspace = mongoose.model('Greenspace');

/* //get webpack and async sorted
exports.testPost = async (req, res) => {
    const greenspace = await (new Greenspace(req.body)).save();
};
*/

exports.testPost = (req, res) => {
    const greenspace = new Greenspace(req.body).save();
    console.log(`saved?: ${greenspace}`);
};