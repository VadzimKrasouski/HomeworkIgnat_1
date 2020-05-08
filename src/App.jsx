import React from 'react';
import styles from './App.module.css';
import Menu from "./Components/Menu/Menu";
import Main from "./Components/Main/Main";

const App = () => {

    return (
        <div className={styles.wrapper}>
            <Menu/>
            <Main/>
        </div>
    );
};

export default App;
