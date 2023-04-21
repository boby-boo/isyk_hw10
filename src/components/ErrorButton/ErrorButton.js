import React, { useState } from "react";
import style from './ErrorButton.module.css';
import img from './error.png'

const ErrorButton = () => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true)
    }
    
    if (error) {
        return new Error('ERROR! YOUR APP IS CRUSH')
    }

    return (
        <div className={style.errorInner}>
            <button className={style.errorButton} onClick={handleError}>
                Create Error!
                <img src={img} alt='error image' />
            </button>
        </div>
    )
}

export default ErrorButton;