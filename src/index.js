import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//.......JSX............//

const name = "Preeti Vaishnav";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element, 
  document.getElementById("app")
  );

//...............state............//

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

//........Props..............//

import React from 'react';
import ReactDOM from 'react-dom';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

const myelement = <Car brand="Ford" />;

ReactDOM.render(myelement, document.getElementById('root'));
//............Class components..........//

import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));

//..............Functional Components............//

import React from 'react';
import ReactDOM from 'react-dom';

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

ReactDOM.render(<Car />, document.getElementById('root'));

//..............Virtual DOM.....................//


reportWebVitals();
