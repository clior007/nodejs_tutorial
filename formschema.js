const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formSchema = new schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true});

const form = mongoose.model('form', formSchema);

module.exports = form;