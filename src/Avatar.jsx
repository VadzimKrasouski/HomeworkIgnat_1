import React from 'react';
import avatar from "./img/react.jpeg"
import styles from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={avatar} alt="avatar"/>
        </div>
    );
};

export default Avatar;
