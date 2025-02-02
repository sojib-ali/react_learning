import { useState } from "react";
import { EXAMPLES } from "../../../data/coreData";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [index, setIndex] = useState("please select a topic");
  return (
    <>
      <Section title="example" id="examples">
        {/* {!index && <p>Please select a topic.</p>} */}

        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={index === "components"}
                onClick={() => setIndex("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={index === "jsx"}
                onClick={() => setIndex("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={index === "props"}
                onClick={() => setIndex("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={index === "state"}
                onClick={() => setIndex("state")}
              >
                State
              </TabButton>

              {/* <TabButton
              id="state"
              currentIndex={index}
              onClick={() => setIndex("state")}
            >
              State
            </TabButton> */}
              {/* <TabButton id={"state"} currentIndex={index} onClick={() => setIndex(id)}>
              State
            </TabButton> */}
            </>
          }
        >
          {EXAMPLES[index] && (
            <div id="tab-content">
              <h3>{EXAMPLES[index].title}</h3>
              <p>{EXAMPLES[index].description}</p>
              <pre>
                <code>{EXAMPLES[index].code}</code>
              </pre>
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
};

export default Examples;
