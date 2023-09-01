import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './PortfolioList.scss'
import Portfolio from './Portfolio/Portfolio'
import {portfolios} from '../../data/data'

const PortfolioList = () => {
  // Animation state management
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    // Trigger animation after a delay
    const t = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="porfLi-texts">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <h2 className="page-undertitle">
            Inspire from Nature & Create for Future. <br />
            It's Joon Suk aka &nbsp;&nbsp;
            <span className="page-subunder-title">RainbowDev</span>
          </h2>
        </div>

        {/*  Protfoliolists Boxes*/}
        <div className="porfLi-list">
          {portfolios.map((item) => (
            <Portfolio
              key={item.id}
              title={item.title}
              img={item.img}
              link={item.link}
              desc={item.description}
            />
          ))}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
} 

export default PortfolioList
