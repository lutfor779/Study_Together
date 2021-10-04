import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <img src="https://shop2shop.co/images/404.gif" alt="" className="rounded-3 img-fluid mb-5" />
            <br />
            <Link to="/home">
                <button type="button" className="btn btn-dark">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;