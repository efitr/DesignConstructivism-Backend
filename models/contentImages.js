
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentImages = mongoose.model('ContentImages', {
    image: String,
    content: String,
    feedback: String,
    referenceImageId: {type: Schema.Types.ObjectId, ref: 'ReferenceImage'}
});

module.exports = ContentImages;