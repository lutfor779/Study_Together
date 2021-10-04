import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, description, price, img } = props.course;
    // console.log(name, price)
    return (
        <div>
            <div className="col ">
                <div className="card h-100 all-card course-card">
                    <img src={img} className="card-img-top course-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>                        
                    </div>
                    <div className="card-footer text-end">
                        <button type="button" className="btn btn-warning me-4 px-3">${price}</button>
                        <button type="button" className="btn btn-success px-3">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;