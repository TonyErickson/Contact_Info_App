import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
    <div>
            <div className="socialicons">
                <br></br>
                <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook" />
                </a>
                <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter"/>
                </a>
                <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram"/>
                </a>
                <a href="https://tiktok.com">
                    <FontAwesomeIcon icon={faTiktok} size="2x" className="tiktok"/>
                </a>
            </div>
        
    </div>
    )
}