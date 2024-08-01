import React from 'react';
import './calendar.css';

import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'
import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import { ReactComponen as IconTableSVG} from './../../assets/img/icon-table.svg'
import { ReactComponen as CalendarSVG} from './../../assets/img/icon-calendar.svg'
import { ReactComponen as LineSVG} from './../../assets/img/line.svg'
import { ReactComponen as AddNewProjectSVG} from './../../assets/img/add-new-project.svg'
import { ReactComponen as IconNewProjectSVG} from './../../assets/img/icon-new-project.svg'
import { ReactComponen as Awatar1XSVG} from './../../assets/img/awatar1x.svg'
import { ReactComponen as Awatar2XSVG} from './../../assets/img/awatar2x.svg'
import { ReactComponen as Awatar3XSVG} from './../../assets/img/awatar3x.svg'
import { ReactComponen as Awatar4XSVG} from './../../assets/img/awatar4x.svg'


export const Calendar = () => {


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
        <main class="main-content">
            <div class="calendar-header">
                <div class="calendar-navigation">
                    <select class="month-dropdown" id="month-dropdown">
                        <option value="0">January</option>
                        <option value="1">February</option>
                        <option value="2">March</option>
                        <option value="3">April</option>
                        <option value="4">May</option>
                        <option value="5">June</option>
                        <option value="6">July</option>
                        <option value="7">August</option>
                        <option value="8">September</option>
                        <option value="9">October</option>
                        <option value="10">November</option>
                        <option value="11">December</option>
                    </select>
                    <button class="nav-button" id="prev-day">&lt;</button>
                    <span class="today-button" id="today-button">Today</span>
                    <button class="nav-button" id="next-day">&gt;</button>
                    <select class="year-dropdown" id="year-dropdown">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                </div>
                <div class="calendar-invite">
                    <div class="avatars">
                        <Awatar1XSVG className="svg-awatar1x"/>
                        <Awatar2XSVG className="svg-awatar2x"/>
                        <Awatar3XSVG className="svg-awatar3x"/>
                        <Awatar4XSVG className="svg-awatar4x"/>
                    </div>
                    <span class="invite-text">Invite</span>
                    <input type="email" class="invite-input" placeholder="Enter email address"/>
                </div>
            </div>
            <div class="calendar-grid" id="calendar-grid">
              
            </div>
        </main>
    </div>

</body>




        );
    }
    
    export default Calendar;