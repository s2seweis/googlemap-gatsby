import React from 'react';

const UseContext = () => {
  return (
    <section className="contact-page">

      <article
        id={'section6'}
        className="contact-form"
        style={{
          margin: 'auto',
          marginTop: '50px',
          width: '80%',
          marginBottom: '15px',
        }}
      >
        <h3 style={{textAlign: 'center'}}>React - useContext - Hook</h3>
        {/* <p>const cachedFn = useCallback(fn, dependencies) </p> */}
        <p>
          const value = useContext(SomeContext)
          {' '}
        </p>
        <p>
          1. useContext is a React Hook that lets you read and subscribe to context from your component.
          {' '}
        </p>
        <p>
          2. Call useContext at the top level of your component to read and subscribe to context.
          {' '}
          {' '}
        </p>

        <div style={{background: '#bac4ce26', marginBottom: '15px'}}>

          <p><code>{"import { useContext } from 'react';"}</code></p>
          <p><code>{'function MyComponent() {'}</code></p>

          <p style={{marginLeft: '50px'}}>
            <code>
              {'const theme = useContext(ThemeContext);'}
            </code>
          </p>
          <p style={{}}>
            <code>
              {'}'}
            </code>
          </p>

        </div>

        <p>
          3. SomeContext: The context that you’ve previously created with createContext. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
          {' '}
        </p>
        <p>
          4. useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.
          {' '}
        </p>
        <p>
          5. useContext() call in a component is not affected by providers returned from the same component. The corresponding -Context.Provider- needs to be above the component doing the useContext() call.
          {' '}
          {' '}
        </p>
        <p>
          6. React automatically re-renders all the children that use a particular context starting from the provider that receives a different value. The previous and the next values are compared with the Object.is comparison. Skipping re-renders with memo does not prevent the children receiving fresh context values.
          {' '}
          {' '}
        </p>
        <p>
          7. useContext returns the context value for the context you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.
          {' '}
          {' '}
        </p>

        <div style={{background: '#bac4ce26', marginBottom: '15px'}}>

          <p><code>{'function MyPage() {'}</code></p>

          <p style={{marginLeft: '50px'}}>
            <code>
              {'return ('}
            </code>
          </p>
          <p style={{marginLeft: '75px'}}>
            <code>
              {'<ThemeContext.Provider value="dark">'}
            </code>
          </p>

          <p style={{marginLeft: '90px'}}>
            <code>
              {'<Form />'}
            </code>

          </p>
          <p style={{marginLeft: '75px'}}>
            <code>
              {'</ThemeContext.Provider>'}
            </code>
          </p>

          <p style={{marginLeft: '50px'}}>
            <code>
              {');'}
            </code>

          </p>
          <p style={{}}>
            <code>
              {'}'}
            </code>

          </p>

        </div>

        <p>
          8. To pass context to a Button, wrap it or one of its parent components into the corresponding context provider.
          {' '}
          {' '}
        </p>
        <p>
          9. It doesn’t matter how many layers of components there are between the provider and the Button. When a Button anywhere inside of Form calls useContext(ThemeContext), it will receive "dark" as the value.
          {' '}
          {' '}
        </p>

        <iframe
          src="https://codesandbox.io/embed/sw-usecontext-7pwp5r?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: '500px',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        />

        <p style={{marginTop: '15px'}}>
          Recap
          {' '}
          {' '}
        </p>
        <p>
          !!!useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().
        </p>
        <p>
          10. Updating Context: Often, you’ll want the context to change over time. To update context, combine it with state. Declare a state variable in the parent component, and pass the current state down as the context value to the provider.
        </p>

        <div style={{background: '#bac4ce26', marginBottom: '15px'}}>

          <p><code>{'function MyPage() {'}</code></p>

          <p style={{marginLeft: '50px'}}>
            <code>{'const [theme, setTheme] = useState("dark")'}</code>
          </p>
          <p style={{marginLeft: '50px'}}>
            <code>{'return ('}</code>
          </p>
          <p style={{marginLeft: '75px'}}>
            <code>
              {'<ThemeContext.Provider value={theme}>'}
            </code>
          </p>

          <p style={{marginLeft: '90px'}}>
            <code>
              {'<Form />'}
            </code>

          </p>
          <p style={{marginLeft: '90px'}}>
            <code>
              {'<Button onClick={() => {'}
            </code>

          </p>
          <p style={{marginLeft: '100px'}}>
            <code>
              {'<setTheme("light");'}
            </code>

          </p>
          <p style={{marginLeft: '90px'}}>
            <code>
              {'}}>'}
            </code>
          </p>

          <p style={{marginLeft: '100px'}}>
            <code>
              {'Switch to light theme'}
            </code>

          </p>
          <p style={{marginLeft: '90px'}}>
            <code>
              {'</Button>'}
            </code>

          </p>
          <p style={{marginLeft: '75px'}}>
            <code>
              {'</ThemeContext.Provider>'}
            </code>

          </p>
          <p style={{marginLeft: '50px'}}>
            <code>
              {');'}
            </code>

          </p>
          <p style={{}}>
            <code>
              {'}'}
            </code>

          </p>

        </div>

        <p>
          Example: Updating a value via context.
        </p>

        <iframe
          src="https://codesandbox.io/embed/sw-usecontext-example-1-lvp3f6?fontsize=14&hidenavigation=1&theme=dark"
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

export default UseContext;
