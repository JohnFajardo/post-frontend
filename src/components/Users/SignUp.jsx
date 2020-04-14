import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SignUp extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'Accept': 'Application/Json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    this.props.history.push('/login');
                }
            });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div id="login">
                <div className="login-card">
                    <div className="card-title">
                        <h1 className="is-size-4 has-text-weight-bold">Please sign up</h1>
                    </div>
                    <div className="login-content">
                        <form onSubmit={this.handleSubmit}>
                            <input className="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                            <input className="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="email" />
                            <input className="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
                            <button type="submit" className="btn btn-primary btn btn-link">Sign up!</button>
                            <div className="options">
                                <p>Have an account? <Link className="btn btn-link" to={{ pathname: "/" }}>log in!!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default SignUp
