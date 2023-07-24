
import React, { useState } from "react";


import Man1 from "../img/Man1.png";



function Header(props) {
    const [showLinks, setShowLinks] = useState(false);

    function myFunction() {

        setShowLinks(!showLinks);

    }
    return (
        <div>
            <header className="header">

                <h1 className="title"> &lt;Sanil/&gt;</h1>

                <ul className="menu">
                    <li className="list-item"><a className="menu-item " href="#about">About</a> </li>
                    <li className="list-item"><a className="menu-item" href="#project">Project</a></li>
                    <li className="list-item"><a className="menu-item" href="#technology">Technologies</a></li>
                </ul>




                <div className={`${showLinks ? 'container change' : "container "}`} onClick={myFunction}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="icons">
                    
                    <a href="https://www.linkedin.com/in/sanil-pal-48370b223/" className="icons-icon " rel="noreferrer" target="_blank">
                        <img className=" social" src={props.linkedin} alt="linkedin" />
                    </a>

                    <a href="https://github.com/sanil011" rel="noreferrer" className="icons-icon " target="_blank">
                        <img className="social " src={props.github} alt="twitter" />
                    </a>

                    <a href="https://twitter.com/Sanil011" rel="noreferrer" className="icons-icon " target="_blank" >
                        <img className="social" src={props.twitter} alt="twitter" />
                    </a>

                    <a href="https://sanil.hashnode.dev/" rel="noreferrer" className="icons-icon " target="_blank" >
                        <img className="social" src={props.Hashnode} alt="twitter" />
                    </a>

                </div>

            </header>

            <div className={`${showLinks ? 'back-slider back-on' : "back-slider "}`}  >
                <ul className="slider"  >
                    <li ><a className="slider-item" href="#about">About</a> </li>
                    <li ><a className="slider-item" href="#project">Project</a></li>
                    <li ><a className="slider-item" href="#technology">Technologies</a></li>
                </ul>
            </div>

            <div className="content">
                <div className="col-1">
                    <p>Hello! 👋 My name is </p>
                    <h1 className="name">SANIL</h1>
                    <p>Frontend <span>Developer</span> ✨</p>
                    <a href="https://twitter.com/Sanil011" rel="noreferrer" target="_blank" >
                        <button className="btn btn-color">say hii 👋 on twitter</button>
                    </a>
                </div>

                <div className="col-2">
                    <img className="man " src={Man1} alt="pic" />
                </div>
            </div>
        </div>
    )
}

export default Header;