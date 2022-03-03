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
    <h1>My Car</h1>
    <h2>I am a { props.brand }!</h2>;
    <h2>Hi, I am a Car!</h2>;
    Hi, I am a Car!
    </div>
  );
}

export default App;

// render = () => {
//   return (
//     <div>
     
//     </div>
//   );
// }


// function Car = (props) => {
//   return 
//   <div>
  
//   </div>
//   const myelement = <Car brand="Ford" />;
// }

// class Car extends React.Component {
//   render() {
//     return 
//     <h2>Hi, I am a Car!</h2>;
//   }
// }

// const Car= () => {
//   return 
//   <h2>
//     Hi, I am a Car!
//   </h2>;
// }

// export default App;
