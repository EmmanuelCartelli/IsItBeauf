const mongoose = require('mongoose');

const beaufSchema = mongoose.Schema({
    name: { type: String, required: true },
    isBeauf: { type: Boolean, required: true },
    upVotes: { type: Number, required: true },
    downVotes: { type: Number, required: true },
    originalResult: { type: String }
});

module.exports = mongoose.model('Beauf', beaufSchema);