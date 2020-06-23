import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/fan-actions';

const LoginForm = props => {
  const [fan, setFan] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => { 
    setFan({
      ...fan,
      [e.target.name]: e.target.value,
      [props.fan]: fan
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(fan, props);
  };

  return (
    <div className="login-box-background">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="fan-box">
            <input 
              type="text"
              name="username"
              placeholder="Username"
              value={fan.username}
              onChange={handleChange}
            />
            <label>Username</label>
          </div>
          <div className="fan-box">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              value={fan.password}
              onChange={handleChange} 
            />
            <label>Password</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <p className="no-account">No Account?
          <Link to="/register" className="no-account-link">Create One</Link>
        </p>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn,
    fan: state.fan
  };
}

export default connect(mapStatetoProps, { login })(LoginForm);