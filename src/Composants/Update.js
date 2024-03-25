import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {UpdateUserAction} from '../Store/action'
import { useNavigate } from 'react-router-dom'

export default function Update() {
  const {id} = useParams();
  const Navigate = useNavigate();
  const user = useSelector(data=>data.users.find((u)=>u.id===parseInt(id)));
  const dispatch = useDispatch();
  const [name, setName]= useState(user.name);
  const [email, setEmail]= useState(user.email);

  const handleClick = () => {
    dispatch(UpdateUserAction(
      {
        id:id,
        name:name,
        email:email,
      }
    ))
    Navigate("/")
  }
  
  
    return (
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className=" w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1 className='text-center'>Update User</h1>
            <form action="" >
              <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input type="text" name='name'className='form-control'placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                 
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input type="email" name='email'className='form-control'placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              
              <button className='btn btn-sm btn-info' onClick={handleClick}>Update</button>
              <Link to="/" className='btn btn-sm btn-primary ms-3'>Back</Link>
            </form>
        </div>
        </div>
    )
  
}
