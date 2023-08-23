import React, { useState } from 'react';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setError(''); // Clear any previous errors
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error("Login Error:", error); // Log the error object
      setError('Invalid email or password');
    }
  };

  return (
    <div className='container1'>
     <div className="w-75 mx-auto shadow p-5 mt-4">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
      <input
        type="email"
        className="form-control form-control-lg"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      </div>
      <br/>
      <div className="form-group">
      <input
        type="password"
        className="form-control form-control-lg"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      </div>
      <br/>
      <button className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;