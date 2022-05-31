import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {Link, Route, Routes} from 'react-router-dom';
function User() {
  let [id, setId] = useState('')
  let [user, setUser] = useState({id: '', name : '', salary: ''});
  let [err, setErr] = useState('');
  let trackId = (e) => {
    setId(e.target.value);
  }
  let fetch = (e) => {
    let url = "http://localhost:9091/employee/"+id;
    axios.get(url)
    .then(response => {setUser(response.data); setErr('')})
    .catch(error => {setErr(error.response.data.message); setUser({id: '', name : '', salary: ''})})
  }
  return (<div>
    <h3>Fetch User by Id</h3>
    <label>
      Id <input type = 'number' onChange = {trackId} />
      <input type = 'button'  onClick = {fetch} className = 'btn btn-primary' value = "Search"></input>
    </label>
    <div className = 'text-success'>
      Id: {user.id}, Name: {user.name}, Salary: {user.salary}
    </div>
    <div className = 'text-danger'>
      {err}
    </div>
  </div>)
}

function UserList() {
  let [users, setUsers] = useState([]);
  let fetchUsers = (e) => {
    let url = "http://localhost:9091/employee";
    axios.get(url)
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))
  }

  return (<div>
    <h3>Users List</h3>
    <button onClick = {fetchUsers} className = 'btn btn-primary'>Refresh</button>
    <table className = 'table'>
      <thead>
        <tr>
          <th>#</th><th>Id</th><th>Name</th><th>Salary</th>
        </tr>
      </thead>
      <tbody>
       {
         users.map((item, index) => <tr key = {index}>
           <td>{index + 1}</td><td>{item.id}</td><td>{item.name}</td><td>{item.salary}</td>
         </tr>)
       }
      </tbody>
    </table>
  </div>)
}

function UserForm() {
  let [name1, setName] = useState('');
  let [id1, setId] = useState('');
  let [salary1, setSalary] = useState('');
  let [message, setMessage] = useState('');
  // handle onsubmit event
  let submitForm = (e) => {
    e.preventDefault();
    // here we can send this to the backend, but now we will print the state
    // the expected json is {"id":id, "name":name, "salary":salary} hence we need a JS object
    // of {id: idValue, name: nameValue, salary:salaryValue}
    let user = {id: id1, name : name1, salary: salary1};
    let url = "http://localhost:9091/employee";
    axios.post(url, user)
    .then(response => setMessage(response.data.message))
    .catch(error => console.log(error));
  }
  // handle onchange event 
  let inputChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    if(inputName == 'n1') {
      setName(inputValue);
    } if(inputName == 'n2') {
      setId(inputValue);
    } if (inputName == 'n3') {
      setSalary(inputValue);
    }
  }
  return (<div>
    <h3>User Form</h3>
    <div className = 'text-success'>{message}</div>
    <form onSubmit = {submitForm}>
      <div className = "form-group">
        <label>
          Name: <input type = "text" name = "n1" onChange = {inputChange}
          autoComplete = "off" className = "form-control"/>
        </label>
      </div>
      <div className = "form-group">
        <label>
          Id: <input type = "number" name = "n2" onChange = {inputChange}
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
     <div className = 'text-center'>
      <h2>React for SPA</h2>
     </div>
     <div>
      <Link to = "/store">User Form</Link> /
      <Link to = "/fetchAll">Show All Users</Link> /
      <Link to = "/fetchUser">Fetch User By Id</Link>
     </div>
     <div>
       <Routes>
         <Route path = "/store" element = {<UserForm />} />
         <Route path = "/fetchAll" element = {<UserList />} />
         <Route path = "/fetchUser" element = {<User />} />
       </Routes>
     </div>
    </div>
  );
}
export default App;
