import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const defaultValues = {first_name: "", last_name: "", email: "", password: "", birthday: ""}

const UsersForm = ({ getUsers, usersSeleted, deselectUsers }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
       if(usersSeleted)
       reset(usersSeleted)
    }, [usersSeleted, reset])

    const submit = user => {
        if(usersSeleted){
        axios.put(`https://users-crud1.herokuapp.com/users/${usersSeleted.id}/`, user)
             .then(()=>{
                getUsers();
                deselectUsers();
             });  
        }else{                  
        axios.post(`https://users-crud1.herokuapp.com/users/`,user)
             .then(()=>getUsers()); 
        }   
        reset(defaultValues);
    }
    
    return (
        <form className='users-form'onSubmit={handleSubmit(submit)}>
            <div className='input-container-general'>
                <h3>New User</h3>
            <div className='input-container'>
                <label htmlFor="first_name"><i className="fas fa-user"></i></label>
                <input
                className='input_part01'
                    type="text"
                    id="first_name"
                    {...register("first_name")}
                  />
                <label htmlFor="last_name"></label>
                <input
                    className='input_part01'
                    type="text"
                    id="last_name"
                    {...register("last_name")}
                  />
            </div>
            <div className='input-container'>
                <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                <input
                className='input_part02'
                    type="email"
                    id="email"
                    {...register("email")}
                  />
            </div>
            <div className='input-container'>
                <label htmlFor="password"><i className="fas fa-lock"></i></label>
                <input
                className='input_part02'
                    type="password"
                    id="password"
                    {...register("password")}
                  />
            </div>
            <div className='input-container'>
                <label htmlFor="birthday"><i className="fas fa-birthday-cake"></i></label>
                <input
                className='input_part02'
                    type="date"
                    id="birthday"
                    {...register("birthday")}
                  />
            </div>
            <div className='button-container'>
                <button className='Upload'>Upload</button>
                <button className='Cancel' type='button' onClick={()=>reset(defaultValues)} >Cancel</button>
            </div>
            </div>
        </form>
    );
};

export default UsersForm;