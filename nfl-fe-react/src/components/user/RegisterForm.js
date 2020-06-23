import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerFan } from '../../actions/fan-actions';
import { Link } from 'react-router-dom';

const RegisterForm = props => {
    const [fan, setFan] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "", 
        city: "",
        state: ""
    });

    const handleChange = e => { 
        setFan({
            ...fan,
            [e.target.name]: e.target.value
        });
    };

    // might have to add props to make this work
    const handleSubmit = e => {
        e.preventDefault();
        props.registerFan(fan, props);
    };

    return (
        <div className="register-box">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

                <div className="fan-box">
                    <input 
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={fan.first_name}
                        onChange={handleChange}
                    />
                    <label>First Name</label>
                </div>

                <div className="fan-box">
                    <input 
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={fan.last_name}
                        onChange={handleChange}
                    />
                    <label>Last Name</label>
                </div>

                <div className="fan-box">
                    <input 
                        type="text"
                        placeholder="City"
                        name="city"
                        value={fan.city}
                        onChange={handleChange}
                    />
                    <label>City</label>
                </div>

                <div className="fan-box">
                    <input 
                        type="text"
                        placeholder="State"
                        name="state"
                        value={fan.state}
                        onChange={handleChange}
                    />
                    <label>State</label>
                </div>

                <div className="fan-box">
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={fan.email}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                </div>

                <div className="fan-box">
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={fan.username}
                        onChange={handleChange}
                    />
                    <label>Username</label>
                </div>

                <div className="fan-box">
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={fan.password}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                </div>

                <button className="register-button">Register</button>
            </form>

            <p className="no-account">Have an Account?
                <Link to="/login" className="no-account-link">Sign In</Link>
            </p>
        </div>
    )
}

export default connect(null, { registerFan })(RegisterForm);