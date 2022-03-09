import './App.css';

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Header from './layout/Header';
import List from './core/users/List';

function App() {

  const color = "black"

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data))
  }, [])

  const updateHandler = (id, data) => {
    const new_users = users.map(user => {
      if (user.id === id) {
        return { ...user, ...data }
      }
      return user
    })
    setUsers(new_users)
  }

  return (
    <div>
      <Header
        {...{ 
          color,
          version: '1.0.2'
        }}
      /> 
      <List users={users} updateHandler={updateHandler} />
    </div>
  );
}

export default App;
