import React from 'react';

const UseCallback = () => {
  return (
    <section className="contact-page">

<article
          id={'section4'}
          className="contact-form"
          style={{
            margin: 'auto',
            marginTop: '50px',
            width: '80%',
            marginBottom: '15px',
          }}
        >
          <h3 style={{textAlign: 'center'}}>React - useCallback - Hook</h3>
          <p>const cachedFn = useCallback(fn, dependencies) </p>
          <p>
            1. Call useCallback at the top level of your component to cache a function definition between re-renders
            {' '}
          </p>
          <p>
            2. fn: The function value that you want to cache. It can take any arguments and return any values.
            {' '}
          </p>
          <p>
            3. On next renders, React will give you the same function again if the dependencies have not changed since the last render.
            {' '}
          </p>
          <p>
            4. React will not call your function. The function is returned to you so you can decide when and whether to call it.
            {' '}
          </p>
          <p>
            5. The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.
            {' '}
          </p>
          <p>
            6. On the initial render, useCallback returns the fn function you have passed. During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.
            {' '}
          </p>

          <div style={{background: '#bac4ce26', marginBottom: '15px'}}>

            <p><code>{"import { useCallback } from 'react';"}</code></p>

            <p>
              <code>
                {'function ProductPage({ productId, referrer, theme }) {'}
              </code>
            </p>
            <p style={{marginLeft: '50px'}}>
              <code>
                {'const handleSubmit = useCallback((orderDetails) => {'}
              </code>
            </p>
            <p style={{marginLeft: '75px'}}>
              <code>
                {'post(/product/'}
              </code>
              <code>
                {'+ productId +'}
              </code>
              <code>
                {'/buy, {'}
              </code>

            </p>
            <p style={{marginLeft: '90px'}}>
              <code>
                {'referrer,'}
              </code>
              <code>
                {'orderDetails+,'}
              </code>
            </p>
            <p style={{marginLeft: '75px'}}>
              <code>
                {'});'}
              </code>
            </p>
            <p style={{marginLeft: '50px'}}>
              <code>
                {'},'}
              </code>
              <code>
                {'[productId, referrer]);'}
              </code>
            </p>
            {/* <p><code>{'}'}</code></p> */}

          </div>

          <p>
            When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. Let’s first look at the syntax for how to do this, and then see in which cases it’s useful.

            To cache a function between re-renders of your component, wrap its definition into the useCallback Hook:
            {' '}
          </p>

          <iframe
            src="https://codesandbox.io/embed/sw-usecallback-mykh4m?fontsize=14&hidenavigation=1&theme=dark"
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

export default UseCallback;
