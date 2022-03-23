import React from "react";
import * as Icon from 'react-bootstrap-icons';
import './footer.css';


const Footer = () => {
    const gh = "https://github.com/axelwdf";
    const linked = "https://www.linkedin.com/in/axel-martinez-hernandez-b3ba93206/";
    
    const h2 = "<h2>";
    const h2Slash = "</h2>"

    return(
        <div className="Footer">
            <h2>
                {h2} Búscame en...{h2Slash}
            </h2>
                <div className="container">
                    <div className="social-cont">
                        <a 
                            href={gh} 
                            target="_blank" rel="noreferrer" >
                            <Icon.Github className="icons-footer" />
                        </a>
                    </div>
                    <div className="social-cont">
                        <a
                            href={linked} 
                            target="_blank" rel="noreferrer" >
                            <Icon.Linkedin className="icons-footer" />
                        </a>
                    </div>
                </div>
        </div>
    );
}

export default Footer;