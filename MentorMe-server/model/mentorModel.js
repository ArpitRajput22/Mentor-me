const mongoose = require('mongoose');
const { Schema } = mongoose;

// {
//     "name": "John Doe",
//     "profile_picture": "profile.jpg",
//     "title": "Software Engineer",
//     "company": "TechCorp Inc.",
//     "years_of_experience": 8,
//     "specialization": ["Web Development", "Machine Learning"],
//     "mentoring_areas": ["Programming", "Career Development", "Project Management"],
//     "hourly_rate": 50,
//     "bio": "I'm a passionate software engineer with expertise in web development and...
//   }



const mentorSchema = new Schema({
    name: {
        type: String,
        required: [true,'Mentor name is required']
      },
      profile_picture: {
        type: String,
        required: [true,'Please upload image']
      },
      title: {
        type: String,
        required: [true,'Please enter title']
      },
      company: {
        type: String,
        required: [true, 'Company name is required']
    },
    years_of_experience: {
        type: Number,
        required: [true,'Please mention your total experience in years']
      },
      specialization: {
        type: [String],
        required: [true,'Please mention your specialization']
    },
    mentoring_areas: {
        type: [String],
        required: [true,'Please mention your mentoring_areas']
    },
    hourly_rate: {
        type: Number,
        required: [true,'Please enter hourly rate']
    },
    bio: {
        type: String,
        required: [true, 'Please enter your bio'],
        min: [50, 'Bio should be above 50 words'],
        max:[201, 'Bio should be below 200 words ']
        
    }  
}
);

//model
exports.Mentor = mongoose.model('Mentor', mentorSchema);