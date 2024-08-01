import React from 'react';
import './board.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import { ReactComponen as IconTableSVG} from './../../assets/img/icon-table.svg'
import { ReactComponen as CalendarSVG} from './../../assets/img/icon-calendar.svg'
import { ReactComponen as LineSVG} from './../../assets/img/line.svg'
import { ReactComponen as AddNewProjectSVG} from './../../assets/img/add-new-project.svg'
import { ReactComponen as IconNewProjectSVG} from './../../assets/img/icon-new-project.svg'


export const Board = () => {



    return (
    <body>
        <header class="header">
        <div class="left-section">
            <div class="logo">Tablo</div>
            <nav class="menu">
                <a href="#tools">Tools</a>
                <a href="#pricing">Pricing</a>
            </nav>
            
                <HamburgerIconSVG class="svg-hamburger-icon"/>
                <nav class="mobile-menu" id="mobile-menu">
                    <a href="#tools">Tools</a>
                    <a href="#pricing">Pricing</a>
                    <button class="login-button">Log in</button>
                    <button class="join-button">Join us</button>
                </nav>
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
        <main class="main-content">
            <div class="list" id="to-do">
                <div class="list-header">
                    <h3 style="color: #F788CC;">To do</h3>
                    <button class="add-list">+</button>
                    <button class="more-options">...</button>
                </div>
                <div class="tasks"></div>
            </div>
            <div class="list" id="doing">
                <div class="list-header">
                    <h3 style="color: #FC7309;">Doing</h3>
                    <button class="add-list">+</button>
                    <button class="more-options">...</button>
                </div>
                <div class="tasks"></div>
            </div>
            <div class="list" id="done">
                <div class="list-header">
                    <h3 style="color: #816AD3;">Done</h3>
                    <button class="add-list">+</button>
                    <button class="more-options">...</button>
                </div>
                <div class="tasks"></div>
            </div>
            <div class="list" id="add-section">
                <div class="list-header">
                    <h3>Add sections</h3>
                    <button class="add-list">+</button>
                    <button class="more-options">...</button>
                </div>
                <div class="tasks"></div>
                </div>
            </main>
        </div>
    </body>
        );
}

export default Board;