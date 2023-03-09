import React from 'react'
import colorStar from '../assets/img/colorStar.png'
import grayStar from '../assets/img/grayStar.png'

export default function RatingStars(props) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.note) {
      stars.push(<img key={i} src={colorStar} />)
    } else {
      stars.push(<img key={i} src={grayStar} />)
    }
  }

  return (
    <div className="etoiles">{stars}</div>
  )
}
