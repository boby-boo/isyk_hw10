import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <Link to='/main'>
                <Logo/>
            </Link>
            <nav>
                <ul className={style.headerMenu}>
                    <li>
                        <NavLink to='/main'>
                            Main page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts'>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/private'>
                            Private route
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
