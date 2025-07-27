import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'; // ✅
import { login } from '../../features/auth/authSlice'; // ✅

import './LoginForm.css';

import GoogleIcon from '../../assets/icon/google.svg';
import FacebookIcon from '../../assets/icon/facebook.svg';
import LinkedinIcon from '../../assets/icon/linkedin.svg';
import TwitterIcon from '../../assets/icon/twitter.svg';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

const handleSignIn = (e) => {
  e.preventDefault();

  if (!username.trim()) {
    toast.error('Username or email is required');
    return;
  }

  // ✅ Email validation (if input looks like an email)
const trimmedUsername = username.trim();
const isEmail = trimmedUsername.includes('@');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!trimmedUsername) {
  toast.error('Username or email is required');
  return;
}

if (isEmail && !emailRegex.test(trimmedUsername)) {
  toast.error('Please enter a valid email address');
  return;
}


  // ✅ Password validation
  if (!validatePassword(password)) {
    toast.error(
      'Password must be at least 8 characters long and contain at least 1 capital letter, 1 number, and 1 symbol.'
    );
    return;
  }

  dispatch(login());
  toast.success('Signed in successfully!');
  navigate('/home');
};



  return (
    <div className="form-section">
      <div className="form-inner">
        <h2 className="form-title">Sign In</h2>
        <p className="new-user">
          New user? <a href="#">Create an account</a>
        </p>

        <input
          type="text"
          placeholder="Username or email"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="checkbox-row">
          <input type="checkbox" id="keep-signed-in" />
          <label htmlFor="keep-signed-in">Keep me signed in</label>
        </div>

        <button className="sign-in-btn small-height" onClick={handleSignIn}>
          Sign In
        </button>

        <div className="divider">
          <hr />
          <span>Or Sign In With</span>
          <hr />
        </div>

        <div className="social-icons">
          <div className="icon-circle"><img src={GoogleIcon} alt="Google" /></div>
          <div className="icon-circle"><img src={FacebookIcon} alt="Facebook" /></div>
          <div className="icon-circle"><img src={LinkedinIcon} alt="LinkedIn" /></div>
          <div className="icon-circle"><img src={TwitterIcon} alt="Twitter" /></div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
