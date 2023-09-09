import React from 'react'
import './Portfolio.scss'

//This component to display a project or portfolio item
const Portfolio = ({ img, link, title, desc }) => {
  return (
    <>
      <div className="portf">
        <div className="portf-browser">
          <div className="portf-circle"></div>
          <div className="portf-circle"></div>
          <div className="portf-circle"></div>
          <span className="portf-title">{title}</span>
        </div>
        <div className="portf-link">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="portf-img" />
            <h4 className="portf-desc">{desc}</h4>
          </a>
        </div>
      </div>
    </>
  )
}

export default Portfolio
