import React from "react";
import Card from "./Card/Card";
import Expense from "../img/gym.png";
import Spotify from '../img/spotify.png'
import Todolist from "../img/food.png";
import Github2 from "../img/github2.svg";
import Eye from "../img/eye.svg";

function Project()
{
    return(

           <div className="project" id="project">
            <h1 className="name">Projects</h1>
            <div className="project-item">
            <Card
                mainContainer="position"
                pic={Expense}
                secondContainer="back"
                backContent="back-content"
                backHeading="back-heading"
                heading="Expense Tracker"
                iconContainer="icon-container"
                link="https://github.com/sanil011/gym"
                iconClass="back-icon back-icon_github"
                icon={Github2}
                link2="https://sanil011.github.io/gym/"
                iconClass2=" back-icon back-icon_eye"
                icon2={Eye}
                projectpic="project-pic"
            />
             <Card
                mainContainer="position"
                pic={Todolist}
                secondContainer="back"
                backContent="back-content"
                backHeading="back-heading"
                heading="Food order online"
                iconContainer="icon-container"
                link="https://github.com/sanil011/online-food-order-app"
                iconClass="back-icon back-icon_github"
                icon={Github2}
                link2="https://sanil011.github.io/online-food-order-app/"
                iconClass2=" back-icon back-icon_eye"
                icon2={Eye}
                projectpic="project-pic"
            />
            <Card
                mainContainer="position"
                pic={Spotify}
                secondContainer="back"
                backContent="back-content"
                backHeading="back-heading"
                heading="Spotify-Clone"
                iconContainer="icon-container"
                link="https://github.com/sanil011/spotify-clone"
                iconClass="back-icon back-icon_github"
                icon={Github2}
                link2="https://sanil-spotify-clone.netlify.app/"
                iconClass2=" back-icon back-icon_eye"
                icon2={Eye}
                projectpic="project-pic"
            />
            </div>
            </div>  
    )
}
export default Project;