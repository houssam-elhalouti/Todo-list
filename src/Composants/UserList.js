import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {DeleteUserAction} from '../Store/action';

export default function UserList() {

  const users = useSelector(data=>data.users)
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(DeleteUserAction(id))
  }
  return (
    <div>
        <h1 className='text-center text-secondary mt-3'>CRUD REACT-REDUX Example 1 :</h1>
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
          
          <div className="w-75 rounded bg-white border shadow p-4 ">
            <div className="d-flex justify-content-end">
            <Link to='/add' className='btn btn-sm btn-success'>Add +</Link>
            </div>
             
                  <table className='table table-bordered'>
                    <caption>List of Users</caption>
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Email</th>
                              
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {users.map((user, index) => (
                              <tr key={index}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  
                                  <td>
                                      <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary me-3'>Update</Link>
                                      <button to="" className='btn btn-sm btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
          </div>
      </div>
    </div>
  )
}
