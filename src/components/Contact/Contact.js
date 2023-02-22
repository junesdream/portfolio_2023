import React, { useState, useEffect  } from 'react'
import './Contact.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
// useState for AnimatedLetter
const [letterClass, setLetterClass] = useState('text-animate');

//Initializing for Emailjs: Caontact
const form = useRef();

useEffect(() => {
  const t = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
  return () => {
    clearTimeout(t)
  }
}, []);

//Function for sending email 
const sendEmail = (e) => {
  e.preventDefault()

  // preventDefault: using by emailjs libraray, emailjs object 
  emailjs.sendForm('service_pbqxc4i', 'template_l0e8iut', form.current, 'CQJusylkmTBM3eYur').then(
    () => {
      alert('Message successfully sent!')
      window.location.reload(false)
    },
    () => {
      alert('Failed to send the message, please try again')
    }
  )
};

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in permanent employment opportunities especially for
            Junior-Frontend-Position. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Joon Suk,
          <br />
          Germany,
          <br />
          Pannierstr. 34 <br />
          12047 Berlin <br />
          <br />
          <span>joonh.suk@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[52.4910626, 13.4346275]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[52.4910626, 13.4346275]}>
              <Popup>
                RainbowDev-Teams lives here, come by for a coffee and a walk
                along the shore 😀 ☕
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact