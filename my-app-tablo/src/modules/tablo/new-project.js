import React from 'react';
import './new-project.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import { ReactComponen as IconTableSVG} from './../../assets/img/icon-table.svg'
import { ReactComponen as CalendarSVG} from './../../assets/img/icon-calendar.svg'
import { ReactComponen as LineSVG} from './../../assets/img/line.svg'
import { ReactComponen as AddNewProjectSVG} from './../../assets/img/add-new-project.svg'
import { ReactComponen as IconNewProjectSVG} from './../../assets/img/icon-new-project.svg'
import { ReactComponen as CalendarSVG} from './../../assets/img/calendar.svg'
import { ReactComponen as CarouselButtonPrevSVG} from './../../assets/img/carousel-button-prev.svg'
import { ReactComponen as CarouselButtonNextSVG} from './../../assets/img/carousel-button-next.svg'


export const NewProject = () => {



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

        <div class="column column-right">
            <div class="field">
                <input type="text" placeholder="Name Project"/>
            </div>
            <div class="field">
                <textarea placeholder="Description"></textarea>
            </div>
            <div class="field">
                <input type="text" placeholder="E-mail, comma separated"/>
            </div>
            <div class="field">
                <input type="text" placeholder="Tag"/>
            </div>
            <div class="field">
                <select>
                    <option value="high">High</option>
                    <option value="normal">Normal</option>
                    <option value="low">Low</option>
                    <option value="clear">Clear</option>
                </select>
            </div>
            <div class="field date-field">
                <input type="date" id="start-date" placeholder="Start date">
                <button class="calendar-button" type="button" onclick="document.getElementById('start-date').showPicker()">
                    <CalendarSVG className="svg-calendar"/>
                </button> 
            </input>
        
                <input type="date" id="due-date" placeholder="Due date">
                <button class="calendar-button" type="button" onclick="document.getElementById('due-date').showPicker()">
                <CalendarSVG className="svg-calendar"/>
                </button>
            </input>
            </div>
            
            <div class="field">
                <div class="carousel">
                    <button class="carousel-button prev">
                        <CarouselButtonPrevSVG className="svg-carousel-button-prev"/>
                    </button>
                    <div class="image-track">
                        <div class="image-placeholder">+</div>
                        <div class="image-placeholder">+</div>
                        <div class="image-placeholder">+</div>
                        <div class="image-placeholder">+</div>
                    </div>
                    <button class="carousel-button next">
                        <CarouselButtonNextSVG className="svg-carousel-button-next"/>
                    </button>
                </div>
            </div>
            <div class="buttons">
                <button class="back-button">Back to task</button>
                <button class="save-button">Save as</button>
            </div>
        </div>
    </div>
    </body>
        );
    }
    
    export default NewProject;