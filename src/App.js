import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Team from './components/Team';
import Form from './components/Form';

function App() {
    const [members, setMembers] = useState([
      {
        id: 1,
        name: "John Hank",
        email: "randomemail@gmail.com",
        role: "web dev"
      }
    ]);
    const addNewMember = member => {
      const newMember = {
        id: Date.now(),
        name: member.name,
        email: member.email,
        role: member.role
      }
      setMembers([...members, newMember])
    }
    return (
    <div className="App">
      <h1>Team List!!!</h1>
      <Form addNewMember={addNewMember}></Form>
      <Team members={members}></Team>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
