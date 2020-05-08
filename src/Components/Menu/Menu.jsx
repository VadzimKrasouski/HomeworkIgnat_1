import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";


class Menu extends React.Component {

    state = {
        isHidden: true,
    }

    onButtonClick = () => {
        this.setState({isHidden: !this.state.isHidden})
    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }


    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.setState({isHidden: true})
    }


    render() {

        let classActive = this.state.isHidden === true ?
            styles.menu : styles.menu + " " + styles.menuActive;
        let classActiveBtn1 = this.state.isHidden === true ?
            styles.bar1 : styles.changeBar1;
        let classActiveBtn2 = this.state.isHidden === true ?
            styles.bar2 : styles.changeBar2;
        let classActiveBtn3 = this.state.isHidden === true ?
            styles.bar3 : styles.changeBar3;

        return (
            <div className={classActive} ref={node => this.node = node}>
                <div className={styles.menuBtn} onClick={this.onButtonClick}>
                    <div className={classActiveBtn1}/>
                    <div className={classActiveBtn2}/>
                    <div className={classActiveBtn3}/>
                </div>
                <nav className={styles.menuList}>
                    <NavLink to='/monday' activeClassName={styles.active}>Monday</NavLink>
                    <NavLink to='/tuesday' activeClassName={styles.active}>Tuesday</NavLink>
                </nav>
            </div>
        );
    }
}

export default Menu;

