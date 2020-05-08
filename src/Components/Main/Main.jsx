import React from 'react';
import styles from './Main.module.css';
import Monday from "./Monday/Monday";
import Tuesday from "./Tuesday/Tuesday";
import {Route} from "react-router-dom";


const Main = () => {

    return (
        <div className={styles.main}>
           <Route exact path='/' component={Monday}/>
           <Route  path='/monday' component={Monday}/>
           <Route  path='/tuesday' component={Tuesday}/>
        </div>);
};

export default Main;