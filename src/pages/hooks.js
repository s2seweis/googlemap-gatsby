import React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

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

          {/* <iframe src="https://codesandbox.io/embed/react-hooks-useeffect-0twv9?fontsize=14&hidenavigation=1&theme=dark"
          style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
          ></iframe> */}

          {/* ### */}

        </article>

        <article
          id={'section2'}
          className="contact-form"
          style={{
            margin: 'auto',
            marginTop: '50px',
            width: '80%',
            marginBottom: '15px',
          }}
        >
          <h3 style={{textAlign: 'center'}}>React - useRef - Hook</h3>
          <p>const ref = useRef(initialValue) </p>
          <p>
            1. UseRef lets you reference a value that’s not needed for rendering.
            {' '}
          </p>
          <p>
            2. Call useRef at the top level of your component to declare one or more refs.
          </p>
          <p>3. Changing a ref does not trigger a re-render. </p>
          <p>
            4. To update the value inside the ref, you need to manually change its current property.
            {' '}
          </p>
          <p>
            5. The information is local to each copy of your component (unlike the variables outside, which are shared).
            {' '}
          </p>

          <iframe
            src="https://codesandbox.io/embed/sw-useref-5zwl6y?fontsize=14&hidenavigation=1&theme=dark"
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
