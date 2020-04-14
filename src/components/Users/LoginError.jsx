import React from 'react'

export default function LoginError(props) {
    return (

        <div className="flash">
            <div class="notification is-danger is-light">
                <p>{props.message}</p>
            </div>
        </div>
    )
}
