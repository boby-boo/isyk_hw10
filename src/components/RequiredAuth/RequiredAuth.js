import React, { useState } from "react";
import style from "./RequiredAuth.module.css";

const RequiredAuth = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    if(!isAuth) {
        return (
            <div>
                <h1 className={style.title}>You are <span>18 years</span> old?</h1>
                <div className={style.buttons}>
                    <button className={`${style.buttonGreen} ${style.requiredAuthBtn}`} onClick={() => setIsAuth(true)}>
                        Yes
                    </button>
                    <button className={`${style.buttonRed} ${style.requiredAuthBtn}`} onClick={() => window.history.back()}>
                        No
                    </button>
                </div>
            </div>
        )
    }

    return children
}

export default RequiredAuth;
