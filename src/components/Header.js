import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return(
        <div className="Header">
            <ReactTypingEffect
                text={
                    [
                        "Welcome to my REACT PORTFOLIO",
                         "Comone!!"
                    ]
                }
            />
        </div>
    );
}

export default Header;