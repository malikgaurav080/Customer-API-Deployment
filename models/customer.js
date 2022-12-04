const mongoose = require('mongoose');
let customerSchema = mongoose.Schema({
    // _id: {
    //     type: Number,
    //     required: true
    // },
    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Customer', customerSchema, 'Customers');