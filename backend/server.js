const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB',err);
});

app.use('/events', eventRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Backend');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});