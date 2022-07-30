import React from 'react'

function Error({ error }) {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    )
}

export default Error
