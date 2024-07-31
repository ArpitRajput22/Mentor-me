const express = require('express')
const router = express.Router();
const mentorController = require('../controller/mentorController');


router.get('/', mentorController.getAllMentors)
    .get('/:id', mentorController.getMentor)
    .post('/add-mentor', mentorController.addMentor)
    .put('/:id', mentorController.replaceMentor)
    .patch('/:id', mentorController.updateMentor)
    .delete('/:id', mentorController.deleteMentor);

exports.router = router;