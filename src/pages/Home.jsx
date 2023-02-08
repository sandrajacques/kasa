import React, { useEffect, useState } from 'react'
import CardLogement from '../composants/CardLogement'

export default function Home() {
const [tabLogements,setTabLogements]= useState([])
useEffect(()=>{
fetch("/logements.json")
  .then(res=>res.json())
  .then(resultat=>setTabLogements(resultat))
  .catch(error=>console.error(error))
},[])
  return (
    
    <div>
      <div className='container'>
        {tabLogements.map((logement,index)=><CardLogement key={index} couverture={logement.cover}  id={logement.id} titre={logement.title}/>)}
      </div>
    </div>
  )
}
