const   express = require('express');
const   { createEvent, getEvents } = require('../controllers/eventController');

const   router = express.Router();

router.post('/', (req, res, next) => {
    console.log('Received a POST request for /events');
    next(); // Call the next middleware or route handler
}, createEvent);

router.get('/', (req, res, next) => {
    console.log('Received a GET request for /events');
    next(); // Call the next middleware or route handler
}, getEvents);

module.exports = router;