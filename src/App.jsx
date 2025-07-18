
import componentImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js";
import Header from "./component/Header.jsx";
import CoreConcept from "./component/CoreConcept.jsx";
import TabButton from "./component/TabButton.jsx";
function App() {
 function handleSelect(selectedButton){
   console.log(selectedButton);
 }
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
        <section id="examples">
           <h2>Examples</h2>
           
           <menu>
             <TabButton onSelect={()=>handleSelect('component')}>Component</TabButton>
              <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
               <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
                 <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
           </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
