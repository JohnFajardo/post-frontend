import React, { Component } from 'react'

class Comments extends Component {
    render() {
        return (
            <div className="has-background-light comment">
                <p className="commenter"><strong>{this.props.user}</strong> says:</p >
                <p>{this.props.body}</p>
            </div >
        )
    }
}

export default Comments;