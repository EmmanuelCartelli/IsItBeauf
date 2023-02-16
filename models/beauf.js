const mongoose = require('mongoose');

const beaufSchema = mongoose.Schema({
    name: { type: String, required: true },
    isBeauf: { type: Boolean, required: true },
});

module.exports = mongoose.model('Beauf', beaufSchema);