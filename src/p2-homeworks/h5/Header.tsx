import React from "react";
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior </NavLink>
            </div>
            <div className={s.preJun}>
                <NavLink to={PATH.JUN}>Jun</NavLink>
            </div>
            <div className={s.preJun}>
                <NavLink to={PATH.JUN_PLUS}>Jun+</NavLink>
            </div>
        </div>
    );
}

export default Header;
