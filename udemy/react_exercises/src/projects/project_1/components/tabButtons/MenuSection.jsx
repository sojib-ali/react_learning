import TabBtns from "./TabBtns";
import { useState } from "react";
import { EXAMPLES } from "../../../../data/coreData";
import "./tabButtons.css";

const MenuSection = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
    // console.log(selectedBtn);
  }
  return (
    <>
      <menu className="tabMenu">
        <TabBtns
          onSelect={() => handleSelect("components")}
          isSelect={selectedTopic === "components"}
        >
          Components
        </TabBtns>
        <TabBtns
          onSelect={() => handleSelect("jsx")}
          isSelect={selectedTopic === "jsx"}
        >
          JSX
        </TabBtns>
        <TabBtns
          onSelect={() => handleSelect("props")}
          isSelect={selectedTopic === "props"}
        >
          Props
        </TabBtns>
        <TabBtns
          onSelect={() => handleSelect("state")}
          isSelect={selectedTopic === "state"}
        >
          State
        </TabBtns>
      </menu>

      {!selectedTopic ? (
        <p style={{ color: "black" }}>Please select a topic</p>
      ) : (
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
      )}
    </>
  );
};

export default MenuSection;
