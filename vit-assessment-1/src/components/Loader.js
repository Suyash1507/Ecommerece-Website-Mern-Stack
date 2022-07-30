import React from 'react'

function Loader() {
    return (
        <div>
            <div className="spinner-border mt-5" role="status" style={{width:"100px", height:"100px"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
