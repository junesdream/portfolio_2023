import React, { useEffect, useRef } from 'react'
import './Logo.scss'
import LogoJ from '../../../assets/images/front-name-2.png'
// Import der Anime.js-Bibliothek
import anime from 'animejs/lib/anime.es.js' 

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    // Create an Anime.js-Animation
    const animation = anime.timeline({
      targets: bgRef.current,
      duration: 1000,
      opacity: 1,
    })

    // Add Anitmation to outlineLogoRef 
    animation.add({
      targets: outlineLogoRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 2000,
    })

    // Add Animation to solidLogoRef
    animation.add(
      {
        targets: solidLogoRef.current,
        opacity: 1,
        duration: 1000,
      },
      '-=1000' //Delay so that this animation starts later
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoJ}
        alt="JavaScript, Developer"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="outline-logo"
        ref={outlineLogoRef}
      >
        {/* Fügen Sie hier Ihre SVG-Pfade ein */}
      </svg>
    </div>
  )
}

export default Logo
