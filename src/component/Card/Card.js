import React from "react";

const Card = (props) =>{
  return(
    <div className={props.mainContainer}>
     <img src={props.pic} className={props.projectpic} alt="project-pic"/>
        <div className={props.secondContainer}>
          <div className={props.backContent}>
            <h3 className={props.backHeading}>{props.heading}</h3>
            <div className={props.iconContainer}>
            <a href={props.link} rel="noreferrer" target ="_blank">
             <img  className={props.iconClass} src={props.icon} alt="github"/>
             </a>
            </div>
            <div className={props.iconContainer}>
            <a href={props.link2} rel="noreferrer" target ="_blank">
             <img  className={props.iconClass2} src={props.icon2} alt="github"/>
             </a>
            </div>
          </div>
         
        </div>
    </div>
  );
};
export default Card;