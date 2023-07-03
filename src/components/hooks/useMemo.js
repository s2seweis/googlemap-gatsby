import React from 'react';

const UseMemo = () => {
  return (
    <section className="contact-page">

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

    </section>
  );
};

export default UseMemo;
