import React from 'react';
import useData from '../../hooks/useData';
import Service from '../Service/Service';

const Services = () => {
    const fakeData = useData();
    const { services } = fakeData;
    
    return (
        <div className="container my-5">
            <div className="text-center mb-5 w-50 mx-auto">
                <h1>What We Offer</h1>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-4 color-container">
                {
                    services && services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>           
        </div>
    );
};

export default Services;