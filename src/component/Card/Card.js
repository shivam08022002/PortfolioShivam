import React,{useState} from "react";
import Github2 from "../../img/github2.svg";
import Eye from "../../img/eye.svg";
import { AnimatePresence, motion } from "framer-motion";
const Card = (props) => {

  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div key={props.key} className="position cursor-pointer " style={{ boxShadow: "0 5px 1rem rgba(255, 255, 255, .2)", margin: "1em", borderRadius: "10px"}}>

      <img style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={props.pic} className="project-pic" alt="project-pic" />

      <h1 style={{ textAlign: "center", color: "#9BC9E3" }}>{props.heading}</h1>
      <div style={{ width: "40px", height: "3px", backgroundColor: "orange", marginLeft: "45%" }}></div>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "space-between" }}>
        <p style={{ color: "#E3E6E7", margin: "1em", lineHeight: "20px", letterSpacing: "1px", textAlign: "left" }}>
          {props.about}
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {props.tech?.map((db) => (
            <p style={{ color: "#D8BFBE" }}>{db}</p>
          ))}
        </div>
      </div>
      <div className="back" style={{ borderRadius: "10px" }}>
        <div className="back-content ">
          <h3 className="back-heading">{props.heading}</h3>
          <div className="icon-container">
            <a href={props.link} rel="noreferrer" target="_blank">
              <img className="back-icon back-icon_github" src={Github2} alt="github" />
            </a>
          </div>
          <div className="icon-container">
            <a href={props.link2} rel="noreferrer" target="_blank">
              <img className="back-icon back-icon_eye" src={Eye} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;