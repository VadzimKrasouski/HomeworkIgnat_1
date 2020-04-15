import React from 'react';
import styles from'./Qualities.module.css';

const Qualities = (props) => {


    let qualitiesItem = props.qualitits.map((q,index) => {

        // let activeClass = q.active ? styles.active : styles.default;
        let activeClass = index === 1 ? styles.active : styles.default;

            // return <div className={activeClass}>{q.title}</div>
            return <div className={activeClass}>{q}</div>
    });

    return (
        <div className={styles.qualities}>
            {qualitiesItem}
        </div>);
};

export default Qualities;
