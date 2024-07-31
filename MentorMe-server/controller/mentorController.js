const model = require('../model/mentorModel')
const Mentor = model.Mentor;

const addMentor =  (req, res) => {
   const newMentor = new Mentor(req.body);
    newMentor.save();
    try {
        res.send(newMentor);
    }
    catch (err) {
        console.log(err);
    }
}

const getAllMentors = async (req, res) => {
    const condition={}
    const mentors = await Mentor.find(condition)
      res.json(mentors);
}
const getMentor = async(req, res) => {
    const id = req.params.id;
    const mentor = await Mentor.findById(id);
    res.json(mentor)
}
const replaceMentor = async (req, res) => {
    const id = req.params.id;
    try{
    const doc = await Mentor.findOneAndReplace({_id:id}, req.body,{new:true});
        res.status(201).json(doc);
} 
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
};
const updateMentor = async(req, res) => {
    const id = req.params.id;
    try{
    const doc = await Mentor.findOneAndUpdate({_id:id}, req.body,{new:true});
        res.status(201).json(doc);
} 
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}
const deleteMentor = async(req, res) => {
    const id = req.params.id;
    try{
    const doc = await Mentor.findOneAndDelete({_id:id},{new:true});
        res.status(201).json(doc);
} 
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

module.exports = { addMentor, getAllMentors, getMentor, replaceMentor, updateMentor, deleteMentor }