import React from 'react';
//import {useState} from 'react';

const Team = props => {
    console.log(props);
    return (
        <>
        {props.members.map(member => (
          <div className="member_list" key={member.id}>
            <h2>{member.name}</h2>
            <h2>{member.email}</h2>
            <h2>{member.role}</h2>
          </div>
        ))}
        </>
    );
  };
  
  export default Team;

