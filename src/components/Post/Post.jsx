import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm'

class Post extends Component {

    state = {
        post: {
            title: '',
            body: ''
        },
        comments: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(post => this.setState({ post: { title: post.title, body: post.body } }));
        fetch(`http://localhost:3000/comments/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(comments => this.setState({ comments: comments }));
    }

    showComments = () => {
        return this.state.comments.map(comment => {
            return <Comments key={comment.id ? comment.id : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            } user={comment.username} body={comment.body} />
        });
    }

    addToComments = (user, body) => {

        fetch(`http://localhost:3000/comments/`, {
            method: 'POST',
            headers: {
                'Accept': 'Application/Json',
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify({ postId: `${this.props.match.params.id}`, userId: `${this.props.history.location.state.user.id}`, body: body })
        }).then(response => response.json());
        this.setState({ comments: [...this.state.comments, { 'username': user, 'body': body }] })
    }

    render() {
        return (
            <div>
                <NavBar history={this.props.history} user={this.props.history.location.state.user} />
                <section className="section">
                    <div className="container box content">
                        <div className="columns">
                            <div className="column is-full has-background-white">
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">{this.state.post.title}</h1>
                                <p>{this.state.post.body}</p>
                                <hr />
                                {this.showComments()}
                                <hr />
                                <CommentForm addToComments={this.addToComments} user={`${this.props.history.location.state.user.username}`} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Post