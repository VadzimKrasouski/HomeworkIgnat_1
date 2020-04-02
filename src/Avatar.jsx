import React from 'react';
import './App.css';
import avatar from "./img/react.jpeg"

class Avatar extends React.Component {
    render = () => {
        return (
            <div>
                <img src={avatar} alt="avatar" className="avatar"/>
            </div>
        );
    }
}

export default Avatar;
