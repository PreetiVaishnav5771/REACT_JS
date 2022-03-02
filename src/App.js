import logo from './logo.svg';
import './App.css';
import helloworld from './helloworld';
import mycar from './mycar';
import Brand from './Brand';
import Carname from './Carname';

const App = () => {
  return (
    <div className="App">
    <helloworld/>
    </div>
  );
}

render = () => {
  return (
    <div>
      <h1>My Car</h1>
    </div>
  );
}


function Car = (props) => {
  return 
  <div>
  <h2>I am a { props.brand }!</h2>;
  </div>
  const myelement = <Car brand="Ford" />;
}

class Car extends React.Component {
  render() {
    return 
    <h2>Hi, I am a Car!</h2>;
  }
}

const Car= () => {
  return 
  <h2>
    Hi, I am a Car!
  </h2>;
}

export default App;
