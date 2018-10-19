

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReferenceImage = mongoose.model('ReferenceImage', {
    title: String,
    image: String,
    // userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = ReferenceImage;