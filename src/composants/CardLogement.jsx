import React from 'react'
import { Link } from 'react-router-dom'


export default function CardLogement(props) {

    return (
    <Link to={`/logement/${props.id}`} className='card-logement'>
        <img src={props.couverture} alt={props.titre}/>
        <h2>{props.titre}</h2></Link>
    )
}
