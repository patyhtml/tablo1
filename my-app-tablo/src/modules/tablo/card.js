import React from 'react';
import './card.css';

import {ReactComponent as ImagePNG} from './../../assets/img/image.png'
import {ReactComponent as ExpandButtonSVG} from './../../assets/img/expand-button.svg'
import {ReactComponent as CalendarSVG} from './../../assets/img/calendar.svg'
import {ReactComponent as PrioritySVG} from './../../assets/img/priority.svg'
import {ReactComponent as AttachmentSVG} from './../../assets/img/attachment.svg'
import {ReactComponent as AssignedSVG} from './../../assets/img/assigned.svg'


export const Card = () => {


    return (
     
<body>
<div class="product-card">
        <div class="image-container">
            <ImagePNG className="png-image"/>
        </div>
        <div class="project-info">
            <h3 class="project-title">Landing</h3>
            <span class="project-tag">Development</span>
            <button class="expand-button" id="expand-button">
                <ExpandButtonSVG className="svg-expand-button"/>
            </button>
        </div>
        <p class="project-description">Understand your brand. The first step 
            your brand...</p>
        <div class="project-details">
            <div class="detail-item" id="deadline-detail">
                <span>Deadline</span>
                <CalendarSVG className="svg-calendar"/>
                <div class="dropdown-content">
                    <label for="start-date">Start Date:</label>
                    <input type="date" id="start-date"/>
                    <label for="due-date">Due Date:</label>
                    <input type="date" id="due-date"/>
                </div>
            </div>
            <div class="detail-item" id="priority-detail">
                <span>Priority</span>
                <PrioritySVG className="svg-priority"/>
                <div class="dropdown-content">
                    <label><input type="radio" name="priority" value="high"/> High</label>
                    <label><input type="radio" name="priority" value="normal"/> Normal</label>
                    <label><input type="radio" name="priority" value="low"/> Low</label>
                    <label><input type="radio" name="priority" value="clear"/> Clear</label>
                </div>
            </div>
            <div class="detail-item" id="attachment-detail">
                <span>Attachment</span>
                <AttachmentSVG className="svg-attachment"/>
                <div class="dropdown-content">
                    <input type="file" id="attachment-upload" accept="image/*"/>
                </div>
            </div>
            <div class="detail-item" id="assigned-detail">
                <span>Assigned</span>
                <AssignedSVG className="svg-assigned"/>
                <div class="dropdown-content">
                    <input type="text" placeholder="Search or enter email…"/>
                </div>
            </div>
        </div>
    </div>




</body>

);
}

export default Card;