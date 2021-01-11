import React from 'react';
import Typed from "react-typed";

const Header =()=>{
    return(
        <div className="header-wraper">
            <div className="main-info">
                <h1>Space M S S</h1>
                <Typed
                    className="typed-text"
                    strings={["Photography", "Web development", "Design","Web Publishing"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header