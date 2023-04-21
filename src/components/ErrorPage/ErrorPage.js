import React from "react";
import img from './error.gif';

const ErrorMessage = () => {

    const styleText = {
        marginBottom: '60px',
        textTransform: 'uppercase',
        fontSize: '50px'
    }

    return (
        <div style={{margin: '0 auto', textAlign: 'center'}}>
            <h1 style={styleText}> Something went  <span style={{color: '#bd1d38'}}>wrong</span></h1>
            <img src={img} style={{width: '200px'}} alt='error message'/>
        </div>
    )
}

export default ErrorMessage;