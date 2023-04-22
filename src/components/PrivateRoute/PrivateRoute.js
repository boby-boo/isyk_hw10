import React from "react";
import style from "./PrivateRoute.module.css";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const PrivateRoute = () => {
    return (
        <ErrorBoundary>
            <h1>Private route page</h1>
            <ErrorButton />
        </ErrorBoundary>
    )
}

export default PrivateRoute;