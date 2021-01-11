import React from 'react';
import ReferencesCarousel from "./ReferencesCarousel";

const References=()=>{
    return(
        <div className="references">
            <h1>our happy clients</h1>
            <div className="container">
                <div className="references-content">
                    <ReferencesCarousel/>
                </div>
            </div>
        </div>
    )
}

export default References