import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Skills.scss'
import { faCss3, faGitAlt, faGithub, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

// Define the Skills component
const Skills = () => {
// Hooks for animation from Home componant
  const [letterClass, setLetterClass] = useState('text-animate')

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
      {/* Container for the skills page */}
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15} //1.5 Second delay
            />
          </h1>
          <p>
            Career Changer to front-end development including technical skills
            like
            <span> HTML5, CSS3, JavaScript, Typescript, Java, React, SQL </span>
            etc.
          </p>
          <p align="LEFT">
            I'm not a designer but I have a good sense of aesthetics & creative
            mind: Design from nature and for future. I always strive to make web
            pages with responsive design. I put special effort into optimizing
            my code and providing enjoyable features. I would like love to give
            your company&projects kind of support also after the project's
            completion. I gurantee a commitment during work on project
            completion in your company.
          </p>
          <p>
            Visit my
            <a href="https://www.linkedin.com/in/joon-suk/"> LinkedIn</a>
            -profile for more details. Also you can chekc my projects on
            <a href="https://www.linkedin.com/in/joon-suk/"> GitHub</a>. I look
            forward to any feedbacks!
          </p>
        </div>

        {/* Animative presentation of skills */}
        <div class="stage-ball-cont">
          <figure class="ball bubble">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#8FD400" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faDatabase} color="#00468C" />
            </div>
            <div className="face8">
              <FontAwesomeIcon icon={faJava} color="#00468C" />
            </div>
          </figure>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
