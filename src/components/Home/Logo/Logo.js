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
    // Erstellen Sie eine Anime.js-Animation
    const animation = anime.timeline({
      targets: bgRef.current,
      duration: 1000,
      opacity: 1,
    })

    // Fügen Sie eine Zeichnungsanimation für outlineLogoRef hinzu
    animation.add({
      targets: outlineLogoRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 2000,
    })

    // Fügen Sie eine Animation für solidLogoRef hinzu
    animation.add(
      {
        targets: solidLogoRef.current,
        opacity: 1,
        duration: 1000,
      },
      '-=1000' // Verzögerung, damit diese Animation später beginnt
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
