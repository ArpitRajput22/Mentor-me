import React from 'react';
import { Link } from 'react-router-dom';
import mentoringImage from '../../../images/doc/doc1.jpg';
import './HeaderTop.css';
const HeaderTop = () => {
    return (
        <div style={{
            'height': "500px", 'width': '100%'
        }}
            className="row d-flex align-items-center container">
            <div className="col-md-5 col-sm-6 col-12 offset-md-1 md-mx-5">
            <h1>Guiding Excellence:</h1><br/> <h3>Your Path to Personalized Mentorship</h3>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima
                </p>
                <Link to="/appointment" className="btn btn-success"> GET STARTED</Link>

            </div>
            <div className="image-container col-md-6 col-sm-6 col-12">
                <img src={mentoringImage} className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;