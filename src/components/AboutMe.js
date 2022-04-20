import React from "react";
import '../styles/aboutMe.css';


const AboutMe = () =>  {
    const imgFB = `https://avatars.githubusercontent.com/u/95008306?v=4`;
    const p = "<p>";
    const pSlash = "</p>";
    return(
        <div className="AboutMe">
            <div className="Photo">
                <img 
                    className="AboutMe-photo"
                    src={imgFB} 
                    alt=""
                    width='200' 
                    height='200' 
                />
            </div>
            <div className="TextAboutMe">
                <p className="semantic-target" >{p}</p>
                <p className="TextAboutMe-p" >
                    <b>Bievenido a mi portafolio</b>, me llamo Axel y soy desarrollador <i>FontEnd</i>, 
                    especialmente enfocado en <i>React</i>, también tengo conocimiento en el área 
                    del <i>BackEnd</i> con <i>NodeJs</i>. <br />
                    'Espero sea de tu agrado esta visita a mi portafolio, así como también espero 
                    estar trabajando juntos en un proyecto'.
                    
                </p>
                <p className="semantic-SlasTarget" >{pSlash}</p>
            </div>
        </div>
    );
}

export default AboutMe;