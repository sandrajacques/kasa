import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Error404 from './pages/Error404';
import Logement from './pages/Logement';
import Home from './pages/Home';


export default function Routage() {
  return (
    <Routes>{/* //associer les routes(url) avec leurs composants */}
    <Route path="/" element={<Home />} />
    <Route path="/logement/:id" element={<Logement />} />
    <Route path="/about" element={<About />} />
    <Route path="/*" element={<Error404 />} />
</Routes>
  )
}
