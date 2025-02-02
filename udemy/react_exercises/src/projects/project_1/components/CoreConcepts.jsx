import { CORE_CONCEPTS } from "../../../data/coreData";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <>
      <h2>Core Concepts</h2>
      <ul>
        {/* {CORE_CONCEPTS.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))} */}

        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </>
  );
};

export default CoreConcepts;
