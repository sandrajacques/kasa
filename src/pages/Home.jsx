import React, { useEffect, useState } from 'react'
import CardLogement from '../composants/CardLogement'

export default function Home() {
const [tabLogements,setTabLogements]= useState([])//tabLogements pour la liste des logement, initialement vide
useEffect(()=>{
fetch("/logements.json")
  .then(res=>res.json())
  .then(resultat=>setTabLogements(resultat))//remplir la liste des logements avec setTabLogements
  .catch(error=>console.error(error))
},[])//Tableau des dépendances vide pour l'execution de useEffect uniquement au lancement de la page 
  return (
    <div>
      <div className="banniere-accueil">
      Chez vous, partout et ailleurs 
      </div>
      <div className='container'>
        {tabLogements.map((logement,index)=><CardLogement key={index} couverture={logement.cover}  id={logement.id} titre={logement.title}/>)}{/* .map pour afficher un tableau en React */}
      </div>
    </div>
  )
}
