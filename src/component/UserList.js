import React from 'react';
import '../App.css';

const UserList = ({users, selectUsers, deleteUsers}) => {
           
    return (
        <div className='card'>
             {users.map((user) => (
                <ul className='user-item'key={user.id}>
                    <div className='card-part01'>
                        <strong>{user.first_name} {user.last_name}</strong>     
                        <li>{user.email}</li>
                        <li>{user.birthday}</li>
                    </div>
                    <div className='card-part02'>
                        <button className='buttonCard' type='button' onClick={()=>deleteUsers(user.id)}><i className="fas fa-trash-alt"></i></button>
                        <button className='buttonCard' type='button' onClick={()=>selectUsers(user)}><i className="fas fa-pencil-alt"></i></button>
                    </div>
                </ul>
            ))}    
        </div>
    );
};

export default UserList;