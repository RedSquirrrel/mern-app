const express = require('express');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

const goalRoutes = require('./routes/goalRoutes');

const app = express();

app.use(express.json());
//  middleware to get req.body.text
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

// overwrite the default express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
