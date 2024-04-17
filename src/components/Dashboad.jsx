import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
import "./Dashboard.css"
import img from "../assets/login.png"

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [editableRowIndex, setEditableRowIndex] = useState(null);

  useEffect(() => {
    const registeredUsers = JSON.parse(sessionStorage.getItem('userData')) || [];
    setUserData(registeredUsers);
  }, []);
  const handleClick=()=>{
    // alert("logging out")
    window.location.href = "/signIn";
  }
  const handleDelete = (index) => {
    const updatedData = [...userData];
    updatedData.splice(index, 1);
    sessionStorage.setItem('userData', JSON.stringify(updatedData));
    setUserData(updatedData);
  };

  const handleUpdate = (index) => {
    setEditableRowIndex(index);
  };

  const handleSave = (index) => {
    setEditableRowIndex(null);
    // Implement save logic here if needed
  };

 
  const handleInputChange = (e, index, key) => {
    const updatedData = [...userData];
    updatedData[index][key] = e.target.value;
    setUserData(updatedData);
  };

  return (
    <div className='cont'>
      {/* <Navbar /> */}
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="dashboard-container">
        <h1>Registered Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => handleInputChange(e, index, 'name')}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      value={user.phone}
                      onChange={(e) => handleInputChange(e, index, 'phone')}
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      value={user.email}
                      onChange={(e) => handleInputChange(e, index, 'email')}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      value={user.user}
                      onChange={(e) => handleInputChange(e, index, 'user')}
                    />
                  ) : (
                    user.user
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <button onClick={() => handleSave(index)}>Save</button>
                  ) : (
                    <button onClick={() => handleUpdate(index)}>Update</button>
                  )}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={()=> handleClick()} >Log Out</button>
      </div>
     
    </div>
  );
}

export default Dashboard;
