import React,{useState,useRef,useEffect} from "react";
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
import "./app.css"



function App(){

    const [onClick, setClick]= useState(0);
    function toggle(){
        setClick(!onClick);
    }
  
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${mouseX -
        mainCursor.current.clientWidth / 2}px, ${mouseY -
        mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => { };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  
    return(  
      <div >
        <div className={`cursor-wrapper`} style={{position:"relative"}}>
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

  <div className="main-cursor " ref={mainCursor}>
    <div className="main-cursor-background"></div>
  </div>
  <div className="secondary-cursor" ref={secondaryCursor}>
    <div className="cursor-background"></div>
  </div>
</div>
       </div>
    )
}
export default App;
