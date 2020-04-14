import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {

    renderPosts = () => {
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <Link className="is-size-4 has-text-weight-bold has-text-primary" to={{ pathname: `/post/${post.id}`, state: { user: this.props.user } }}>{post.title}</Link>
                    <p className="is-size-7 has-text-weight-light">By {post.username}</p>
                    <p>{post.body}</p>
                    <hr />
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostList;