import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="not-found">
    <div className="chiffre">404</div>
    <div className="message">Oups! La page que vous demandez n'existe pas.</div>
    <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
    
  )
}
