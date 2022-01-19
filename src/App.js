import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
import UsersForm from './component/UsersForm';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers]= useState([])
  const [usersSeleted, setUsersSeleted]= useState(null)     

    useEffect(() => {
         axios.get(`https://users-crud1.herokuapp.com/users/`)
              .then((res)=>setUsers(res.data))          
    }, [])


  const getUsers = () =>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
         .then((res)=>setUsers(res.data))
}

const selectUsers = (user) => setUsersSeleted(user);
const deleteUsers = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
         .then(()=>getUsers());
};
const deselectUsers = () => setUsersSeleted (null);


  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        usersSeleted={usersSeleted}
        deselectUsers={deselectUsers}
      />
      <UserList
       users={users}
       selectUsers={selectUsers}
       deleteUsers={deleteUsers}
       />
    </div>
  );
}

export default App;
