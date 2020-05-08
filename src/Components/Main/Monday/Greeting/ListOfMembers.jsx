import React from 'react';
import styles from './ListOfMembers.module.css';

class ListOfMembers extends React.Component {

    onEraseClick = () => {
        this.props.eraseAllMembers();
        this.setState({listNotEmpty: false})
    }

    render() {

        let listOfPeople = this.props.state.names.map( t => <div key={t.id}>{t.name}</div> );

        let classStyle = this.props.state.nextNameId === 0 ? styles.hide : null;

        return (
            <div>
                <div className={styles.people}>{listOfPeople}</div>
                <button className={classStyle} onClick={this.onEraseClick}>Erase All</button>
            </div>
        )
    }
}

export default ListOfMembers;