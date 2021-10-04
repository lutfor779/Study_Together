import React from 'react';
import useData from '../../hooks/useData';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const fakeData = useData();
    const { courses } = fakeData;
    // console.log(courses);
    return (
        <div className="container mt-5">
            <div className="text-center mb-5 w-50 mx-auto">
                <h1>Our Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis laudantium quia quos impedit provident cumque tempore, ullam id minima illo quam exercitationem ab ea sunt vel et saepe dolores eligendi.</p>
                <small className="text-primary">START LEARNING TODAY</small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 color-container">
                {
                    courses && courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;