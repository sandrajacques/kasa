import banniere from "../assets/img/banniere.png";
import Accordeon from "../composants/Accordeon";

export default function About() {
  return (
    <div className="about">
      <img className ="banniere" src={banniere}/>
      <Accordeon titre="fiabilité" contenu={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus nisi sed recusandae voluptatem impedit itaque quos aliquid ab nemo!"}/>
        <Accordeon titre="respect" contenu={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus nisi sed recusandae voluptatem impedit itaque quos aliquid ab nemo!"}/>
        <Accordeon titre="service" contenu={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus nisi sed recusandae voluptatem impedit itaque quos aliquid ab nemo!"}/>
        <Accordeon titre="responsabilité" contenu={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus nisi sed recusandae voluptatem impedit itaque quos aliquid ab nemo!"}/>
    </div>
  )
}
