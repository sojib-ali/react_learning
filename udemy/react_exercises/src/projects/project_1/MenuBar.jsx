import "../../styles/menuBar.css";
import { CORE_CONCEPTS, EXAMPLES } from "../../data/coreData";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

const MenuBar = () => {
  const [index, setIndex] = useState("please select a topic");
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* {CORE_CONCEPTS.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))} */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* {!index && <p>Please select a topic.</p>} */}
          {index}
          <menu>
            <TabButton
              id={"components"}
              currentIndex={index}
              setIndex={setIndex}
            >
              Components
            </TabButton>
            <TabButton id={"jsx"} currentIndex={index} setIndex={setIndex}>
              JSX
            </TabButton>
            <TabButton id={"props"} currentIndex={index} setIndex={setIndex}>
              Props
            </TabButton>
            <TabButton id={"state"} currentIndex={index} setIndex={setIndex}>
              State
            </TabButton>
          </menu>
          {EXAMPLES[index] && (
            <div id="tab-content">
              <h3>{EXAMPLES[index].title}</h3>
              <p>{EXAMPLES[index].description}</p>
              <pre>
                <code>{EXAMPLES[index].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default MenuBar;
