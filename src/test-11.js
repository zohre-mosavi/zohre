import React from 'react';
import ReactDOM from 'react-dom';

const element = {
    type: 'h1',
    props: {
        className: 'greeting',
      children: 'Hello, world!'
    }
  };

  ReactDOM.render(
    element,
    document.getElementById('demo')
);