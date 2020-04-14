import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import PostList from '../PostList/PostList';

class Home extends Component {
    state = {
        currentUser: {
            id: "",
            username: "",
            email: ""
        },
        posts: []
    }

    componentDidMount() {
        if (!localStorage.token) {
            this.props.history.push('/')
        } else {
            this.getUser();
        }
    }

    getUser = async () => {
        if (localStorage.token) {
            await fetch('http://localhost:3000/users/profile', {
                method: "POST",
                headers: {
                    'Authorization': localStorage.token
                }
            })
                .then(resp => resp.json())
                .then(data => this.setState({ currentUser: { id: data.user_id, username: data.username, email: data.email } }));
            fetch(`http://localhost:3000/posts`)
                .then(resp => resp.json())
                .then(posts => this.setState({ posts: posts }));
        }
    }

    render() {

        return (
            <div>
                <NavBar history={this.props.history} user={this.state.currentUser} />
                <section className="section">
                    <div className="container box content">
                        <div className="columns">
                            <div className="column is-full has-background-white">
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">Latest posts</h1>
                                <PostList user={this.state.currentUser} posts={this.state.posts} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
