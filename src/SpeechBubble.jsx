import React from 'react';
import styles from './SpeechBubble.module.css'

const SpeechBubble = () => {
    return (
        <div className={styles.speechBubble}>
            <div className={styles.name}>
                <strong>Вадим Красовский</strong>
            </div>
            <div className={styles.message}>Привет. JavaScript - это маленькая Javaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff?</div>
            <div className={styles.time}>
                {new Date().toLocaleTimeString('ru-Ru', {hour: '2-digit', minute: '2-digit'})}
            </div>
        </div>
    );
};

export default SpeechBubble;
