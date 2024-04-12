import React from "react";


function Footer (props) {
    return (
        <footer className="footer pb-4">
            <div className="footer-content">
                <h4 className="owner font-spaceFont">
                    Developed by Shivam Yadav<br />
                    Build with Reactjs
                </h4>
            </div>

            <div className="icon cursor-pointer">
                <a href="https://www.linkedin.com/in/shivam-yadav-626083203" className="icons-icon footer-icon" rel="noreferrer" target="_blank">
                    <img className="social footer-icon" src={props.linkedin} alt="twitter" />

                </a>
                <a href="https://github.com/shivam08022002" rel="noreferrer" className=" icons-icon" target="_blank">
                    <img className="social footer-icon" src={props.github} alt="twitter" />

                </a>
                <a href="https://twitter.com/shivamydv08" rel="noreferrer" className=" icons-icon" target="_blank" >
                    <img className="social footer-icon" src={props.twitter} alt="twitter" />

                </a>
                <a href="" rel="noreferrer" className="icons-icon " target="_blank" >
                    <img className="social" src={props.Hashnode} alt="twitter" />
                </a>
            </div>
        </footer>)
}

export default Footer;