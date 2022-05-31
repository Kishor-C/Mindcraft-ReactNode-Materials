import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function UserForm() {
  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [salary, setSalary] = useState('');
  // handle onsubmit event
  let submitForm = (e) => {
    e.preventDefault();
    // here we can send this to the backend, but now we will print the state
    console.log(name, age, salary);
  }
  // handle onchange event 
  let inputChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    if(inputName == 'n1') {
      setName(inputValue);
    } if(inputName == 'n2') {
      setAge(inputValue);
    } if (inputName == 'n3') {
      setSalary(inputValue);
    }
  }
  return (<div>
    <h3>User Form</h3>
    <form onSubmit = {submitForm}>
      <div className = "form-group">
        <label>
          Name: <input type = "text" name = "n1" onChange = {inputChange}
          autoComplete = "off" className = "form-control"/>
        </label>
      </div>
      <div className = "form-group">
        <label>
          Age: <input type = "number" name = "n2" onChange = {inputChange}
          autoComplete = "off" className = "form-control"/>
        </label>
      </div>
      <div className = "form-group">
        <label>
          Salary: <input type = "number" name = "n3" onChange = {inputChange}
          autoComplete = "off" className = "form-control"/>
        </label>
      </div>
      <div>
        <button type = "submit" className = "btn btn-primary">Submit</button>
      </div>
    </form>
  </div>)
}

function App() {
  return (
    <div className = "container-fluid">
     <div className = "row">
       <UserForm />
     </div>
    </div>
  );
}
export default App;
