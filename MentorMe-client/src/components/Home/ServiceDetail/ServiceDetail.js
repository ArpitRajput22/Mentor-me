import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <img className='w-50 h-auto mt-5 mb-5' src={service.img} alt="" />
            <h4 className="font-weight-bold text-success ">{service.name}</h4>        
            <p className="font-weight-bold text-secondary">{service.desc}</p>
        </div>
    );
};

export default ServiceDetail;