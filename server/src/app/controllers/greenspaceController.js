const mongoose = require('mongoose');
const jimp = require('jimp'); // package to alter uploaded images
const uuid = require('uuid'); // package to help us assign unique id's to uploaded images
const multer = require('multer'); // package that will allow us to use multipart form-data, needed for image upload
const Greenspace = mongoose.model('Greenspace');

const multerOptions = {
    storage: multer.memoryStorage(),
    // function photos are passed to
    fileFilter(req, file, callback) {
        // basic check for file type
        const isPhoto = file.mimetype.startsWith('image/');
        if (isPhoto) {
            // no error message
            callback(null, true);
        } else{
            // includes message for failure
            callback({message: 'That file type is not supported'}, false);
        }
    }
};

// add resize photo to bring photos to standard sizes

exports.createGreenspace = async (req, res) => {
    const greenspace = await (new Greenspace(req.body)).save();
    console.log(`saved?: ${greenspace}`);
    res.status(201).json(greenspace);
};

exports.testGet = async (req, res) => {
    const stores = await Greenspace.find();
    res.status(200).json(stores);
};
