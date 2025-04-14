import TabBtns from "./TabBtns";
import { useState } from "react";
import { EXAMPLES } from "../../../../data/coreData";

const MenuSection = () => {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
    // console.log(selectedBtn);
  }
  return (
    <>
      <menu>
        <TabBtns onSelect={() => handleSelect("components")}>
          Components
        </TabBtns>
        <TabBtns onSelect={() => handleSelect("jsx")}>JSX</TabBtns>
        <TabBtns onSelect={() => handleSelect("props")}>Props</TabBtns>
        <TabBtns onSelect={() => handleSelect("state")}>State</TabBtns>
      </menu>
      <div
        style={{
          backgroundColor: "darkcyan",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </>
  );
};

export default MenuSection;
