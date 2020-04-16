import React from 'react';
import styles from'./App.module.css';
import Message from "./Message";
import Qualities from "./Qualities";
import Greeting from "./Greeting";

const App = () => {
    let qualities = ['рационалист', 'коммуннист', 'анимешник'];
    // let qualities = [
    //     {
    //         title: 'aaa',
    //         active: false
    //     },
    //     {
    //         title: 'abbbaa',
    //         active: true
    //     }
    // ];
    return (
        <div className={styles.wrapper}>
            <Message/>
            <Qualities qualitits={qualities}/>
            <Greeting/>


        </div>);
};

export default App;
