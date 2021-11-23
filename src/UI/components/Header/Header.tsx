import React, {useState} from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../Routing";

function Header() {

    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const toggle = () => {
        setActiveMenu(!activeMenu)
    }
    // @ts-ignore
    const setActive = ({ isActive }) =>(isActive ? style.active : style.menuLinks);

    return (
        <div className={style.menuWrapper}>
            <div className={style.burgerMenu} onClick={toggle}>&#9776;</div>
            <div className={`${style.containerMenuLinks} ${activeMenu && style.activeMenu}`}>
                <NavLink to={PATH.MAIN}  className={setActive}> Main</NavLink>
                <NavLink to={PATH.EMPLOYEES}  className={setActive}> Employees</NavLink>
            </div>
        </div>
    );
}

export default Header;