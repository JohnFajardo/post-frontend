import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/');
    }

    user = () => {
        return !this.props.user ? this.props.history.location.state.user : this.props.user;
    }

    handleNewPost = () => {
        this.props.history.push('/post/new', { user: this.user() })
    }

    render() {

        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-start">
                        <p className="navbar-item">
                            <img
                                className="profile-pic"
                                src={`https://www.gravatar.com/avatar/${md5(this.user().email)}`}
                                alt="User profile pic" />
                                Hello {this.user().username}
                        </p>
                    </div>
                    <div className="navbar-center">
                        <p className="home"><Link className="has-text-primary" to="/home">Back to home</Link></p>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button className="button is-primary has-text-weight-bold" onClick={this.handleNewPost}>New Post</button>
                                <button className="button is-primary has-text-weight-bold" onClick={this.handleLogout}>Log out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;