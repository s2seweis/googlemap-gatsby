import React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

import UseEffect from '../components/hooks/useEffect';
import UseRef from '../components/hooks/useRef';

const hookPage = () => {
  // const seo = {
  //     metaTitle: title,
  //     metaDescription: title,
  //   }

  return (
    <Layout>

      <section className="contact-page">

        <Seo seo={{metaTitle: 'Contact'}} />

        <div style={{marginTop: '100px'}}>
          <a
            style={{
              fontSize: '1.3rem',
              padding: '5px',
              marginLeft: '20px',
            }}
            href="javascript:history.back()"
          >
            <button type="button" className="btn btn-link">Go Back</button>
          </a>
        </div>

       {/* ### */}

      <UseEffect/>

       {/* ### */}

      <UseRef/>

       {/* ### */}

       

        <article
          id={'section3'}
          className="contact-form"
          style={{
            margin: 'auto',
            marginTop: '50px',
            width: '80%',
            marginBottom: '15px',
          }}
        >
          <h3 style={{textAlign: 'center'}}>React - useMemo - Hook</h3>
          <p>const cachedValue = useMemo(calculateValue, dependencies) </p>
          <p>
            1. Call useMemo at the top level of your component to cache a calculation between re-renders.
            {' '}
          </p>
          <p>
            2. calculateValue: The function calculating the value that you want to cache.
            {' '}
          </p>
          <p>3. React will call your function during the initial render. </p>
          <p>
            4. On next renders, React will return the same value again if the dependencies have not changed since the last render.
            {' '}
          </p>

          <div style={{background: '#bac4ce26', marginBottom: '15px'}}>

            <p><code>{"import { useMemo } from 'react';"}</code></p>

            <p><code>{'function TodoList({ todos, tab, theme }) {'}</code></p>
            <p style={{marginLeft: '50px'}}>
              <code>
                {
                  'const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);'
                }
              </code>
            </p>
            <p><code>{'}'}</code></p>

          </div>

          <p>You need to pass two things to useMemo: </p>
          <p>
            1. A calculation function that takes no arguments, like
            {' '}
            {'()=>'}
            {' '}
            , and returns what you wanted to calculate.
            {' '}
          </p>
          <p>
            2. A list of dependencies including every value within your component that’s used inside your calculation.
            {' '}
          </p>

          <p>
            On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.
            {' '}
          </p>
          <p>
            On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.
            {' '}
          </p>
          <p>
            In other words, useMemo caches a calculation result between re-renders until its dependencies change.
            {' '}
          </p>

          <iframe
            src="https://codesandbox.io/embed/sw-usememo-vws2nt?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: '100%',
              height: '500px',
              border: '0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          />

        </article>

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
          <h3 style={{textAlign: 'center'}}>React - usueCallback - Hook</h3>
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

          <p style={{marginTop:"15px"}}>
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

      {/* <div
          className="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            paddingBottom:"50px"
          }}
        >
          <a aria-label="link" className="section" href="/news">News</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section" href="/about">About</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section " href="/index-all-recipes">Index</a>
        </div> */}

    </Layout>
  );
};

export default hookPage;
