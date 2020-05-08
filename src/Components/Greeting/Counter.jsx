import React from 'react';
import styles from './Counter.module.css';

class Counter extends React.Component {

    render() {
        return (
            <div className={styles.counter}>
                <span>{this.props.counter}</span>
            </div>
        )
    }
}

export default Counter;