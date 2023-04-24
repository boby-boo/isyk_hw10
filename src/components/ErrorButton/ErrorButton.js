import React, { useState } from "react";
import style from './ErrorButton.module.css';
import img from '../../assets/images/errorButton.png'

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
                <img src={img} alt='error' />
            </button>
        </div>
    )
}

export default ErrorButton;