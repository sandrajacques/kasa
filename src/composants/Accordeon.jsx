import React, {useState} from 'react'
import fleche from '../assets/img/flecheAccordeon.png'

export default function Accordeon(props) {
    const [isOpen,setIsOpen]= useState(true)
    return (
    <div className={`accordeon ${isOpen?"open":null} `} >
        <div onClick={()=>setIsOpen(!isOpen)} className="header">
            <h3>{props.titre} </h3>
            <img src={fleche} alt="fleche Icon" />
        </div>
        <div className="content">
            {props.contenuTab?
            <ul>{props.contenuTab.map((item,index)=><li key={index}>{item}</li>)}</ul>
            :
            <p>{props.contenu}</p>}</div>

    </div>
    )
}
