const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for requests from http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('MongoDB connection error:', err));

// Define the Event model
const eventSchema = new mongoose.Schema({
    date: Date,
    budget: Number,
    minPeople: Number,
    maxPeople: Number,
});

// Create a new event
const Event = mongoose.model('Event', eventSchema);

app.post('/events',async (req, res) => {
    try {
        const eventData = req.body;
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).send({message : 'Event created successfully', event : newEvent});
    } catch (error) {
        console.error(error);
        res.status(500).send({message : 'Error creating event'});
    }
});

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});