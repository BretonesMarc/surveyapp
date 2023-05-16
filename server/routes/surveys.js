//Add all routes that have something to do with survey responses.
import express from 'express';

import { getSurveys } from '../controllers/surveys.js';

const router = express.Router();

router.get('/', getSurveys);

export default router;