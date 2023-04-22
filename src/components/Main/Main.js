import React, { useState } from "react";
import style from "./Main.module.css";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Main = () => {
    return (
        <ErrorBoundary>
            <div>
                <h1>Main page</h1>
                <ErrorButton />
            </div>
        </ErrorBoundary>
    );
};

export default Main;
