import React from 'react';
import {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
      name: "", email: "", role: "" 
    });
    const handleChanges = e => {
      setMember({ ...member, [e.target.name]:
      e.target.value });
      console.log(member);
    };
  
    const submitForm = e => {
      e.preventDefault();
      props.addNewMember(member);
      setMember({name: "", email: "", role: ""})
      console.log(e.target.name);
    }
  
    return(
    <form onSubmit={submitForm}>
      <label htmlFor="name">Members Name</label>
      <input 
      id="member_name" 
      type="text" 
      name="name"
      onChange={handleChanges}
      value={member.name}
      />
      <label htmlFor="submit">Members Email</label>
      <input 
      id="member_email" 
      type="text"
      name="email"
      onChange={handleChanges}
      value={member.email}
      />
      <label htmlFor="submit">Members Role</label>
      <input 
      id="member_role" 
      type="text"
      name="role"
      onChange={handleChanges}
      value={member.role}
      />
      <button type="submit">Submit Member</button>
    </form>
    )
  };
  
  export default Form;