import React, { useEffect } from 'react';
import './home.css';
import Header from './../modules/header/header'
import Footer from './../modules/footer/footer'
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ReactComponent as Window1SVG } from './../assets/img/window1.svg'
import { ReactComponent as Window2SVG } from './../assets/img/window2.svg'
import { ReactComponent as Window3SVG } from './../assets/img/window3.svg'
import { ReactComponent as NextSectionSVG } from './../assets/img/next-section.svg'
import { ReactComponent as Image1SVG } from './../assets/img/image1.svg'
import { ReactComponent as Image3SVG } from './../assets/img/image3.svg'
import { ReactComponent as SetPriorityGreenSVG } from './../assets/img/set-priority-green.svg'
import { ReactComponent as SetPriorityYellowSVG } from './../assets/img/set-priority-yellow.svg'
import { ReactComponent as SetPriorityRedSVG } from './../assets/img/set-priority-red.svg'
import { ReactComponent as Image5SVG } from './../assets/img/image5.svg'
import { ReactComponent as CalendarImageSVG } from './../assets/img/calendar-image.svg'
import { ReactComponent as CorrectionPointImageSVG } from './../assets/img/correction-point-image.svg'
import { ReactComponent as CorrectionPointImage2SVG } from './../assets/img/correction-point-image2.svg'
import { ReactComponent as CorrectionPointImage3SVG } from './../assets/img/correction-point-image3.svg'
import BackgroundPattern from './../assets/img/path.svg';




function Home() {
    useEffect(() => {
        const animateColors = (selector, colors) => {
            const letters = document.querySelectorAll(selector);
            let colorIndex = 0;

            function changeColors() {
                letters.forEach((letter, index) => {
                    setTimeout(() => {
                        letter.style.color = colors[colorIndex];
                    }, index * 200);
                });

                // Increment color index and loop back to 0 if at the end of the array
                colorIndex = (colorIndex + 1) % colors.length;
            }

            // Start the loop
            changeColors();
            return setInterval(changeColors, letters.length * 200 + 500);
        };

        const animateOpacity = (selector, color) => {
            const letters = document.querySelectorAll(selector);
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.opacity = '1';
                    letter.style.color = color;
                }, (index + 1) * 400);
            });
        };

        // Dodajemy animacje
        const intervals = [];
        intervals.push(animateColors('.make-goal__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.make-goal2__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.make-goal4__animate', ['#FFFBDA', '#F788CC']));
        animateOpacity('.make-goal3__animate', '#F788CC');
        intervals.push(animateColors('.make-goal5__animate', ['#FFFBDA', '#FC7309']));
        animateOpacity('.make-goal6__animate', '#816AD3');
        intervals.push(animateColors('.tasks__animate', ['#FFFBDA', '#F788CC']));
        intervals.push(animateColors('.calendar__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.correction__animate', ['#FFFBDA', '#F2ADF3']));

        // Cleanup intervals on component unmount
        return () => intervals.forEach(clearInterval);
    }, []);

   
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('Section2');
        if (nextSection) {
            const topOfElement = nextSection.offsetTop;
            window.scrollTo({
                top: topOfElement,
                behavior: 'smooth'
            });
        }
    };



    return (

        <div className="tablo">
            <div className="background-pattern1" style={{ backgroundImage: `url(${BackgroundPattern})` }}></div>



            <Header />

            <DividerSVG className="svg-divider" />

            <section className="hom-Section1" data-block="Section1">
                <h1 id="make-goal-heading" className="make-goal__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal__animate">M</span>
                    <span className="make-goal__animate">a</span>
                    <span className="make-goal__animate">k</span>
                    <span className="make-goal__animate">e</span>
                    <span class="make-goal__animate">&nbsp;</span>
                    <span className="make-goal__animate">a</span>
                    <span className="make-goal__animate">&nbsp;</span>
                    <span className="make-goal__animate">g</span>
                    <span className="make-goal__animate">o</span>
                    <span className="make-goal__animate">a</span>
                    <span className="make-goal__animate">l</span>
                </h1>

                <h2 id="make-goal2-heading" className="make-goal2__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal__animate">&nbsp;</span>
                    <span className="make-goal2__animate">a</span>
                    <span className="make-goal2__animate">s</span>
                    <span className="make-goal__animate">&nbsp;</span>
                </h2>

                <h3 id="make-goal3-heading" className="make-goal3__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal3__animate">a</span>
                    <span className="make-goal__animate">&nbsp;</span>
                </h3>

                <h4 id="make-goal4-heading" className="make-goal4__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal4__animate">c</span>
                    <span className="make-goal4__animate">r</span>
                    <span className="make-goal4__animate">e</span>
                    <span className="make-goal4__animate">a</span>
                </h4>

                <h4 id="make-goal5-heading" className="make-goal5__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal5__animate">t</span>
                    <span className="make-goal5__animate">i</span>
                    <span className="make-goal5__animate">v</span>
                    <span className="make-goal5__animate">e</span>
                    <span className="make-goal__animate">&nbsp;</span>
                </h4>

                <h4 id="make-goal6-heading" className="make-goal6__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal6__animate">t</span>
                    <span className="make-goal6__animate">e</span>
                    <span className="make-goal6__animate">a</span>
                    <span className="make-goal6__animate">m</span>
                </h4>


                <h7 id="make-goal7-heading" className="make-goal7__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal7__animate">make managing creative projects easy and transparent for teams</span>
                </h7>


                <div className="window">
                    <Window1SVG className="svg-window1" />
                    <Window2SVG className="svg-window2" />
                    <Window3SVG className="svg-window3" />
                </div>



                <div className="next-section">
                    <button className="svg-button" onClick={scrollToNextSection}>
                        <NextSectionSVG className="svg-next-section" />
                    </button>
                </div>

            </section>

            <section className="hom-Section2" data-block="Section2" id="Section2">
                <div className="tasks"> </div>
                <h8 id="tasks-heading" className="tasks__heading-text heading-xl" aria-hidden="true">
                    <span className="tasks__animate">M</span>
                    <span className="tasks__animate">a</span>
                    <span className="tasks__animate">n</span>
                    <span className="tasks__animate">a</span>
                    <span className="tasks__animate">g</span>
                    <span className="tasks__animate">e</span>
                    <span className="tasks__animate">&nbsp;</span>
                    <span className="tasks__animate">t</span>
                    <span className="tasks__animate">a</span>
                    <span className="tasks__animate">s</span>
                    <span className="tasks__animate">k</span>
                    <span className="tasks__animate">s</span>
                    <span className="tasks__animate">&nbsp;</span>
                    <span className="tasks__animate">e</span>
                    <span className="tasks__animate">a</span>
                    <span className="tasks__animate">s</span>
                    <span className="tasks__animate">e</span>
                </h8>

                <h9 id="tasks2-heading" class="tasks2__heading-text heading-xl" aria-hidden="true">
                    <span className="tasks2__animate">Lists and cards are the building blocks of organizing work on a board. Grow from there with task assignments,
                        timelines, productivity metrics, calendars, and more.</span>
                </h9>
            </section>


            <section className="hom-Section2image" data-block="Section2">
                <div className="image">
                    <Image1SVG className="svg-image1" />
                    <Image3SVG className="svg-image3" />
                    <SetPriorityGreenSVG className="svg-set-priority-green" />
                    <SetPriorityYellowSVG className="svg-set-priority-yellow" />
                    <SetPriorityRedSVG className="svg-set-priority-red" />
                    <Image5SVG className="svg-image5" />
                </div>
            </section>

            <section className="hom-Section3" data-block="Section3" id="Section3">
                <div className="calendar"> </div>
                <h10 id="calendar-heading" className="calendar__heading-text heading-xl" aria-hidden="true">
                    <span className="calendar__animate">C</span>
                    <span className="calendar__animate">a</span>
                    <span className="calendar__animate">l</span>
                    <span className="calendar__animate">e</span>
                    <span className="calendar__animate">n</span>
                    <span className="calendar__animate">d</span>
                    <span className="calendar__animate">a</span>
                    <span className="calendar__animate">r</span>
                </h10>

                <h11 id="calendar2-heading" className="calendar2__heading-text heading-xl" aria-hidden="true">
                    <span className="calendar2__animate">See on the calendar how projects move along
                        the timeline to achieve their goal. Who is responsible
                        for which project.</span>
                </h11>

                <h12 id="calendar3-heading" className="calendar3__heading-text heading-xl" aria-hidden="true">
                    <span className="calendar3__animate">Due dates: They’re easy to set,
                        hard to miss (with reminders!),
                        and oh-so-satisfying to mark as “done.”</span>
                </h12>




                <CalendarImageSVG className="svg-calendar-image" />



            </section>
            <div className="container">


                <section className="Section4image" data-block="Section4">
                    <div className="correction-point-image">
                        <CorrectionPointImageSVG class="svg-correction-point-image" />
                    </div>

                    <div className="correction-point-image2">
                        <CorrectionPointImage2SVG class="svg-correction-point-image2" />
                    </div>

                    <div className="correction-point-image3">
                        <CorrectionPointImage3SVG class="svg-correction-point-image3" />
                    </div>

                </section>

                <section className="hom-Section4" data-block="Section4" id="Section4">
                    <div className="correction"> </div>
                    <h13 id="correction" className="correction_heading-text heading-xl" aria-hidden="true">
                        <span className="correction__animate">C</span>
                        <span className="correction__animate">o</span>
                        <span className="correction__animate">r</span>
                        <span className="correction__animate">r</span>
                        <span className="correction__animate">e</span>
                        <span className="correction__animate">c</span>
                        <span className="correction__animate">t</span>
                        <span className="correction__animate">i</span>
                        <span className="correction__animate">o</span>
                        <span className="correction__animate">n</span>
                        <span className="correction__animate">&nbsp;</span>
                        <span className="correction__animate">p</span>
                        <span className="correction__animate">o</span>
                        <span className="correction__animate">i</span>
                        <span className="correction__animate">n</span>
                        <span className="correction__animate">t</span>
                    </h13>
                    <h14 id="correction-point2" className="correction-point2__heading-text heading-xl" aria-hidden="true">
                        <span class="correction-point2__animate">Do not exchange e-mails to express your opinion about
                            the project. Simply add correction points to the project
                            in an easy way so that the entire team can immediately
                            see what to improve to achieve the goal.</span>
                    </h14>
                </section>
            </div>
            <Footer />

        </div>

    )
}

export default Home;