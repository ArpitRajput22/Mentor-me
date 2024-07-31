import React from 'react';
import find from '../../../images/find.png';
import application from '../../../images/application.png';
import sales from '../../../images/sales.png';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Find Your Mentor',
        img: find,
        desc:'Discover a diverse collection of seasoned mentors, searching until you meet your ideal match.'
    },
    {
        name: 'Apply for Mentorship',
        img: application,
        desc:'Apply now; match with your mentor, and launch your 7-day mentorship journey, absolutely free. Dare to excel.'
    },
    {
        name: 'Level up your skills',
        img: sales,
        desc:'Each mentor provides tailored services, from private chats to hands-on guidance, fueling your career ascent'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h3 className="text-success brand-color mt-5">Access a personalized career mentor at your beck and call</h3>
                <h6 className='text-secondary m-auto w-75 mt-4'>Are you poised to conquer your forthcoming job interview? Committed to sculpting your startup into a triumph? Eager to cultivate the proficiencies in high demand? Unlock the power of a virtual mentor or coach, a guiding luminary finely attuned to your fervor. Ignite your unstoppable journey with <b className='text-success'>MentorMe</b>.</h6>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
                <div class="d-flex justify-content-center ">
        <button class="btn btn-success m-2">Find Mentor</button>
        <button class="btn btn-secondary m-2">Become a Mentor</button>
            </div>
        </section>
    );
};

export default Services;