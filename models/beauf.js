const mongoose = require('mongoose');

const beaufSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    isBeauf: { type: Boolean, required: true },
});

module.exports = mongoose.model('Beauf', beaufSchema);