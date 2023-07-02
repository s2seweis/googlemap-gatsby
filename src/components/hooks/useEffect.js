import React from 'react';


const UseEffect = () => {
 

  return (

      <section className="contact-page">



     

        <article
          id={'section1'}
          className="contact-form"
          style={{
            margin: 'auto',
            marginTop: '0px',
            width: '80%',
            marginBottom: '15px',
          }}
        >
          <h3 style={{textAlign: 'center'}}>React - useEffect - Hook</h3>
          <p> useEffect(setup, dependencies?) </p>
          <p>1. Without Array/ Dependency - useEffect runs on every render. </p>
          <p>
            2. Empty Bracket/Array - the effect runs only on the initial render.
          </p>
          <p>
            3. Dependencies should be included in useEffect dependency array - if the variables updates the effect will run again.
          </p>
          <p>
            4. However, whenever you write an Effect, consider whether it would be clearer to also wrap it in a custom Hook. You shouldn’t need Effects very often, so if you’re writing one, it means that you need to “step outside React” to synchronize with some external system or to do something that React doesn’t have a built-in API for. Wrapping it into a custom Hook lets you precisely communicate your intent and how the data flows through it.
          </p>
          <p>
            5. Effects are an “escape hatch”: you use them when you need to “step outside React” and when there is no better built-in solution for your use case.
          </p>
          <p>
            6. Wrapping your Effects in custom Hooks makes it easier to upgrade your code when these solutions become available.
          </p>

          {/* ### */}

          <iframe
            src="https://codesandbox.io/embed/sw-useeffect--789z9z?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: '100%',
              height: '500px',
              border: '0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          />

         

        </article>


      </section>

    

  );
};

export default UseEffect;
