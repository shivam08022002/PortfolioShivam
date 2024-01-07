import React from "react";
import Card from "./Card/Card";
import Quiz from "../img/quiz.png"
import Spotify from '../img/spotify.png'
import Calender from "../img/calender.png";
import Airbnb from '../img/airbnb.png';
import Algorithm from "../img/algorithm.png";
import Watch from "../img/watch.png";
import CodeBoard from "../img/codeboard.png";
import Excel from "../img/excel.png";

function Project() {

    const projects = [
        {
            id: "1", heading: "Watch E-Commerce", githubLink: "https://github.com/sanil011/code-share", pic: Watch ,
            hostedLink: "https://code-share-ny9d.onrender.com", tectStack: ["Reactjs", "ContextApi", "Tailwindcss", "Expressjs", "Socket.io"], about:"A code editor in which by sharing the roomId you can write a code that your friend can also see in real time."
        },
        {
            id: "2", heading: "Code Share", githubLink: "https://github.com/sanil011/watch-store", pic: CodeBoard ,
            hostedLink: "https://watch-store-sand.vercel.app/", tectStack: ["Next.js", "MUI", "Redux"], about:"An E-commerce app for watch. Users can filter the watch according to brand, price, strap and colour.Users can also add watches to their wishlists."
        },
        {
            id: "3", heading: "Google Doc Clone", githubLink: "https://github.com/sanil011/ExcelClone", pic:Excel,
            hostedLink: "https://sanil011.github.io/ExcelClone/", tectStack: ["Javascript", "CSS", "HTML"], about: "Comprehensive Excel functionalities.Isolated cell text formatting.Cell - to - cell relationships through formulas.Download and upload capabilities.Cycle detection and formula warning.Cut, copy, paste support. Multi - sheet functionality."
        },
        {
            id: "4", heading: "Algorithm Visualizer", githubLink: "https://github.com/sanil011/Algorithm-Visualizer", pic: Algorithm ,
            hostedLink: "https://algorithm-visualizer-beige.vercel.app/", tectStack: ["Next", "Typescript", "Tailwind"], about:"Show the algorithm in animation how the algorithm works"
        },
        {
            id: "5", heading: "Quiz", githubLink: "https://github.com/sanil011/quiz-app", pic:Quiz ,
            hostedLink: "https://quiz-app-lilac-iota.vercel.app/", tectStack: ["Next", "MUI", "React-Router-Dom"], about:"A Quiz app in you can choose a lot of category and give quiz"
        },
        {
            id: "5", heading: "LYRICKS", githubLink: "https://github.com/sanil011/spotify-clone", pic:Spotify,
            hostedLink: "https://sanil-spotify-clone.netlify.app/", tectStack: ["React", "MUI", "Redux", "React-Router-Dom"], about:"Fully responsive Song listening website like Spotify. Search song of their choice and according to the artist. Show popular songs according to their region using geolocation API."
        }
    ]
    return (

        <div className="project" id="project">
            <h1 className="name text-red-800">Projects</h1>
            <div className="project-item">

                {projects.map((project) => (
    
              <Card
                    key={project.id}
                    pic={project.pic}
                    heading={project.heading}
                    link={project.githubLink}
                    link2={project.hostedLink}
                    tech={project.tectStack}
                    about={project.about}
                />
))}


            </div>
        </div>
    )
}
export default Project;