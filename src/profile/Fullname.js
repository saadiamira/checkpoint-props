import React from 'react'
import './Fullname.css'
const Fullname = ({name}) => {
    console.log(name)
    return (
        <div>
        <h1 className="NAM">{name}</h1>

        </div>
    )
}

export default Fullname
