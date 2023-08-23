import React, { useState } from 'react';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='container'>
     <div className="w-75 mx-auto shadow p-5">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      </div>
      <br/>
      <div className="form-group">
      <input
        type="password"
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
