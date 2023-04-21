import React, { useState } from "react";
import style from "./Main.module.css";
import ErrorButton from "../ErrorButton/ErrorButton";

const Main = () => {
    return (
    <div>
        <h1>Main page</h1>
        <ErrorButton />
    </div>
    );
};

export default Main;
