const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
//  middleware to get req.body.text
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

// overwrite the default express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
