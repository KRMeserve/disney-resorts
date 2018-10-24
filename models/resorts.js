const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url: String,
    description: String,
    img: {type: String, required: true}
});

const Resorts = mongoose.model('Resorts', resortSchema);

module.exports = Resorts;
