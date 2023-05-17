//Add all routes that have something to do with survey responses.
import express from 'express';

import { getSurveys, createSubmission } from '../controllers/surveys.js';

const router = express.Router();

router.get('/', getSurveys);
router.post('/', createSubmission);

export default router;