import React, { useState } from "react";
import style from './Contacts.module.css';
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Contacts = () => {

    return (
        <ErrorBoundary>
            <div>
                <h1>Contacts page</h1>
                <ErrorButton />
            </div>
        </ErrorBoundary>
    )
}

export default Contacts;
