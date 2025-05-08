import {useState} from `react`;

import { useState } from 'react';
import { USERS } from './constants/users-info';

const App = () => {
  const [counter,setCounter]=useState(0);
  return (
    <div>
      <img src={USERS[0].profileImage} />
      <h2>Name:{USERS[0].name}</h2>
      <p>UserName:{USERS[0].username}</p>
      <p>Email:{USERS[0].email}</p>
      <div>
        <button onClick={()=>nextUser(counter,setCounter)}></button>
      </div>
    </div>
  );
};



export default App;
