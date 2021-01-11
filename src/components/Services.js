import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDesktop,faFileCode, faCamera } from '@fortawesome/free-solid-svg-icons';



const Services=()=>{
    return(
        <div className="services">
            <h1 className="py-5">Our Services</h1>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"  icon={faDesktop} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>I approach each project individually and always focus on the result.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with an new proven technologies.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faCamera} size="2x"/></div>
                                <h3>Photography</h3>
                                <p>Your potencial clients well see your services or product on Facebook.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Publishing</h3>
                                <p>It includes creating and uploading websites, updating webpages, and posting blogs online. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Services