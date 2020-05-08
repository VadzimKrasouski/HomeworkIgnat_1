import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {

    onButtonClick = () => {
        this.props.onAddTaskClick();
    }

    render() {
        return (
            <div className={styles.button}>
                <button onClick={this.onButtonClick}>Greeting</button>
            </div>
        )
    }
}

export default Button;