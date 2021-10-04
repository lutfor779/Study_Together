import React from 'react';
import './Service.css';

const Service = (props) => {
    const { title, about, img } = props.service;
    // console.log(img)
    return (
        <div>
            <div className="col">
                <div className="card custom-card all-card">
                    <img src={img} className="card-img-top service-img p-3" alt="..." />
                    <div className ="card-body mt-4">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;