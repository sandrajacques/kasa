import { useState } from "react"
import nextImg from "../assets/img/next.png"
import precImg from "../assets/img/prec.png"

export default function Carousel({images}){
const [indexEnCours,setIndexEnCours]=useState(0)
function precedent(){

let i = indexEnCours-1;
if (i<0){
i=images.length-1;
}
    setIndexEnCours(i);
}
function suivant(){
    let i = indexEnCours+1;
    if (i===images.length){
    i=0;
    }
        setIndexEnCours(i);
    }

return (
    <div className="carousel">
        <img src={images[indexEnCours]}/>
        {images.length>1?
        <div><button className="prec" onClick={precedent}>
            <img src={precImg} alt="vecteur Precedent" />
        </button>
        <button className="next" onClick={suivant}>
            <img src={nextImg} alt="vecteur Suivant" />
        </button>
        <span>{(indexEnCours+1) + '/'+ images.length}</span>
        </div> :null}
    </div>)
}