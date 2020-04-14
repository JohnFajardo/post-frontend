import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'

class NewPost extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} user={this.props.history.location.state.user} />
                <section className="section">
                    <div className="container box content">
                        <div className="columns">
                            <div className="column is-full has-background-white">
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">Adding new post</h1>
                                <p>Hi I'm new post!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NewPost
