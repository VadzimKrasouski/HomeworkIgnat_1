import React from 'react';
import styles from './Monday.module.css';
import Message from "./SpeachBubble/Message";
import Qualities from "./Qualities/Qualities";
import Greeting from "./Greeting/Greeting";


const Monday = () => {

    let qualities = ['рационалист', 'коммуннист', 'анимешник'];

    return (
        <div className={styles.monday}>
            <Message/>
            <Qualities qualitits={qualities}/>
            <Greeting/>
        </div>
    );
};

export default Monday;