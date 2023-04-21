import React from "react";
import style from "./PrivateRoute.module.css";
import ErrorButton from "../ErrorButton/ErrorButton";

const PrivateRoute = () => {
    return (
        <>
            <h1>Private route page</h1>
            <ErrorButton />
        </>
    )
}

export default PrivateRoute;