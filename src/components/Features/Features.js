import React from 'react';
import "./Features.css"
import useData from '../../hooks/useData';
import FeatureDetail from '../FeatureDetail/FeatureDetail';

const Features = () => {
    const fakeData = useData();
    const { features } = fakeData;
    // console.log(fakeData);
    return (
        <div className="container">
            <div className="m-5">
                <div className="text-center my-5 w-50 mx-auto">
                    <h1>We Are StudyTogether An Online Learning Center</h1>
                    <p className="text-start">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <div className="row g-0 color-container">
                    <div className="col-md-4 ">
                        <img src="https://images.unsplash.com/photo-1588026193712-31163b26c043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" className="img-fluid rounded-start card-img" />
                    </div>
                    <div className="col-md-8 ps-3">
                        <div className="card-body">
                            <h1 className="card-title mb-5">Benefits About Online Learning Expertise</h1>
                                {
                                    features && features.map(feature => <FeatureDetail key={feature.id}
                                        feature={feature}></FeatureDetail>)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Features;

// style={{ maxWidth: "540px" }}