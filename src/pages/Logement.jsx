import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carousel from '../composants/Carousel';
import RatingStars from '../composants/RatingStars';
import Accordeon from '../composants/Accordeon';

export default function Logement() {
  const { id } = useParams();// récupération de l'id depuis l'Url de la page en cours
  const [infoLogement, setInfoLogement] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logements.json")
      .then(res => res.json())
      .then(resultat => {//le resulat contient le tableau de tous les logements
        //console.log(resultat);
        const logementEnCours = resultat.find(logement => logement.id === id)
        if (!logementEnCours) {//logement introuvable avec l'id en cours
          navigate('/Error404');//redirection vers la page erreur 404
        }
        setInfoLogement(logementEnCours)
      })
      .catch(error => console.error(error))
  }, [])


  if (!infoLogement) {
    return (
      <div>chargement...</div>
    )
  }
  return (
    <div className="logement__container" >
      <Carousel images={infoLogement.pictures} />
      <div className="logement__infos">
        <div className="logement__details">
          <div className="title">{infoLogement.title}</div>
          <p>{infoLogement.location}</p>
          <p className="tags">
            {
              infoLogement.tags.map((tag, index) => <span key={index} >{tag}</span>)
            }
          </p>
        </div>
        <div className="logement__hote">
          <div className="logement__hote__nom-image">
            <p>{infoLogement.host.name}</p>
            <img src={infoLogement.host.picture} alt="avatar" />
          </div>
          <RatingStars note={infoLogement.rating} />
        </div>
      </div>
      <div className='accordeons'>
        <Accordeon titre="description" contenu={infoLogement.description} />
        <Accordeon titre="equipements" contenuTab={infoLogement.equipments} />
      </div>
    </div>
  )
}
