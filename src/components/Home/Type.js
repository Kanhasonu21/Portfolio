import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'JavaScript Engineer',
          'FrontEnd Developer',
          'Tech Blogger',
          'Open Source Contributor',
          'Lectiophile',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: '_',
      }}
    />
  );
}

export default Type;
