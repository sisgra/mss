import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const About=()=>{
    return(
        <div className="services">
            <h1 className="py-5">About Us</h1>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <img className="image"  src="Sona1.jpg" alt="profile Sona"/>
                                <h3>Sona Z.</h3>
                                <p className="role">FullStack Developer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="social">
                                <FontAwesomeIcon className="social-icon"  icon={faFacebook} size="2x"/>
                                <FontAwesomeIcon className="social-icon"  icon={faTwitter} size="2x"/>
                                <FontAwesomeIcon className="social-icon"  icon={faInstagram} size="2x"/>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <img className="image" src="Martin.jpg" alt="profile Sona"/>
                                <h3>Martin B.</h3>
                                <p className="role">Photographer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="social">
                                <FontAwesomeIcon className="social-icon"  icon={faFacebook} size="2x"/>
                                <FontAwesomeIcon className="social-icon"  icon={faTwitter} size="2x"/>
                                <FontAwesomeIcon className="social-icon"  icon={faInstagram} size="2x"/>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <img className="image" src="Silvia2.jpg" alt="profile Sona"/>
                                <h3>Silvia G.</h3>
                                <p className="role"> Junior Developer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="social">
                                <FontAwesomeIcon className="social-icon"  icon={faFacebook} size="2x"/>
                                <FontAwesomeIcon className="social-icon"  icon={faTwitter} size="2x"/>
                                <FontAwesomeIcon className="social-icon"  icon={faInstagram} size="2x"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default About