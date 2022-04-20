import React, { useState } from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import '../styles/tech.css';

const Tech = () => {
    // Open
    const [isOpen, setIsOpen] = useState(false);
    const Open = () => {
        console.log('Open me now');
        setIsOpen(!isOpen)
    }

    return (
        <div className='Tech' >
            <div className="React">
                <h2 className='React-title' >
                    React Js
                </h2>
                <ul>
                    <li>Hooks y Custom Hooks</li>
                    <li>React Router</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div className="React">
                <h2 className='React-title' >
                    Node Js
                </h2>
                {/* <ul>
                    <li>Hooks y Custom Hooks</li>
                    <li>React Router</li>
                    <li>Redux</li>
                </ul> */}
            </div>
            <button className='button-more' onClick={Open} >
                More
            </button>
            <div className="More">
                <div className={`More-tech ${isOpen ? 'open' : '' }`}>
                    <h2>More...</h2>
                    <ul>
                        <li>Git y Github</li>
                        <li>Express</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tech;