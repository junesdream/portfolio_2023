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
            As a career changer transitioning into front-end development, <br />{' '}
            I have acquired technical skills such
            <span>
              {' '}
              HTML5, CSS3, JavaScript, Typescript, React, Java, Spring, SQL{' '}
            </span>
            and more.
          </p>
          <p align="LEFT">
            While I may not be a designer by trade, I possess a keen sense of
            aesthetics and a creative mindset. I draw inspiration from nature
            and the future, aiming to create web pages with responsive designs.
            I am dedicated to optimizing my code and delivering delightful user
            experiences. My commitment extends beyond project completion, and I
            am eager to provide ongoing support to your company and its
            projects. <br /> I guarantee unwavering dedication throughout our
            collaboration.
          </p>
          <p>
            Visit my <a href="https://www.linkedin.com/in/joon-suk/">LinkedIn</a>-Profile for more details. Also you can check my projects on <a href="https://www.linkedin.com/in/joon-suk/"> GitHub</a>. I
            eagerly anticipate your feedback.
          </p>
        </div>

        {/* Animative presentation of skills */}
        <div className="stage-ball-cont">
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
