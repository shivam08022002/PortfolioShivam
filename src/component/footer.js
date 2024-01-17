import React from "react";


function Footer (props) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4 className="owner font-spaceFont">
                    Developed by Sanil<br />
                    Build with Reactjs
                </h4>
            </div>

            <div className="icon cursor-pointer">
                <a href="https://www.linkedin.com/in/sanil-pal-48370b223/" className="icons-icon footer-icon" rel="noreferrer" target="_blank">
                    <img className="social footer-icon" src={props.linkedin} alt="twitter" />

                </a>
                <a href="https://github.com/sanil011" rel="noreferrer" className=" icons-icon" target="_blank">
                    <img className="social footer-icon" src={props.github} alt="twitter" />

                </a>
                <a href="https://twitter.com/Sanil011" rel="noreferrer" className=" icons-icon" target="_blank" >
                    <img className="social footer-icon" src={props.twitter} alt="twitter" />

                </a>
                <a href="https://sanil.hashnode.dev/" rel="noreferrer" className="icons-icon " target="_blank" >
                    <img className="social" src={props.Hashnode} alt="twitter" />
                </a>
            </div>
        </footer>)
}

export default Footer;