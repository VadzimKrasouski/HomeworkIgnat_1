import React from 'react';
import Avatar from "./Avatar";
import SpeachBubble from "./SpeachBubble";

class Message extends React.Component {
    render = () => {
        return (
            <div className={"wrapper"}>
                <Avatar/>
                <SpeachBubble/>
            </div>
        );
    }
}

export default Message;
