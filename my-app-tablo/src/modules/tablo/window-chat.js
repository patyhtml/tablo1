import React from 'react';
import './window-chat.css';

import {ReactComponent as AwatarChatSVG} from './../../assets/img/awatar-chat.svg'
import {ReactComponent as ExpandButtonDefaultSVG} from './../../assets/img/expand-button-default.svg'

export const WindowChat = () => {


    return (
     
<body>

<div class="window-chat">
        <div class="project-info">
            <AwatarChatSVG className="svg-awatar-chat"/>
            <h3 class="project-title">Marie Bergman</h3>
            <span class="project-time">1:30 PM</span>
            <button class="expand-button" id="expand-button">
                <ExpandButtonDefaultSVG className="svg-expand-button-default"/>
            </button>
        </div>
        <p class="project-description" id="project-description">
            Please change the position of the element at the top to reflect them at the bottom. 
            I would change the color too. 
            Additional text to test the expand functionality. 
            More text to ensure the content overflows and can be expanded.
        </p>
        <div class="project-details">
            <div class="detail-item">
            </div>
        </div>
    </div>
    <script>
        document.getElementById('expand-button').addEventListener('click', function () {
            var description = document.getElementById('project-description');
            var icon = document.getElementById('expand-icon');
            if (description.classList.contains('expanded')) {
                description.classList.remove('expanded');
                icon.classList.remove('rotated');
            } else {
                description.classList.add('expanded');
                icon.classList.add('rotated');
            }
        });
    </script>


</body>

);
}

export default WindowChat;