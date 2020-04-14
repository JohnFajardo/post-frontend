import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'

class NewPost extends Component {


    state = {
        user_id: this.props.location.state.user.id,
        title: '',
        body: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        await fetch('http://localhost:3000/posts/new', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(this.state)
        }).then(resp => resp.json())
            .then(this.props.history.push('/home'));
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.setState({ title: '', body: '' })
    }

    render() {
        return (
            <div>
                <NavBar history={this.props.history} user={this.props.history.location.state.user} />
                <section className="section">
                    <div className="container box content">
                        <div className="columns">
                            <div className="column is-full has-background-white">
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">Adding a new post</h1>
                                <form onSubmit={this.handleSubmit}>

                                    <div className="field">
                                        <label className="label">Post title</label>
                                        <div className="control">
                                            <input className="input" name="title" value={this.state.title} onChange={this.handleChange} type="text" placeholder="Text input" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Post contents</label>
                                        <div className="control">
                                            <textarea className="textarea" name="body" value={this.state.body} onChange={this.handleChange} placeholder="Your post content..."></textarea>
                                        </div>
                                        <div className="field">
                                            <div className="control is-pulled-right buttons">
                                                <button className="button is-danger is-light cancel postButton" onClick={this.handleCancel}>Cancel</button>
                                                <button className="button is-primary postButton">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NewPost
