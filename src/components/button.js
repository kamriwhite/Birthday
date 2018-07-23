import React from 'react';

const Button = (title, callback) => {
    return(
        <button key={1} classname="button" onClick={callback}>
            {title}
        </button> 
    )
}

export default Button;