const mongoose = require('mongoose');

const gaeSchema = mongoose.Schema({
    name: { type: String, required: true },
    isItGae: { type: Boolean, required: true },
});

module.exports = mongoose.model('Gae', gaeSchema);