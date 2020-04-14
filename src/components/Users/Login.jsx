import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginError from './LoginError';

class Login extends Component {

    state = {
        username: "",
        password: "",
        loginError: false,
        loginErrorMessage: "Test"
    }

    handleLoginForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    this.setState({ 'loginError': true, 'loginErrorMessage': data.error });
                } else {
                    localStorage.token = `Bearer: ${data}`;
                    this.props.history.push('/home');
                }
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <>
                {this.state.loginError ? <LoginError message={this.state.loginErrorMessage} /> : null}
                <div id="login">
                    <div className="login-card">
                        <div className="card-title">
                            <h1 className="is-size-4 has-text-weight-bold">Please log in</h1>
                        </div>
                        <div className="login-content">
                            <form onSubmit={this.handleLoginForm}>
                                <input className="username" name="username" value={this.state.username} onChange={this.handleChange} type="text" title="username" placeholder="Username" />
                                <input className="password" type="password" title="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                <button type="submit" className="btn btn-primary">Log in!</button>
                                <div className="options">
                                    <p>Need an account? <Link to={{ pathname: "/signup" }}>Sign up!</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login