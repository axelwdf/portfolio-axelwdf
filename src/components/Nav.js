import React from "react";
// import * as Icon from 'react-bootstrap-icons';
import '../styles/nav.css';



const Nav = () => {
    const h1 = "<h1>";
    const h1Slash = "</h1>"
    const p = "<p>";
    const pSlash = "</p>";
    return(
        <div className="Nav">
            <h1 className="nav-h1" >
                {h1} Portfolio
                <span className="spans-title" > axelwdf {h1Slash} </span> 
            </h1>
            <i  >
                <p className="nav-p" > 
                    {p} My name is Axel and
                    <span className="spans-title" > i'am React Developer {pSlash} </span>
                </p>
            </i>
        </div>
    );
}

export default Nav;