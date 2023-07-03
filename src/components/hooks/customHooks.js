import React from 'react';

const CustomHooks = () => {
  return (
    <section className="contact-page">

<article
          id={'section5'}
          className="contact-form"
          style={{
            margin: 'auto',
            marginTop: '50px',
            width: '80%',
            marginBottom: '15px',
          }}
        >
          <h3 style={{textAlign: 'center'}}>React - Custom Hooks</h3>
          {/* <p>const cachedFn = useCallback(fn, dependencies) </p> */}
          <p>
            1. When you extract logic into custom Hooks, you can hide the gnarly details of how you deal with some external system or a browser API.
            {' '}
          </p>
          <p>
            2. The code of your components expresses your intent, not the implementation.
            {' '}
          </p>
          <p>
            3. React component names must start with a capital letter, like StatusBar and SaveButton.
            {' '}
            {' '}
          </p>
          <p>
            4. React components also need to return something that React knows how to display, like a piece of JSX.
            {' '}
          </p>
          <p>
            5. Hook names must start with use followed by a capital letter, like useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return arbitrary values.
            {' '}
          </p>
          <p>
            6. This convention guarantees that you can always look at a component and know where its state, Effects, and other React features might “hide”.
            {' '}
            {' '}
          </p>
          <p>
            7. For example, if you see a getColor() function call inside your component, you can be sure that it can’t possibly contain React state inside because its name doesn’t start with use. However, a function call like useOnlineStatus() will most likely contain calls to other Hooks inside!
            {' '}
            {' '}
          </p>

          <div style={{background: '#bac4ce26', marginBottom: '15px'}}>

            <p><code>{'function StatusBar() {'}</code></p>

            <p style={{marginLeft: '50px'}}>
              <code>
                {'const isOnline = useOnlineStatus();'}
              </code>
            </p>
            <p style={{}}>
              <code>
                {'}'}
              </code>
            </p>

            <p style={{}}>
              <code>
                {'function SaveButton() {'}
              </code>

            </p>
            <p style={{marginLeft: '50px'}}>
              <code>
                {'const isOnline = useOnlineStatus();'}
              </code>
            </p>

            <p style={{}}>
              <code>
                {'}'}
              </code>

            </p>
            {/* <p><code>{'}'}</code></p> */}

          </div>

          <p>
            8. Custom Hooks let you share stateful logic, not state itself! | StatusBar() and SaveButton() same statful logic but not the same state! It’s wrong to think that a single isOnline state variable is shared between them.
            {' '}
            {' '}
          </p>

          {/* <iframe
            src="https://codesandbox.io/embed/sw-usecallback-mykh4m?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: '100%',
              height: '500px',
              border: '0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          /> */}

          <iframe
            src="https://codesandbox.io/embed/sw-customhook-lvsmmp?fontsize=14&hidenavigation=1&theme=dark"
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
            1. Custom Hooks let you share logic between components.
            2. Custom Hooks must be named starting with use followed by a capital letter.
            3. Custom Hooks only share stateful logic, not state itself.
            4. You can pass reactive values from one Hook to another, and they stay up-to-date.
            5.  All Hooks re-run every time your component re-renders.
            6. The code of your custom Hooks should be pure, like your component’s code.
            7.  Wrap event handlers received by custom Hooks into Effect Events.
            8. Don’t create custom Hooks like useMount. Keep their purpose specific.
            9. It’s up to you how and where to choose the boundaries of your code.
          </p>

        </article>

    </section>
  );
};

export default CustomHooks;
