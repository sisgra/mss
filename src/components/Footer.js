import React from 'react';
import logo from './logo.png'

import {
    FacebookShareButton,
    FacebookIcon
} from "react-share";

const Footer =()=>{
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-6">
                    <a class="navbar-brand" href="#"><img  className="logo" src={logo} alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6 ">
                        <div className="low">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About us</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6 ">
                        <div className="low">
                            <div className="col">
                            <a className="footer-nav">Experience</a>
                            <br/>
                            <a className="footer-nav">References</a>
                            <br/>
                            <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.google.com"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript">
                            <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                        </div>
                        <p className="pt-3 text-center">
                           Space MSS
                            <span> </span>
                            {new Date().getFullYear()} &nbsp; | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer