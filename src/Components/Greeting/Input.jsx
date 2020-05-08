import React from 'react';
import styles from './Input.module.css';
import Button from "./Button";

class Input extends React.Component {

    state = {
        error: false,
        text: "",
    }

    onAddTaskClick = () => {
        let newText = this.state.text;
        this.setState({text: ""});

        if (newText === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            this.props.addMember(newText);
        }
    }


    onTextChanged = (e) => {
        this.setState({
            error: false,
            text: e.currentTarget.value})
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }
    }

    render() {

        let classNameForInput = this.state.error ? styles.error : "";

        return (
            <div className={styles.input}>
                <div>
                    <input className={classNameForInput}
                           onChange={this.onTextChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.text} type='text'/>
                </div>
                <Button onAddTaskClick={this.onAddTaskClick}/>
            </div>
        )
    }
}

export default Input;