import mongoose from 'mongoose';

const submitSchema = mongoose.Schema({
    submitter: {
        type: String,
        organization: String,
        required: true,
    },
    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            answer: {
                type: Number,
                required: true,
                min: 1,
                max: 7
            }
        }
    ],    
    isComplete: {
        type: Boolean,
        default: false
    }
});

const SubmitSurvey = mongoose.model('SubmitSurvey', submitSchema);

export default SubmitSurvey;