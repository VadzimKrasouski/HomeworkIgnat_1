import React from 'react';
import Avatar from "./Avatar";
import SpeechBubble from "./SpeechBubble";
import styles from "./Message.module.css";

const Message = () => {
    return (
        <div className={styles.container}>
            <Avatar/>
            <SpeechBubble/>
        </div>
    );
};


export default Message;
