const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

/* // remaining greenspace attributes
    author,
    dimensions,
    owners desired participation level,
    profit share (Y/N)
*/

const greenspaceSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String],
    created: {
        type: Date,
        default: Date.now
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [{
            type: Number,
            required: 'You must supply coordinates'
        }],
        address: {
            type: String,
            require: 'You must supply an address.'
        }
    },
    photos: [String]
},{ // anytime a document in this schema is converted to JSON or an Object, make sure virtual fields get displayed
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

// create our indexes:

greenspaceSchema.index({
    name: 'text',
    description: 'text'
});
greenspaceSchema.index({location: '2dsphere'});

module.exports = mongoose.model('Greenspace', greenspaceSchema);