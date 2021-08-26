import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const {name, username, email, phone, website} = user;

  const onInputChange = e => {
    setUser({...user,[e.target.name]:e.target.value});
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/")
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  }

  return (
<div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add a User</h2>
          <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <input 
            type="text" 
            className="form-control form-control-lg"
            name="name"
            value={name}
            onChange={e => onInputChange(e)} 
            placeholder="Enter Your Name" 
            />
          </div>
        <div className="form-group">
          <input 
            type="email" 
            className="form-control form-control-lg"
            name="email"
            value={email}
            onChange={e => onInputChange(e)} 
            placeholder="Enter Email" 
            />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control form-control-lg"
            name="username"
            value={username}
            onChange={e => onInputChange(e)} 
            placeholder="Enter User Name" 
            />
        </div>
          <div className="form-group">
            <input 
            type="text" 
            className="form-control form-control-lg"
            name="phone"
            value={phone}
            onChange={e => onInputChange(e)} 
            placeholder="Enter Your Phone Number"
            // placeholder="col-form-label-lg" 
            />
          </div>
          <div className="form-group">
            <input 
            type="text" 
            className="form-control form-control-lg"
            name="website"
            value={website}
            onChange={e => onInputChange(e)} 
            placeholder="Enter Your Website"
            // placeholder="col-form-label-lg" 
            />
          </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Add User</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default EditUser;
