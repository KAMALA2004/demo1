import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate for React Router v6

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = { username, password };
    
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server Response:', data);  // Log server response

        if (data.success) {
          alert('Login successful');
          navigate('/dashboard');  // Navigate to the dashboard page on success
        } else {
          alert(data.message);  // Show error message if login fails
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during login');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
