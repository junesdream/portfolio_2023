import { useEffect, useRef } from 'react'
import './Logo.scss'
import LogoJ from '../../../assets/images/front-name-2.png'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  //Classname inside of SVG Container/g tag. All the 3 Elements're going to the container as well. SVG Container, SVG itself & solid image
  //In order to manipulate to them, in apply gsap(Library of ) animation. For that usning useRef for
  //3. Elements are: 1. Backgrlound Container, 2. Solidimage 3. for outLineLogo
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  //In order to apply animationeffect we use useEffect Hook. For Array and dependency 
  useEffect(() => {
    //Register to plugin for drawing the aniamtion from the SVG
    gsap.registerPlugin(DrawSVGPlugin)

    // Call the gsap timeline function. That calls the animation in a secoond
    //It calls two functions: one calls endstate of animation 
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      // to chain animation. Call the from function 
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoJ}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
