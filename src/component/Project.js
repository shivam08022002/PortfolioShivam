import React from "react";
import Card from "./Card/Card";
import Expense from "../img/gym.png";
import Spotify from '../img/spotify.png'
import Todolist from "../img/food.png";
import Github2 from "../img/github2.svg";
import Eye from "../img/eye.svg";
import Airbnb from '../img/airbnb.jpg';
import Landing from '../img/landing.png';
import Watch from "../img/watch.png";

function Project() {
    return (

        <div className="project" id="project">
            <h1 className="name">Projects</h1>
            <div className="project-item">
                <Card
                    mainContainer="position"
                    pic={Expense}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Gym website"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/gym"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://sanil011.github.io/gym/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["React", "MUI", "Redux"]}
                    about="A gym app that show exercise acc to search or target muscle."
                />

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
                    tech={["React", "ContextApi", "Css"]}
                    about="Show the list of available food. Selected food add to the cart dynamically. Price will be set dynamically according to the selected food in the cart."
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
                    pic={Landing}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Landing Page"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/landing-page"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://sanil011.github.io/landing-page/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["React", "Tailwind"]}
                    about="A Responsive landing page"
                />

                <Card
                    mainContainer="position"
                    pic={Airbnb}
                    secondContainer="back"
                    backContent="back-content"
                    backHeading="back-heading"
                    heading="Windbnb"
                    iconContainer="icon-container"
                    link="https://github.com/sanil011/windbnb"
                    iconClass="back-icon back-icon_github"
                    icon={Github2}
                    link2="https://windbnb-blue.vercel.app/"
                    iconClass2=" back-icon back-icon_eye"
                    icon2={Eye}
                    projectpic="project-pic"
                    tech={["React", "Tailwind", "Redux", "React-Router-Dom"]}
                    about="Fully responsive hotel booking website that i made from scratch using React,Tailwind and Redux.See the hotel according to search and book them. See the amenities that give by the hotel. We can also give ratings to hotels and see the rating given by past customers."
                />
            </div>
        </div>
    )
}
export default Project;