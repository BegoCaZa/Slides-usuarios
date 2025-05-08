import { useState } from 'react';
import { USERS } from './constants/users-info';

const App = () => {
  const [position, setPosition] = useState(0);
  return (
    <div>
      <img src={USERS[position].profileImage} />
      <h2>Name:{USERS[position].name}</h2>
      <p>UserName:{USERS[position].username}</p>
      <p>Email:{USERS[position].email}</p>
      <div>
        <button
          disabled={position === 0}
          onClick={() => previousUser(position, setPosition)}
        >
          Previous
        </button>
        <button
          disabled={position === USERS.length - 1}
          onClick={() => nextUser(position, setPosition)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
const nextUser = (position, setPosition) => {
  if (position < USERS.length - 1) {
    //hasta que la posicion no llegue al último usurio
    setPosition(position + 1);
  }
};

const previousUser = (position, setPosition) => {
  if (position > 0) {
    //mientras la posicion no sea 0
    setPosition(position - 1);
  }
};

export default App;
