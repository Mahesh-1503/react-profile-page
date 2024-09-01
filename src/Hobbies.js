import React from 'react';

function Bio(props) {
  return (
    <section>
      <h2>About Me</h2>
      <p>{props.bio}</p>
    </section>
  );
}

export default Bio;
