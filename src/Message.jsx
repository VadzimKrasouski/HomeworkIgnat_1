import React from 'react';
import './App.css';
import avatar from "./img/react.jpeg"

class Message extends React.Component {
    render = () => {
        return (
            <div className={"wrapper"}>
                <div>
                    <img src={avatar} alt="avatar" className="avatar"/>
                </div>
                <div className="speech-bubble">
                    <p className={"name"}><strong>Вадим Красовский</strong></p>
                    <p>Привет. JavaScript - это маленькая Java?</p>
                    <p className="time">{new Date().toLocaleTimeString('ru-Ru', {hour: '2-digit',minute:'2-digit'})}</p>
                </div>
            </div>
        );
    }
}

export default Message;
