import React, {useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import {faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
// Hooks for animation from Home componant
const [letterClass, setLetterClass] = useState('text-animate');

useEffect(() => {
  const t = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  return () => {
    clearTimeout(t)
  }
}, []);

 return (
   <>
     <div className="container about-page">
       <div className="text-zone">
         <h1>
           <AnimatedLetters
             letterClass={letterClass}
             strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
             idx={15} //1.5 Second delay
           />
         </h1>
         <p>
           I am an ambitious Fullstack Developer seeking a position
           within an established IT company that offers opportunities to work
           with the latest technologies on challenging and diverse projects
         </p>
         <p align="LEFT">
           I am quietly confident, a natural learning enthusiast, and
           perpetually dedicated to honing my skills by tackling design
           challenges one at a time.
         </p>
         <p>
           If I were to define myself in one sentence, it would be as a person
           with a strong willingness to learn, initiative, and empathy. I am
           also a music fanatic, a lover of creativity, and obsessed with
           emerging technologies!
         </p>
       </div>

       {/* 
          This section represents the right part of the About page.
          It features a rotating cube displaying logos of technical skills.
          Ensure to include a 'div' element with the class 'stage-cube-cont'.
        */}
       <div className="stage-cube-cont">
         <div className="cubespinner">
           <div className="face1">
             <FontAwesomeIcon icon={faNodeJs} color="#8FD400" />
           </div>
           <div className="face2">
             <FontAwesomeIcon icon={faHtml5} color="#F06529" />
           </div>
           <div className="face3">
             <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
           </div>
           <div className="face4">
             <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
           </div>
           <div className="face5">
             <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
           </div>
           <div className="face6">
             <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
           </div>
         </div>
       </div>
     </div>
     <Loader type="pacman" />
   </>
 )
}

export default About