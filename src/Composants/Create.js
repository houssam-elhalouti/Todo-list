import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {CreateUserAction} from '../Store/action'
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const Navigate = useNavigate();
  const count = useSelector(data=>data.users.length);
  const dispatch = useDispatch();
  const [name, setName]= useState();
  const [email, setEmail]= useState();

  const handleClick = () => {
    dispatch(CreateUserAction(
      {
        id:count+1,
        name:name,
        email:email,
      }
    ))
    Navigate("/")
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className=" w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1 className='text-center'>Add User</h1>
          <form action="" >
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input type="text" name='name'className='form-control'placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
               
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input type="email" name='email'className='form-control'placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            
            <button className='btn btn-sm btn-success' onClick={handleClick}>Add</button>
            <Link to="/" className='btn btn-sm btn-primary ms-3'>Back</Link>
          </form>
      </div>
      </div>
  )
}
