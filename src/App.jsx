import React from 'react';
import styles from './App.module.css';
import Message from "./Components/SpeachBubble/Message";
import Qualities from "./Components/Qualities/Qualities";
import Greeting from "./Components/Greeting/Greeting";

const App = () => {
    let qualities = ['рационалист', 'коммуннист', 'анимешник'];
    // let qualities = [
    //     {
    //         title: 'aaa',
    //         id: 1
    //     },
    //     {
    //         title: 'abbbaa',
    //         id: 2
    //     }
    // ];
    return (
        <div className={styles.wrapper}>
            <Message />
            <Qualities qualitits={qualities}/>
            <Greeting/>
        </div>);
};

export default App;
