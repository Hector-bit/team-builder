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
      },
      {
        id: 2,
        name: "Smith John",
        email: "anotheremail@gmail.com",
        role: "Data Scientist"
      },
      {
        id: 3,
        name: "Gary Holbert",
        email: "coolemail@gmail.com",
        role: "UI/Ux"
      },
      {
        id: 4,
        name: "Smithy Johnny",
        email: "superkool@gmail.com",
        role: "Data Scientist"
      },
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
      <div className="formAndteam">
        <Form addNewMember={addNewMember}></Form>
        <div className="memberList">
        <Team members={members}></Team>
        </div>
      </div>
    </div>
  );
}

export default App;
