import reactImage from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js";
 const genText=["Fundamental","Core","Crutial"]
  function genRandomInt(max){
     return Math.floor(Math.random()*(max+1));
  }
function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  )
}
function Header(){
  return (
     <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {genText[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
function App() {
 
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} desc={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcept title={CORE_CONCEPTS[1].title} desc={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} desc={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
          <CoreConcept title={CORE_CONCEPTS[3].title} desc={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
