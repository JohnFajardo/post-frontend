import React, { Component } from 'react'

class NotFound extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <div className="container box content">
                        <div className="columns">
                            <div className="column is-full has-background-white">
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">Adding new post</h1>
                                <p>😭</p>
                                <span role="img" aria-label="crying">😭</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NotFound;