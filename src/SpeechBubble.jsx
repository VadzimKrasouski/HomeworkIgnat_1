import React from 'react';
import styles from './SpeechBubble.module.css'

const SpeechBubble = () => {
    return (
        <div className={styles.speechBubble}>
            <p className={styles.name}><strong>Вадим Красовский</strong></p>
            <p>Привет. JavaScript - это маленькая Java?</p>
            <p className={styles.time}>{new Date().toLocaleTimeString('ru-Ru', {hour: '2-digit', minute: '2-digit'})}</p>
        </div>
    );
};

export default SpeechBubble;
