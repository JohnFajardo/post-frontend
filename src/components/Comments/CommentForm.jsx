import React, { Component } from 'react'

class CommentForm extends Component {
    state = {
        body: '',
        user: ''
    }

    componentDidMount() {
        this.setState({ user: `${this.props.user}` })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addToComments(this.state.user, this.state.body);
        this.setState({ body: '' });
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.setState({ body: '' });
    }

    render() {
        return (
            <div className="commentFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Add your Voice!</label>
                        <div className="control">
                            <textarea className="textarea" name="body" value={this.state.body} onChange={this.handleChange} placeholder="Your comment..."></textarea>
                        </div>
                        <div className="field">
                            <div className="control is-pulled-right">

                                <div className="control is-pulled-right buttons">
                                    <button className="button is-danger is-light cancel commentButton" onClick={this.handleCancel}>Cancel</button>
                                    <button className="button is-primary commentButton">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm
