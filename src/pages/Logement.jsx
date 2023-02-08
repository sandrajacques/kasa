import React,  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../composants/Carousel';
export default function Logement() {
const {id}=useParams();
const [infoLogement,setInfoLogement]= useState(null)
useEffect(()=>{
fetch("/logements.json")
  .then(res=>res.json())
  .then(resultat=>{
const logementEnCours = resultat.find(logement=>logement.id === id)
    setInfoLogement(logementEnCours)})
  .catch(error=>console.error(error))
},[])
if(!infoLogement){
  return(
<div>chargement...</div>
  )
}
  return (
    <div><Carousel images= {infoLogement.pictures} />{JSON.stringify(infoLogement)}</div>
  )
}
