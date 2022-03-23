/* eslint-disable jsx-a11y/iframe-has-title */
import './projects.css';
import * as Icon from 'react-bootstrap-icons';
import React from "react";
import { useState } from "react";
import contenido from './Content.json';

const getRandom = () => Math.floor(Math.random() * contenido.length);

const Projects = () => {
    const [data, setData] = useState(contenido[getRandom()]);

    const changeData = () => {
        const random = getRandom();
        setData(contenido[random]);
    }

    const h2 = "<h2>";
    const h2Slash = "</h2>"
    const h3 = "<h3>";
    const h3Slash = "</h3>"

    return(
        <div className="Projects">
            <h2 className='projects-h2' >
               {h2} My <span className='spans-title' >proyects {h2Slash} </span> 
            </h2>
            <div className="projects-container">
                <h3 className='projects-h3' > {h3} {data.name} {h3Slash} </h3>
                <a href={data.link} >
                    <iframe 
                        className='iframe'
                        src={data.link} 
                        frameborder="0"
                    ></iframe>
                </a>
            </div>
            <button onClick={changeData} className="button-arrow" >
                <Icon.ArrowRight className='arrow' />
            </button>
        </div>
    );
}

export default Projects;