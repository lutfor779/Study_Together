import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import Service from '../Service/Service';

const Home = () => {
    const fakeData = useData();
    const { services } = fakeData;
    const newService = services && services.slice(0, 4);
    // console.log(newService);
    return (
        <div>
            <div className="about p-3">
                <div className="container">
                    <div className="row g-4 p-5">
                        <div className="col-md-8 pe-5">
                            <h1>Over 7000 Tutorials from Courses</h1>
                            <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl</p>
                            <br />
                            <Link to="/courses">
                                <button type="button" className="btn btn-primary py-3 px-5 rounded-pill">Enroll a course</button>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <img src="https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2020/04/Online-learning-image-for-article-49939929.jpg?resize=912%2C610&ssl=1" alt="" className="rounded card-img" />
                        </div>
                    </div>
                </div>
            </div>
           
           
            <div className="features p-3">
                <div className="container text-center">
                    <h1 className="my-3 text-white">Our Best services</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-4 mb-3">
                        {
                            newService && newService.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                    <Link to="/services">
                        <button type="button" className="btn btn-primary py-3 px-5 rounded-pill">Services</button>
                    </Link>
                </div>
            </div>
        
            <div className="container">
                <div className="text-center text-white p-3 m-5 rounded extra">
                    <h3>WE ARE STUDYTOGETHER AN ONLINE LEARNING CENTER</h3>
                    <p>We can manage your dream building A small river named Duden flows by their place</p>
                    <br />
                    <Link to="/courses">
                        <button type="button" className="btn btn-warning py-3 px-5 rounded-pill">Enroll a course</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;