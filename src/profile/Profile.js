import React from 'react'

const profile = ({name,profession,bio}) => {
    return (
        <div>
            <h1>{name}</h1>
           <h3>{profession}</h3>
           <p>{bio}</p>
        </div>
    )
}

export default profile
