import logo from './logo.svg';
import './App.css';
import Demo, {Employee} from './Demo';



function App() {
  let fruits = ["Apple", "Mango", "Grapes", "Orange"];
  return (
    <div>
     <h1>React using map to iterate</h1>
     {
       fruits.map((item, index) => <p key = {index}>{item}</p>)
     }
    </div>
  );
}

export default App;
