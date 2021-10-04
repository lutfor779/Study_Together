import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, description, price, img } = props.course;
    // console.log(name, price)
    return (
        <div>
            <div className="col ">
                <div className="card custom-card all-card">
                    <img src={img} className="card-img-top course-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        
                        <div className="">
                            <button type="button" className="btn btn-success">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;