import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({image, title, description, stack,children}) {
  return (
    <div className='projectcard'>
    
        <img src={image} alt={title} className='project-image' />
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <div className='project-stack'>
          {stack.map((tech, index) => (
            <span key={index} className='tech-tag'>{tech}</span>
          ))}
        </div>
        <div className='project-links'>
          {children}
        </div>


    </div>
  )
}
