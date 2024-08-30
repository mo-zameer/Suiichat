import React from 'react'
import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        process.env.REACT_APP_AUTH_URL,
        {username:value}
      )
      .then(r=> props.onAuth({ ...r.data, secret: value }))
      .catch(e=> console.log('error',e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;