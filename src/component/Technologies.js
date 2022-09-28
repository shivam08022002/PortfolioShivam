import React from "react";
import Css from "../img/css.svg"; 
import Html from "../img/html.svg";
import Java from "../img/javascript.svg";  
import Mongodb from "../img/mongodb.svg"; 
import Nodejs from "../img/nodejs.svg"; 
import Npm from "../img/npmjs.svg"; 
import Reactjs from "../img/react.svg"; 
import Bootstrap from "../img/bootstrap.svg"; 
// import Java from "../img/javascript.svg"; 
import Man2 from "../img/Man2.png";

function Technologies(){
    return(

        <div className="technology" id="technology">
        <div className="tech1">
        <h1 class=" name name-technology">
        Technologies
       </h1>
       <ul className="showcase">
      
      <li> <img className="tech-icon " src={Css} alt="icons"/>
        <p>Css</p>
        </li>
       
       <li>
       <img className="tech-icon " src={Html} alt="icons"/>
       <p>Html</p>
       </li>
         <li>
         <img className="tech-icon " src={Java} alt="icons"/>
         <p>Javascript</p>
         </li>
          
          <li className="remove">
          <img className="tech-icon  " src={Mongodb} alt="icons"/>
          <p>Mongodb</p>
          </li>
          </ul>
          <ul className="showcase2">
          <li>
          <img className="tech-icon " src={Nodejs} alt="icons"/>
          <p>Nodejs</p>
          </li>
          <li>
          <img className="tech-icon " src={Reactjs} alt="icons"/>
          <p>Reactjs</p>
          </li>
          <li>
          <img className="tech-icon " src={Bootstrap} alt="icons"/>
          <p>Bootstrap</p>
          </li>
          <li className="remove">
          <img className="tech-icon  " src={Npm} alt="icons"/>
          <p className="npm">Npm</p>
          </li>
        </ul>
        </div>
           <div className="man">
            <img src={Man2} className="man2" alt="Man2"/>
           </div>
        </div>
       
    )
}
export default Technologies;


