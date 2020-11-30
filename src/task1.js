import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    show()
    {
        console.log('create-react-app')
    }
    render() {
      return(
      <h2>{this.show()}</h2>
      );
    }
  }

  class Child extends React.Component {
    render() {
        return (
          <div>
          <Parent />
          </div>
        );
      }
  }

export default Child;