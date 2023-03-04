import React from "react";

const Card = (props) => {
  return (
    <div className={props.mainContainer} style={{ boxShadow: "0 5px 1rem rgba(255, 255, 255, .2)", margin: "1em", borderRadius: "10px" }}>

      <img style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={props.pic} className={props.projectpic} alt="project-pic" />

      <h1 style={{ textAlign: "center", color: "#9BC9E3" }}>{props.heading}</h1>
      <div style={{ width: "40px", height: "3px", backgroundColor: "orange", marginLeft: "45%" }}></div>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "space-between" }}>
        <p style={{ color: "#E3E6E7", margin: "1em", lineHeight: "20px", letterSpacing: "1px",textAlign:"left" }}>
          {props.about}
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {props.tech?.map((db) => (
            <p style={{ color: "#D8BFBE" }}>{db}</p>
          ))}
        </div>
      </div>
      <div className={props.secondContainer} style={{ borderRadius: "10px" }}>
        <div className={props.backContent}>
          <h3 className={props.backHeading}>{props.heading}</h3>
          <div className={props.iconContainer}>
            <a href={props.link} rel="noreferrer" target="_blank">
              <img className={props.iconClass} src={props.icon} alt="github" />
            </a>
          </div>
          <div className={props.iconContainer}>
            <a href={props.link2} rel="noreferrer" target="_blank">
              <img className={props.iconClass2} src={props.icon2} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;