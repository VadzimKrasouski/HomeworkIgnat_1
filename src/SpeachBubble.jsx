import React from 'react';
import './App.css';

class SpeachBubble extends React.Component {
    render = () => {
        return (
            <div className="speech-bubble">
                <p className={"name"}><strong>Вадим Красовский</strong></p>
                <p>Привет. JavaScript - это маленькая Java?</p>
                <p className={"time"}>{new Date().toLocaleTimeString('ru-Ru', {hour: '2-digit', minute: '2-digit'})}</p>
            </div>
        );
    }
}

export default SpeachBubble;
