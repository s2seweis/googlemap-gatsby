import React from 'react';

const UseRef = () => {
  return (
    <section className="contact-page">

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

    </section>
  );
};

export default UseRef;
