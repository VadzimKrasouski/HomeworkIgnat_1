import React from 'react';
import styles from'./App.module.css';
import Message from "./Message";

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Message/>
        </div>);
};

export default App;
