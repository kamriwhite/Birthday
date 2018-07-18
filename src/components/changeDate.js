import React from 'react';

const changeDate = (title, callback) => {
    return(
        <button classname="change-date" onClick={callback}>
            <i className="fas fa-calendar-alt"></i>
            {title}
        </button> 
    )
}

export default changeDate;