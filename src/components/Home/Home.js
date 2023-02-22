import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import FirstName from '../../assets/images/initial-name.png';
import './Home.scss';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';

const Home = () => {
  //Use useState to define for letterClass, after initial loading, we want to add Animation an hover. That's why we use here useStste. Default Animation-Name: text-aniamte
  const [letterClass, setLetterClass] = useState('text-animate')

//Create to arrayS for two words, for those we want animate. This array needs whole the characters of name. The seperate letters what we want to animate and for animatedletter componants
//.1 Array for name
const nameArray = [ 'J', 'o', 'o', 'n', 'S', 'u', 'k']

//2.Array for developer
const jobArray = [
  'w',
  'e',
  'b ',
  ' ',
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.',
];
{/* 

useEffect(() => {
  return setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
}, []); */ }

useEffect(() => {
  const t = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
  return () => {
    clearTimeout(t)
  }
}, []);

return (
  <div className="container home-page">
    <div className="text-zone">
      <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        {/* <span>JoonSuk</span> */}
        {/* <img src={FirstName} alt="developer" />*/}
        <span className="aniLetter">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={21}
          />
        </span>
        <br />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
        />
      </h1>
      <h2>Junior Frontend Developer </h2>
      <Link to="/contact" className="flat-button">
        Contact Me
      </Link>
    </div>
    <Logo />

    <Loader type="pacman" />
  </div>
)
}

export default Home