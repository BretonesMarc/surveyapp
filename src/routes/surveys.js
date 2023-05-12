const express = require('express');
const User = require('../models/User');
const Survey = require('../models/Survey');
const router = express.Router();

router.post('/:userId', async (req, res) => {
  try {
    const survey = new Survey({ userId: req.params.userId, answers: req.body });
    await survey.save();

    const user = await User.findById(req.params.userId);
    user.surveys.push(survey.id);
    await user.save();

    res.status(201).send(survey);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
