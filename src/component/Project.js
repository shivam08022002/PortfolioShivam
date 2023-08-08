import React from "react";
import Card from "./Card/Card";
import Quiz from "../img/quiz.png"
import Spotify from '../img/spotify.png'
import Calender from "../img/calender.png";
import Github2 from "../img/github2.svg";
import Eye from "../img/eye.svg";
import Airbnb from '../img/airbnb.png';
import Algorithm from "../img/algorithm.png";
import Watch from "../img/watch.png";
import CodeBoard from "../img/codeboard.png";

function Project() {
    return (

        <div className="project" id="project">
            <h1 className="name">Projects</h1>
            <div className="project-item">
                

                

                
                
                <Card
                    mainContainer="position"
                    pic={Watch}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Watch E-Commerce"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/watch-store"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://watch-store-sand.vercel.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["Next.js", "MUI", "Redux"]}
                    about="An E-commerce app for watch. Users can filter the watch according to brand, price, strap and colour.Users can also add watches to their wishlists."
                />

                <Card
                    mainContainer="position"
                    pic={Algorithm}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Algorithm Visualizer"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/Algorithm-Visualizer"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://algorithm-visualizer-beige.vercel.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["Next", "Typescript", "Tailwind"]}
                    about="Show the algorithm in animation how the algorithm works"
                />
                
                <Card
                    mainContainer="position"
                    pic={Spotify}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="LYRICKS"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/spotify-clone"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://sanil-spotify-clone.netlify.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["React", "MUI", "Redux", "React-Router-Dom"]}
                    about="Fully responsive Song listening website like Spotify. Search song of their choice and according to the artist. Show popular songs according to their region using geolocation API."
                />
              
                <Card
                    mainContainer="position"
                    pic={Airbnb}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Estates"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/Estates"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://estates-teal.vercel.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["React", "Tailwind", "Redux", "React-Router-Dom"]}
                    about="Fully responsive Property rental website that i made from scratch using React,Tailwind and Redux.See the hotel according to search and book them. See the amenities that give by the hotel. We can also give ratings to hotels and see the rating given by past customers."
                />

                <Card
                    mainContainer="position"
                    pic={Quiz}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Quiz"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/quiz-app"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://quiz-app-lilac-iota.vercel.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["Next", "MUI", "React-Router-Dom"]}
                    about="A Quiz app in you can choose a lot of category and give quiz"
                />

                <Card
                    mainContainer="position"
                    pic={Calender}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Calender App"
                    iconContainer="icon-container"
                    link=" https://github.com/sanil011/calender"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://calender-99b907.netlify.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["React", "ContextApi", "MUI", "Redux"]}
                    about="Calender Application in which you can signup and login.Adding meeting , List of your all meeting,Delete a meeting,Update a specific meeting."
                />
                <Card
                    mainContainer="position"
                    pic={CodeBoard}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Code-Share"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/code-share"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://code-share-ny9d.onrender.com"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["Reactjs", "ContextApi", "Tailwindcss", "Expressjs", "Socket.io"]}
                    about="A code editor in which by sharing the roomId you can write a code that your friend can also see in real time."
                />
            </div>
        </div>
    )
}
export default Project;