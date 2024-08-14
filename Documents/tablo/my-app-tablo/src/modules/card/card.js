import React from 'react';
import './card.css';

// import {ReactComponent as ImagePNG} from './../../assets/img/image.png' 
import {ReactComponent as ExpandButtonSVG} from './../../assets/img/expand-button.svg'
import {ReactComponent as CalendarSVG} from './../../assets/img/calendar.svg'
import {ReactComponent as PrioritySVG} from './../../assets/img/priority.svg'
import {ReactComponent as AttachmentSVG} from './../../assets/img/attachment.svg'
// import {ReactComponent as AssignedSVG} from './../../assets/img/assigned.svg'


export const Card = ({ props }) => {


    return (
     

<div className="product-card">
        <div className="image-container">
            {/* <ImagePNG className="png-image"/> */}
        </div>
        <div className="project-info">
            <h3 className="project-title">{props.title}</h3>
            <span className="project-tag">Development</span>
            <button className="expand-button" id="expand-button">
                <ExpandButtonSVG className="svg-expand-button"/>
            </button>
        </div>
        <p className="project-description">{props.description}</p>
        <div className="project-details">
            <div className="detail-item" id="deadline-detail">
                <span>Deadline</span>
                <CalendarSVG className="svg-calendar"/>
                <div className="dropdown-content">
                    <label htmlFor="start-date">Start Date:</label>
                    <input type="date" id="start-date"/>
                    <label htmlFor="due-date">Due Date:</label>
                    <input type="date" id="due-date"/>
                </div>
            </div>
            <div className="detail-item" id="priority-detail">
                <span>Priority</span>
                <PrioritySVG className="svg-priority"/>
                <div className="dropdown-content">
                    <label><input type="radio" name="priority" value="high"/> High</label>
                    <label><input type="radio" name="priority" value="normal"/> Normal</label>
                    <label><input type="radio" name="priority" value="low"/> Low</label>
                    <label><input type="radio" name="priority" value="clear"/> Clear</label>
                </div>
            </div>
            <div className="detail-item" id="attachment-detail">
                <span>Attachment</span>
                <AttachmentSVG className="svg-attachment"/>
                <div className="dropdown-content">
                    <input type="file" id="attachment-upload" accept="image/*"/>
                </div>
            </div>
            <div className="detail-item" id="assigned-detail">
                <span>Assigned</span>
                {/* <AssignedSVG className="svg-assigned"/> */}
                <div className="dropdown-content">
                    <input type="text" placeholder="Search or enter email…"/>
                </div>
            </div>
        </div>
    </div>






);
}

export default Card;