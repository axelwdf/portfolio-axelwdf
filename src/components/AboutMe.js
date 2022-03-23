import React from "react";
import './about.css';
// import contenido from './Content.json';



const AboutMe = () =>  {
    const imgFB = 'https://scontent.fmex11-1.fna.fbcdn.net/v/t39.30808-6/273046386_131268119392345_6136063052876983759_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9U4VB4pdP3oAX8bZJaB&_nc_ht=scontent.fmex11-1.fna&oh=00_AT8__5YKAE15_FgMJpj3PXrnb9r23fmX9iZPONhpyzT_pA&oe=623829E7';
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