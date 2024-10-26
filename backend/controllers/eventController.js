const Event = require('../models/eventModel');

const createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).send({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating event' });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send(events);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error getting events' });
    }
};

module.exports = {
    createEvent,
    getEvents,
};