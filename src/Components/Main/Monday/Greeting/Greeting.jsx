import React from 'react';
import styles from './Greeting.module.css';
import ListOfMembers from "./ListOfMembers";
import Input from "./Input";
import Counter from "./Counter";


class Greeting extends React.Component {

    state = {
        names: [],
        nextNameId: 0,
    }

    addMember = (text) => {

        this.setState({ nextNameId: this.state.nextNameId + 1});

        let newName = {
            id: this.state.nextNameId,
            name: text,
        };

        let newNames = [...this.state.names, newName];
        this.setState({names: newNames});
        // alert("What's up, " + newName.name + "!");
    };

    eraseAllMembers = () => {
        this.setState({names: [], nextNameId: 0})
    }

    render() {
        return (
            <div className={styles.greeting}>
                <Counter counter={this.state.nextNameId}/>
                <Input addMember={this.addMember}/>
                <ListOfMembers state={this.state} eraseAllMembers={this.eraseAllMembers}/>
            </div>
        );
    }
}

export default Greeting;




