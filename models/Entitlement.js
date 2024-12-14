const mongoose = require('mongoose');

const entitlement = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    key: {
        type: String,
        required: true,
        unique: true
    },
},{timestamps:true});

module.exports = mongoose.model('Entitlements',entitlement);