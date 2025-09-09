import Accordion from "./component/Accordion/Accordion"

function App() {
  return (
    <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
          <Accordion.Item 
            className="accordion-item" 
            title="we got 20 years of experience"
            id = "experience"
          >
            <article>
              <p>
                You can&apos;t go wrong
              </p>
              <p>
                We are in the business of plannign highly individualized vaction tirps fo rmore than 20 years
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item 
            className="accordion-item" 
            title="we are working with local guides"
            id = "guides"
          >
            <article>
              <p>We are not doing this along from our ofice</p>      
              <p>Instead, we are working with local guides to ensure a safe pleasant vacation</p>    
            </article>
          </Accordion.Item>
      </Accordion>
    </section>
    </main>
  )
}

export default App
