import React from 'react';
import './tablo.css';
import {ReactComponent as HamburgerIconSVG} from './../../assets/img/hamburger-icon.svg'

import {ReactComponent as DividerSVG} from './../../assets/img/divider.svg'
import {ReactComponent as Window1SVG} from './../../assets/img/window1.svg'
import {ReactComponent as Window2SVG} from './../../assets/img/window2.svg'
import {ReactComponent as Window3SVG} from './../../assets/img/window3.svg'
import {ReactComponent as NextSectionSVG} from './../../assets/img/next-section.svg'
import {ReactComponent as Image1SVG} from './../../assets/img/image1.svg'
import {ReactComponent as Image3SVG} from './../../assets/img/image3.svg'
import {ReactComponent as SetPriorityGreenSVG} from './../../assets/img/set-priority-green.svg'
import {ReactComponent as SetPriorityYellowSVG} from './../../assets/img/set-priority-yellow.svg'
import {ReactComponent as SetPriorityRedSVG} from './../../assets/img/set-priority-red.svg'
import {ReactComponent as Image5SVG} from './../../assets/img/image5.svg'
import {ReactComponent as CalendarImageSVG} from './../../assets/img/calendar-image.svg'
import {ReactComponent as CorrectionPointImageSVG} from './../../assets/img/correction-point-image.svg'
import {ReactComponent as CorrectionPointImage2SVG} from './../../assets/img/correction-point-image2.svg'
import {ReactComponent as CorrectionPointImage3SVG} from './../../assets/img/correction-point-image3.svg'
import {ReactComponent as ButtonFooterSVG} from './../../assets/img/button-footer.svg'


export const Tablo = () => {



  return (
    
    <div className="tablo">
      <div className="background-pattern"></div>
     
      <header className="header">
        <div className="left-section">
          <div className="logo">Tablo</div>
          <nav className="menu">
            <a href="#tools">Tools</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="hamburger-menu" id="hamburger-menu">
            <HamburgerIconSVG className="svg-hamburger-icon"/>
            <nav className="mobile-menu" id="mobile-menu">
              <a href="#tools">Tools</a>
              <a href="#pricing">Pricing</a>
              <button className="login-button">Log in</button>
              <button className="join-button">Join us</button>
            </nav>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Log in</button>
          <button className="join-button">Join us</button>
        </div>
      </header>

      <DividerSVG className="svg-divider"/>

      <section class="Section1" data-block="Section1">
        <div class="make-goal"> </div>
        <h1 id="make-goal-heading" class="make-goal__heading-text heading-xl" aria-hidden="true">
            <span class="make-goal__animate">M</span>
            <span class="make-goal__animate">a</span>
            <span class="make-goal__animate">k</span>
            <span class="make-goal__animate">e</span>
            <span class="make-goal__animate">&nbsp;</span>
            <span class="make-goal__animate">a</span>
            <span class="make-goal__animate">&nbsp;</span>
            <span class="make-goal__animate">g</span>
            <span class="make-goal__animate">o</span>
            <span class="make-goal__animate">a</span>
            <span class="make-goal__animate">l</span>
        </h1>
        <div class="sub-headings-container"></div>
        <h2 id="make-goal2-heading" class="make-goal2__heading-text heading-xl" aria-hidden="true">
            <span class="make-goal__animate">&nbsp;</span>
            <span class="make-goal2__animate">a</span>
            <span class="make-goal2__animate">s</span>
            <span class="make-goal__animate">&nbsp;</span>
        </h2>
      
        <h3 id="make-goal3-heading" class="make-goal3__heading-text heading-xl" aria-hidden="true">
            
            <span class="make-goal3__animate">a</span>
            <span class="make-goal__animate">&nbsp;</span>
        </h3>
       
        <h4 id="make-goal4-heading" class="make-goal4__heading-text heading-xl" aria-hidden="true">
        <span class="make-goal4__animate">c</span>
        <span class="make-goal4__animate">r</span>
        <span class="make-goal4__animate">e</span>
        <span class="make-goal4__animate">a</span>
        </h4>
       
            <h5 id="make-goal5-heading" class="make-goal5__heading-text heading-xl" aria-hidden="true">
            <span class="make-goal5__animate">t</span>
            <span class="make-goal5__animate">i</span>
            <span class="make-goal5__animate">v</span>
            <span class="make-goal5__animate">e</span>
            <span class="make-goal__animate">&nbsp;</span>
            </h5>
            <div class="make-goal6"> </div>
            <h6 id="make-goal6-heading" class="make-goal6__heading-text heading-xl" aria-hidden="true">
            <span class="make-goal6__animate">t</span>
            <span class="make-goal6__animate">e</span>
            <span class="make-goal6__animate">a</span>
            <span class="make-goal6__animate">m</span>
            </h6>
          
            <h7 id="make-goal7-heading" class="make-goal7__heading-text heading-xl" aria-hidden="true">
            <span class="make-goal7__animate">make managing creative projects easy and transparent for teams</span>
        </h7>


        <div class="window">        
<Window1SVG className="svg-window1"/>
<Window2SVG className="svg-window2"/>
<Window3SVG className="svg-window3"/>
</div>



<div class="next-section">
    <button class="svg-button">
        <NextSectionSVG className="svg-next-section"/>
    </button>
</div>

</section>

<section class="Section2" data-block="Section2">
    <div class="tasks"> </div>
    <h8 id="tasks-heading" class="tasks__heading-text heading-xl" aria-hidden="true">
        <span class="tasks__animate">M</span>
        <span class="tasks__animate">a</span>
        <span class="tasks__animate">n</span>
        <span class="tasks__animate">a</span>
        <span class="tasks__animate">g</span>
        <span class="tasks__animate">e</span>
        <span class="tasks__animate">&nbsp;</span>
        <span class="tasks__animate">t</span>
        <span class="tasks__animate">a</span>
        <span class="tasks__animate">s</span>
        <span class="tasks__animate">k</span>
        <span class="tasks__animate">s</span>
        <span class="tasks__animate">&nbsp;</span>
        <span class="tasks__animate">e</span>
        <span class="tasks__animate">a</span>
        <span class="tasks__animate">s</span>
        <span class="tasks__animate">e</span>
    </h8>

        <h9 id="tasks2-heading" class="tasks2__heading-text heading-xl" aria-hidden="true">
        <span class="tasks2__animate">Lists and cards are the building blocks of organizing work on a board. Grow from there with task assignments, 
            timelines, productivity metrics, calendars, and more.</span>
    </h9>
</section>

    
<section class="Section2image" data-block="Section2">
   <div class="image">
   <Image1SVG className="svg-image1"/>
   <Image3SVG className="svg-image3"/>
   <SetPriorityGreenSVG className="svg-set-priority-green"/>
   <SetPriorityYellowSVG className="svg-set-priority-yellow"/>
        <SetPriorityRedSVG className="svg-set-priority-red"/>
        <Image5SVG className="svg-image5"/> 
        </div>
        </section>
  
<section class="Section3" data-block="Section3">
    <div class="calendar"> </div>
    <h10 id="calendar-heading" class="calendar__heading-text heading-xl" aria-hidden="true">
        <span class="calendar__animate">C</span>
        <span class="calendar__animate">a</span>
        <span class="calendar__animate">l</span>
        <span class="calendar__animate">e</span>
        <span class="calendar__animate">n</span>
        <span class="calendar__animate">d</span>
        <span class="calendar__animate">a</span>
        <span class="calendar__animate">r</span>
    </h10>

    <h11 id="calendar2-heading" class="calendar2__heading-text heading-xl" aria-hidden="true">
        <span class="calendar2__animate">See on the calendar how projects move along 
            the timeline to achieve their goal. Who is responsible 
            for which project.</span>
    </h11>

    <h12 id="calendar3-heading" class="calendar3__heading-text heading-xl" aria-hidden="true">
        <span class="calendar3__animate">Due dates: They’re easy to set, 
            hard to miss (with reminders!), 
            and oh-so-satisfying to mark as “done.”</span>
    </h12>


   
    <div class="calendar-image"> 
    <CalendarImageSVG className="svg-calendar-image"/>
        </div>
    
   
</section>

<section class="Section4" data-block="Section4">
    <div class="correction"> </div>
    <h13 id="correction" class="correction_heading-text heading-xl" aria-hidden="true">
        <span class="correction__animate">C</span>
        <span class="correction__animate">o</span>
        <span class="correction__animate">r</span>
        <span class="correction__animate">r</span>
        <span class="correction__animate">e</span>
        <span class="correction__animate">c</span>
        <span class="correction__animate">t</span>
        <span class="correction__animate">i</span>
        <span class="correction__animate">o</span>
        <span class="correction__animate">n</span>
        <span class="correction__animate">&nbsp;</span>
        <span class="correction__animate">p</span>
        <span class="correction__animate">o</span>
        <span class="correction__animate">i</span>
        <span class="correction__animate">n</span>
        <span class="correction__animate">t</span>
    </h13>
    <h14 id="correction-point2" class="correction-point2__heading-text heading-xl" aria-hidden="true">
        <span class="correction-point2__animate">Do not exchange e-mails to express your opinion about 
            the project. Simply add correction points to the project 
            in an easy way so that the entire team can immediately 
            see what to improve to achieve the goal.</span>
    </h14>
</section>

    <section class="Section4image" data-block="Section4">
    <div class="correction-point-image"> 
        <CorrectionPointImageSVG class="svg-correction-point-image"/>
        </div>

        <div class="correction-point-image2"> 
            <CorrectionPointImage2SVG class="svg-correction-point-image2"/>
            </div>
    
            <div class="correction-point-image3"> 
                <CorrectionPointImage3SVG class="svg-correction-point-image3"/>
                </div>
       
</section>



    

<DividerSVG class="svg-divider"/>

<footer class="site-footer">
    <div class="footer-content"/>
        <header class="header">
            <div class="left-section">
                <div class="logo">Tablo</div>
            </div>
            <div class="auth-buttons">
                <button class="login-button">Log in</button>
                <button class="join-button">Join us</button>
            </div>
        </header>
      
    
       

        <div class="footer">
        <footer class="footer"/>
            <div class="footer-section1-links1">
                <h15>Tools</h15>
                <ul class="footer-links-list">
                    <li><a href="#workflow" class="footer-link" id="workflow">Workflow</a></li>
                    <li><a href="#teamline" class="footer-link" id="teamline">Teamline</a></li>
                    <li><a href="#pain-points" class="footer-link" id="pain-points">Pain points</a></li>
                </ul>
            </div>
            </div>

            <div class="footer-section2-links2">
                <h16>Pricing</h16>
                <ul class="footer-links-list">
                    <li><a href="#monthl-plans" class="footer-link" id="monthl-plans">Monthly plans</a></li>
                    <li><a href="#resources" class="footer-link" id="resources">Resources</a></li>
                </ul>
            </div>

            <div class="footer-section3-links3">
                <h17>Contact</h17>
                <ul class="footer-links-list">
                    <li><a href="#facebook" class="footer-link" id="facebook">Facebook</a></li>
                    <li><a href="#instagram" class="footer-link" id="instagram">Instagram</a></li>
                    <li><a href="#tweeter" class="footer-link" id="tweeter">Tweeter</a></li>
                </ul>
            </div>



  
        <div class="subscription-box">
            <h18>Subscribe to the Tablo</h18>
            <p>Newsletter to stay up to date with the lashes releases</p>
            <form id="subscription-form" action="#" method="post"/>
                <div class="input-with-button">
                    <input type="email" name="email" placeholder="@ Email address" required/>
                    <button type="submit" class="svg-button">
                        <ButtonFooterSVG class="svg-button-footer"/>
                    </button>
                </div>
                
              
      </div>
</footer>

   
    <div class="footer-bottom">
        &copy; 2024 tablo.com | Designed by Patrycia
    </div>
</div>

 );
}

export default Tablo;
