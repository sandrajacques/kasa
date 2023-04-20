import { useState } from "react"
import nextImg from "../assets/img/next.png"
import precImg from "../assets/img/prec.png"

export default function Carousel({ images }) {//récupération direct de la props images pour éviter trop de répétitions
    const [indexEnCours, setIndexEnCours] = useState(0)

    function precedent() {
        let i = indexEnCours - 1;//décrémentation de l'index en cours
        if (i < 0) {//si on atteint 0 on recommence depuis la fin du tableau
            i = images.length - 1;
        }
        setIndexEnCours(i);//Mise à jour du State de l'index en cours
    }
    function suivant() {
        let i = indexEnCours + 1;//Incrémentation de l'index en cours
        if (i === images.length) {
            i = 0;//si on atteint la fin du tableau on recommence depus la première image
        }
        setIndexEnCours(i);
    }

    return (
        <div className="carousel">
            <img src={images[indexEnCours]} />
            {images.length > 1 ?/* Condition ternaire */
                <>
                    <button className="prec" onClick={precedent}>
                        <img src={precImg} alt="vecteur Precedent" />
                    </button>
                    <button className="next" onClick={suivant}>
                        <img src={nextImg} alt="vecteur Suivant" />
                    </button>
                    <span>{(indexEnCours + 1) + '/' + images.length}</span>{/* affichage numerotation du slide en cours */}
                </>
                : null}
        </div>)
}