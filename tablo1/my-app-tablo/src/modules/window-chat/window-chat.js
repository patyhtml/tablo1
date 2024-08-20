import React, { useState } from 'react';
import './window-chat.css';
import AwatarChatPNG from './../../assets/img/awatar-chat.png';
import { ReactComponent as ExpandButtonDefaultSVG } from './../../assets/img/expand-button-default.svg';

export const WindowChat = ({ props }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="window-chat">
            <div className="win-project-info">
                <img src={AwatarChatPNG} alt="Awatar Chat" />
                <h3 className="win-project-title">{props.title}</h3>
                <span className="win-project-time">{props.time}</span>
                <button className="expand-button" onClick={toggleExpand}>
                    <ExpandButtonDefaultSVG className="svg-expand-button-default" />
                </button>
            </div>
            <p className={`win-project-description ${isExpanded ? 'expanded' : ''}`} id="project-description" contentEditable>
                {props.description}
            </p>
        </div>
    );
};

export default WindowChat;
