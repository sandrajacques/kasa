import React from 'react'
import fleche from '../assets/img/flecheAccordeon.png'

export default function Accordeon(props) {
  return (
    <div className="accordeon">
        <div className="header">
            <h3>{props.titre} </h3>
            <img src={fleche} alt="fleche Icon" />
        </div>
        <div className="content">{props.contenu}</div>

    </div>
  )
}
