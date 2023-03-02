import React from 'react'
import logo from '../assets/img/LOGO.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
<header>
  <div className="header__container">
<img src={logo}/>
<nav>
<Link to="/">Accueil</Link>
<Link to="/about">A Propos</Link>
</nav>
</div>
    </header>
)
}
