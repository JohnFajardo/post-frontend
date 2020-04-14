import React, { Component } from 'react';
import lost from './lost.gif';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <div className="container box content">
                        <div className="columns">
                            <div className="column is-full has-background-white">
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">Oops! You took a wrong turn!</h1>
                                <div>
                                    <img className="centered-image" src={lost} alt="404 Not found" />
                                    <p className="center"><Link className="has-text-primary is-size-2 has-text-weight-bold" to="/home">Back to home</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NotFound;