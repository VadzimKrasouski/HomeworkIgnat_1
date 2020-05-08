import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";


const Menu = () => {

    return (
        <div className={styles.menu}>
        <div className={styles.menu_btn}>
            <nav className={styles.nav}>
                <NavLink to='/monday' activeClassName={styles.active}>Monday</NavLink>
                <NavLink to='/tuesday' activeClassName={styles.active}>Tuesday</NavLink>
            </nav>
        </div>
        </div>);
};

export default Menu;