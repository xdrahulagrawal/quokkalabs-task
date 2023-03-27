import React from 'react'
import '../assests/styles/index.css'
function InputField(props) {
    return (
        <input
            className='input-filed'
            autoComplete="off"
            {...props}
        />
    )
}

export default InputField