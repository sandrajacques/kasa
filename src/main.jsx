import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './styles/index.scss'
import Header from './composants/Header';
import Footer from './composants/Footer';
import Routage from './routage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>{/* //Routage de l'application */}
            <Header/>{/* //Mettre le header en dehors des routes pour le rendre visible sur toutes les pages */}
            <Routage/>
            <Footer/>
        </BrowserRouter>
  </React.StrictMode>,
)
