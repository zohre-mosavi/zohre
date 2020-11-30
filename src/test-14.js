import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  const element = <Welcome name="zohre" />;

  ReactDOM.render(
    element,
    document.getElementById('demo')
);