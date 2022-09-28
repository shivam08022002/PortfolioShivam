import React,{useState} from "react";
import Header from "./component/Header";
import About from "./component/About";
import Project from "./component/Project";
import Technologies from "./component/Technologies";
import Footer from "./component/footer";
import Moon from "./moon.png";
import Sun from "./sun.svg";
import Linkedin from "./iconBlack/linkedin-2.svg";
import Twitter from "./iconBlack/twitter.svg";
import Github from "./iconBlack/github.svg";
import Link from "./iconWhite/linkedin-2.svg";
import Twitt from "./iconWhite/twitter.svg";
import Git from "./iconWhite/github.svg";




function App(){

    const [onClick, setClick]= useState(0);
    function toggle(){
        setClick(!onClick);
    }
  
    return(  
      <div>
   <div className= {`${onClick ?'background-light': 'background'}`}>
    <img className="toggle " onClick={toggle} src={ `${onClick ?Moon:Sun}`} alt="sun"/> 


       <Header 
       linkedin={ `${onClick ?Linkedin:Link}`}
        github={`${onClick ?Github:Git}`}
        twitter={`${onClick ?Twitter:Twitt}`}
      /> 
      
      
       <About/>
       <Project/>
       <Technologies/>
       <Footer
         linkedin={`${onClick ?Linkedin:Link}`}
        github={`${onClick ?Github:Git}`}
        twitter={`${onClick ?Twitter:Twitt}`}
       />
       </div>
       </div>
    )
}
export default App;