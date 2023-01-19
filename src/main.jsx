import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Error404 from './pages/Error404';
import Logement from './pages/Logement';
import './styles/index.scss'
import Header from './composants/Header';
import Footer from './composants/Footer';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>{/* //Routage de l'application */}
            <Header/>{/* //Mettre le header en dehors des routes pour le rendre visible sur toutes les pages */}
            <Routes>{/* //associer les routes(url) avec leurs composants */}
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
  </React.StrictMode>,
)
