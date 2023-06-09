import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import surveyRoutes from './routes/surveys.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({ origin: '*'}));

app.use('/surveys', surveyRoutes);

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
