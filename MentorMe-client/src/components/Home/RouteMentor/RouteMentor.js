import React from 'react';
// import baby from '../../../images/baby.png';
import image1 from '../../../images/image1.png';


const RouteMentor = () => {
    return (
        <div className="pb-0 pb-md-5 mt-4 pt-md-5">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-5 mt-5 col-sm-6 col-12">
                        <img  src={image1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Fostering Student Success</h1>
                        <p className="text-secondary my-4">Mentoring and student counseling play pivotal roles in shaping a student's educational journey. These forms of guidance provide a foundation for personal and academic growth. Mentors offer valuable insights, helping students set goals and navigate challenges. They serve as role models, inspiring confidence and resilience. On the other hand, counseling equips students with essential life skills, offering emotional support, and aiding in problem-solving. Together, these elements empower students to make informed choices, instilling a sense of purpose and direction, ultimately fostering a positive and transformative impact on their educational and personal development..</p>
                        <button href="#MentorContent" className="btn btn-warning">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteMentor;