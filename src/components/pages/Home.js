import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers ] = useState([]);

  useEffect(() => {
    loadUser()
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  }

  return (
    <div className="container">
      <div className="py-4">
      <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, index) => (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link className="btn btn-primary m-2" to={`/user/${user.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link>
          <Link to={`/edit/user/${user.id}`} className="btn btn-primary m-2"><i className="fas fa-edit"></i></Link>
          <Link onClick={() => deleteUser(user.id)} className="btn btn-danger m-2"><i className="fa fa-trash" aria-hidden="true"></i></Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Home;
