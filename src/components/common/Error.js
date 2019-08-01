import React from 'react'

const Error = ( { message } ) => {
    return (
        <p className="text-danger">*{ message }</p>
    )
}

export default Error
