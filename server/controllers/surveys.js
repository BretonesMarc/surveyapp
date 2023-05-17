import SubmitSurvey from '../models/submitSurvey.js'

export const getSurveys = async (req, res) => {
    try {
        const submitSurveys = await SubmitSurvey.find();

        res.status(200).json(submitSurveys);
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

export const createSubmission = async (req, res) => {
    const submission = req.body;


    const newSubmission = new SubmitSurvey(submission);

    try {
        await newSubmission.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}