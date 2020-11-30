import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'hiii, world!'
  );

  ReactDOM.render(
    element,
    document.getElementById('demo')
);