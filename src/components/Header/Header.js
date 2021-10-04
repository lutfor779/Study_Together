import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand me-5 text-warning" to="/">StudyTogether</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* photo */}
            <div className="card bg-dark">
                <img src="https://www.bacancytechnology.com/blog/wp-content/uploads/2019/06/full-stack-4-6-2019-banner-1.jpg" className="card-img header-img" alt="..." />
                <div className="card-img-overlay text-center mt-5 header-text">
                    <h1 className="card-title">We StudyTogether Are Online Platform For Make Learn</h1>
                    <br/>
                    <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <p className="card-text">Learn something new every day with skwela lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>

    );
};

export default Header;