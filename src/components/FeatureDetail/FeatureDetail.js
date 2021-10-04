import React from 'react';
import './FeatureDetail.css';

const FeatureDetail = (props) => {
    const { img, title, detail } = props.feature;
    // console.log(detail)
    return (
        <div>
            <div className="card p-3 mt-3 all-card">
                <div className="row align-items-center">
                    <div className="col-2">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-10">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetail;


