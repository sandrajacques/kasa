import { useState } from "react"

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
    <div className="carousel"><img src={images[indexEnCours]}/>
    <button onClick={precedent}>Préc</button>
    <button onClick={suivant}>Suivant</button>
    </div>)
}