import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl:'test'
  };
  
  
// const element = <img src={user.avatarUrl}></img>;
 const element = <img src={user.avatarUrl} />;


ReactDOM.render(
  element,
  document.getElementById('demo')
);





