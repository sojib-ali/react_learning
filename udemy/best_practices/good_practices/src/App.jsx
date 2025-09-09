import Accordion from "./component/Accordion/Accordion"

function App() {
  return (
    <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
          <Accordion.Item 
            className="accordion-item"   
          >
            <Accordion.Title className="accordion-item-title"  id = "experience">
              we got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content" id = "experience">
              <article>
                <p>
                  You can&apos;t go wrong
                </p>
                <p>
                  We are in the business of plannign highly individualized vaction tirps fo rmore than 20 years
                </p>
              </article> 
            </Accordion.Content> 
          </Accordion.Item>
          
          <Accordion.Item 
            className="accordion-item"     
          >
            <Accordion.Title className="accordion-item-title" id = "local-guides">
              we are working with local guides
            </Accordion.Title>

            <Accordion.Content className="accordion-item-content" id = "local-guides">
                <article>
                  <p>We are not doing this along from our ofice</p>      
                  <p>Instead, we are working with local guides to ensure a safe pleasant vacation</p>    
                </article>
            </Accordion.Content>
          </Accordion.Item>
      </Accordion>
    </section>
    </main>
  )
}

export default App
