const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    Setup: { 
        type: String,
        required: [true, 'Setup is required'],
        minlength: [10, "Setup must be at least 10 characters"]
    },
    Punchline: { 
        type: String,
        required: [true, 'Punchline is required'],
        minlength: [3, "Punchline must be at least 3 characters"]
    }
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;