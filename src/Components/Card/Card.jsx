import React from 'react'
import './Card.css'

export default function Card({icon,title, subtitle}) {
  return (
    <div className="card">
        <img src={icon} alt="Card Icon" className="card-icon" />
        <div className="card-content">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}
