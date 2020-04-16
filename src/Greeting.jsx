import React from 'react';
import styles from './Greeting.module.css';

class Greeting extends React.Component {
    newNameRef = React.createRef();

    state = {
        names: []
    }

    counter = 0;

    onAddClick = () => {
        let newText = this.newNameRef.current.value;

        this.counter++;

        let newName = {
            name: newText,
        };

        let newNames = [...this.state.names, newName];
        this.setState({names: newNames});
        alert("What's up, " + newText + "!");
        this.newNameRef.current.value = '';
    };



    render() {
        let listOfPeople = this.state.names.map((t) => {
            return <div>{t.name}</div>
        });

        return (
            <div className={styles.greeting}>
                <span className={styles.counter}>{this.counter}</span>
                <input ref={this.newNameRef} type='text'/>
                <button onClick={this.onAddClick}>Greeting</button>
                <div className={styles.people}>{listOfPeople}</div>
            </div>);
    }
}

export default Greeting;
