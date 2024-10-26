const mongoose = require('mongoose');

const eventSchem = new mongoose.Schema({
    data : Date,
    budget : Number,
    minPeople : Number,
    maxPeople : Number
});

const Event = mongoose.model('Event', eventSchem);

module.exports = Event;