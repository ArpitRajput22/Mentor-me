const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mentorRouter = require('./routes/mentorRoute');


//password = CSXU7wLJ5qXk0HEs

//middlewares
app.use(cors()); 
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/mentors', mentorRouter.router);


//db connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mentorsData');
    console.log('database connected!')
}

 
 app.listen(port, () => {
   console.log(`MentorMe is listening on port ${port}`)
  })
