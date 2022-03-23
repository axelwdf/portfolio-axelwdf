import React from "react";
import './about.css';
// import contenido from './Content.json';



const AboutMe = () =>  {
    const imgFB = `https://avatars.githubusercontent.com/u/95008306?s=400&u=ea03973160ffebb72568e9ee58c7e0f726960a43&v=4`;
    const p = "<p>";
    const pSlash = "</p>";
    return(
        <div className="AboutMe">
            <div className="Photo">
                <img 
                    className="photo"
                    src={imgFB} 
                    alt=""
                    width='200' 
                    height='260' 
                />
            </div>
            <div className="TextAboutMe">
                <p className="semantic-target" >{p}</p>
                <p className="about-p" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas, molestias aspernatur voluptatum ducimus laudantium cumque ut assumenda officia illo consequuntur alias eaque nobis accusantium laborum possimus dolore delectus iure in, ipsum magni culpa recusandae. Eaque vero aspernatur laudantium quas incidunt velit sequi corrupti, repellendus sunt, possimus fugiat, dicta accusamus?
                </p>
                <p className="semantic-SlasTarget" >{pSlash}</p>
            </div>
        </div>
    );
}

export default AboutMe;