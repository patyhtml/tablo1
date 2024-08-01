import React from 'react';
import './create-pain-point.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import { ReactComponen as IconTableSVG} from './../../assets/img/icon-table.svg'
import { ReactComponen as CalendarSVG} from './../../assets/img/icon-calendar.svg'
import { ReactComponen as LineSVG} from './../../assets/img/line.svg'
import { ReactComponen as AddNewProjectSVG} from './../../assets/img/add-new-project.svg'
import { ReactComponen as IconNewProjectSVG} from './../../assets/img/icon-new-project.svg'
import { ReactComponen as PainPointtSVG} from './../../assets/img/pain-point.svg'

export const CreatePainPoint = () => {



    return (
     
        <body>
            <header class="header">
                <div class="left-section">
                    <div class="logo">Tablo</div>
                    <nav class="menu">
                        <a href="#tools">Tools</a>
                        <a href="#pricing">Pricing</a>
                    </nav>
                    <div class="hamburger-menu" id="hamburger-menu">
                    <HamburgerIconSVG className="svg-hamburger-icon"/>
                        <nav class="mobile-menu" id="mobile-menu">
                        
                            <a href="#tools">Tools</a>
                            <a href="#pricing">Pricing</a>
                            <button class="login-button">Log in</button>
                            <button class="join-button">Join us</button>
                        </nav>
                    </div>
                </div>
                <div class="auth-buttons">
                    <button class="login-button">Log in</button>
                    <button class="join-button">Join us</button>
                </div>
            </header>
        
            <DividerSVG className="svg-divider"/>
        
            <div class="container">
                <aside class="sidebar">
                    <ul>
                    <li><IconTableSVG className="svg-icon-table"/>Table</li>
                <li><CalendarSVG className="svg-calendar"/>Calendar</li>
                <div class="spacer"></div>
                <LineSVG className="svg-line"/>
                
                <li class="new-project-item">New Project<AddNewProjectSVG className="svg-add-new-project"/></li>
                <li><IconNewProjectSVG className="svg-icon-new-project"/>Creative logo</li>
                <li><IconNewProjectSVG className="svg-icon-new-project"/>Creative logo</li>
                  
                    </ul>
                </aside>
        
                <div class="main-content">
                    <div class="chat-column">
                        <div class="chat-header">
                            <h3>Create Point Pain</h3>
                            <PainPointtSVG className="svg-pain-point"/>
                            <h4>Drag a point into the image</h4>
                        </div>
                        <div class="chat-content" id="chat-content">
                        </div>
                    </div>
                    <div class="image-column">
                        <div class="image-container" id="image-container">
                        </div>
                        <div class="buttons">
                            <button class="back-to-task">Back to task</button>
                            <button class="save-as">Save as</button>
                        </div>
                    </div>
                </div>
            </div>   
            </body>
     
        );
    }
    
    export default CreatePainPoint;