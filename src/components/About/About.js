import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5 w-50 mx-auto">
                <h1>We can help you to <br/><span className="text-primary">LEVEL UP YOUR SKILLS</span></h1>
            </div>
            <div className="w-75 mx-auto">
                <div className="card mb-3 all-card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://www.botreetechnologies.com/blog/wp-content/uploads/2019/01/best-machine-learning-developer.jpg" className="card-img img-fluid rounded-end" alt="..." />
                        </div>
                        <div className="col-md-6 ">
                            <div className="card-body">
                                <h5 className="card-title">First, We Love To Teach</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit laboriosam, eius ipsa consequuntur eos. Nulla dolorem repudiandae mollitia distinctio eos pariatur dolores, voluptate impedit. Eaque quos, sapiente ipsum possimus.

                                    Odio ducimus id vero tempora eaque rem voluptatibus tempore sequi ea quod, odit commodi voluptas! Nesciunt dolorum ea repudiandae. Officia eos impedit sapiente tempore, a dolore minus eaque culpa facere.

                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 mt-5 all-card">
                    <div className="row g-0">
                        <div className="col-md-6 ">
                            <div className="card-body">
                                <h5 className="card-title">We Are Passionate About Web</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit laboriosam, eius ipsa consequuntur eos. Nulla dolorem repudiandae mollitia distinctio eos pariatur dolores, voluptate impedit. Eaque quos, sapiente ipsum possimus.

                                    Odio ducimus id vero tempora eaque rem voluptatibus tempore sequi ea quod, odit commodi voluptas! Nesciunt dolorum ea repudiandae. Officia eos impedit sapiente tempore, a dolore minus eaque culpa facere.

                                   
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg" className="img-fluid rounded-start card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;