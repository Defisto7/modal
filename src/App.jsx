import React, { useState, Fragment } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, seUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    seUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }

  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
