import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const AdminPage = () => {
  const [users, setUsers] = useState([]);


  // Lấy danh sách người dùng khi component được tải
  useEffect(() => {
    fetchUsers();
  }, []);


  // Hàm lấy dữ liệu người dùng từ API
  const fetchUsers = () => {
    fetch('http://localhost:3000/api/admin')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          
          <p class="navbar-brand">Hello Admin {users.fullname}</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/admin">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" to="/adminListUser"> ListUser</Link>
            </li>
  
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          
          <Link to="/logout"> Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminPage;
