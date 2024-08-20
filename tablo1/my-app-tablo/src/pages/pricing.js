import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pricing.css';
import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ReactComponent as PointSVG } from './../assets/img/point.svg'
import { ReactComponent as NextSectionSVG } from './../assets/img/next-section.svg'



function Pricing() {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

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
        intervals.push(animateColors('.make-goal3__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.make-goal4__animate', ['#FFFBDA', '#F788CC']));
        animateOpacity('.make-goal3__animate', '#F788CC');
        intervals.push(animateColors('.make-goal5__animate', ['#FFFBDA', '#FC7309']));
        animateOpacity('.make-goal6__animate', '#816AD3');
        intervals.push(animateColors('.choose1__animate', ['#FFFBDA', '#F788CC']));
        intervals.push(animateColors('.choose2__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.choose3__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.faq1__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.faq2__animate', ['#FFFBDA', '#F2ADF3']));
        intervals.push(animateColors('.faq3__animate', ['#FFFBDA', '#F788CC']));


        // Cleanup intervals on component unmount
        return () => intervals.forEach(clearInterval);
    }, []);


    // Komponent Counter
    function Counter({ initialValue = 1, min = 1, max = 20, rate = 5, color }) {
        const [value, setValue] = useState(initialValue);
        const [calculatedValue, setCalculatedValue] = useState(value * rate);

        useEffect(() => {
            setCalculatedValue(value * rate);
        }, [value, rate]);

        const handleDecrement = () => {
            if (value > min) {
                setValue(prevValue => prevValue - 1);
            }
        };

        const handleIncrement = () => {
            if (value < max) {
                setValue(prevValue => prevValue + 1);
            }
        };

        return (

            <>
                <h3 style={{ color: color }}>${calculatedValue}</h3>

                <div className="price">
                    <h4 style={{ color: color, paddingBottom: '20px' }}> per Month</h4>



                </div>
                <div className="pricing-plans__control pricing-plans__control--users">
                    <span className="users-many">How many users?</span>
                    <span className="number-input">
                        <button className="number-input__control number-input__control--minus user-many" data-disabled="true" data-counter-subtract onClick={handleDecrement}>-</button>
                        <input type="text" className="users-many" value={value} min="1" max="20" readOnly data-counter-input />
                        <button className="number-input__control number-input__control--plus user-many" data-counter-add onClick={handleIncrement}>+</button>
                    </span>

                </div>
            </>
        );
    }


    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleJoinusClick = () => {
        navigate('/joinus');
      };


    return (
        <>

            <Header />

            <DividerSVG className="svg-divider" />

            <section className="pri-Section1" data-block="Section1">
                <h1 id="make-goal-heading" className="make-goal__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal__animate">J</span>
                    <span className="make-goal__animate">o</span>
                    <span className="make-goal__animate">i</span>
                    <span className="make-goal__animate">n</span>
                    <span className="make-goal__animate">&nbsp;</span>
                    <span className="make-goal__animate">u</span>
                    <span className="make-goal__animate">s</span>
                    <span className="make-goal__animate">&nbsp;</span>
                    <span className="make-goal__animate">a</span>
                    <span className="make-goal__animate">n</span>
                    <span className="make-goal__animate">d</span>
                </h1>

                <h2 id="make-goal2-heading" className="make-goal2__heading-text heading-xl" aria-hidden="true">
                    <span className="make-goal__animate">&nbsp;</span>
                    <span className="make-goal2__animate">b</span>
                    <span className="make-goal2__animate">u</span>
                    <span className="make-goal2__animate">i</span>
                    <span className="make-goal2__animate">l</span>
                    <span className="make-goal2__animate">d</span>
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
            </section>




            <section className="pri-Section2" data-block="Section2">
                <div className="pricing-plan">
                    <svg className="pricing-plan-svg" viewBox="0 0 400 700" >
                        <rect x="0" y="0" width="400" height="700" rx="24" ry="24" fill="none" stroke="#F2ADF3" stroke-width="2" />
                        <foreignObject x="20" y="20" width="360" height="700">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <h2 style={{ color: '#F2ADF3' }}>Tablo</h2>
                            </div>
                            <div class="price">
                                <h3 style={{ color: '#F2ADF3' }}>$0</h3>
                                <h4 style={{ color: '#F2ADF3' }}>Month</h4>
                                <h5>Per user/month</h5>

                            </div>

                            <div className="spacer"></div>
                            <div className="price"></div>

                            <div></div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div></div>

                            <div class="point1">
                                <PointSVG className="svg-point" />
                                <h6 class="inline">Unlimited cards</h6>
                            </div>

                            <div class="point2">
                                <PointSVG className="svg-point" />
                                <h6 class="inline">Up to 10 boards per Workspace</h6>
                            </div>

                            <div class="point3">
                                <PointSVG className="svg-point" />
                                <h6 class="inline">Unlimited storage (10MB/file)</h6>
                            </div>
                            <div class="point4">
                                <PointSVG className="svg-point" />
                                <h6 class="inline">10 Corrections Points</h6>
                            </div>


                           

                            <div className="auth-buttons">
                                <button
                                    style={{
                                        color: '#FFFBDA',
                                        fontFamily: 'Gilroy',
                                        fontSize: '22px',
                                        fontWeight: '400',
                                        backgroundColor: '#0C0E0D',
                                        border: '1px solid #F2ADF3'
                                    }}
                                    className="join-button"
                                    onClick={handleJoinusClick}
                                >
                                    Join us
                                </button>
                            </div>
                        </foreignObject>

                    </svg>
                </div>



                <div className="pricing-plan2">
                    <svg className="pricing-plan-svg" viewBox="0 0 400 700">
                        <rect x="0" y="0" width="400" height="700" rx="24" ry="24" fill="none" stroke="#F788CC" stroke-width="2" />
                        <foreignObject x="20" y="20" width="360" height="700">

                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <h2 style={{ color: '#F788CC' }}>Tablo</h2>

                                <Counter initialValue={1} min={1} max={20} rate={5} color="#F788CC" />



                                <div style={{ paddingBottom: '40px' }}> </div>

                                <div class="point1">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Unlimited cards</h6>
                                </div>

                                <div class="point2">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Up to 10 boards per Workspace</h6>
                                </div>

                                <div class="point3">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Unlimited storage (10MB/file)</h6>
                                </div>
                                <div class="point4">
                                    <       PointSVG className="svg-point" />
                                    <h6 class="inline">10 Corrections Points</h6>
                                </div>
                            </div>


                            <div className="auth-buttons">
                                <button
                                    style={{
                                        color: '#FFFBDA',
                                        fontFamily: 'Gilroy',
                                        fontSize: '22px',
                                        fontWeight: '300',
                                        backgroundColor: '#0C0E0D',
                                        border: '1px solid #F788CC'
                                    }}
                                    className="join-button"
                                    onClick={handleJoinusClick}
                                >
                                    Join us
                                </button>
                            </div>

                        </foreignObject>
                    </svg>
                </div>
                <div class="pricing-plan3">
                    <svg class="pricing-plan-svg" viewBox="0 0 400 700">
                        <rect x="0" y="0" width="400" height="700" rx="24" ry="24" fill="none" stroke="#FC7309" stroke-width="2" />
                        <foreignObject x="20" y="20" width="360" height="700">

                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <h2 style={{ color: '#FC7309' }}>Tablo</h2>
                                <Counter initialValue={1} min={1} max={20} rate={8} color="#FC7309" />




                                <div style={{ paddingBottom: '40px' }}> </div>

                                <div class="point1">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Unlimited cards</h6>
                                </div>

                                <div class="point2">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Up to 10 boards per Workspace</h6>
                                </div>

                                <div class="point3">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Unlimited storage (10MB/file)</h6>
                                </div>
                                <div class="point4">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">10 Corrections Points</h6>
                                </div>
                            </div>


                            <div className="auth-buttons">
                                <button
                                    style={{
                                        color: '#FFFBDA',
                                        fontFamily: 'Gilroy',
                                        fontSize: '22px',
                                        fontWeight: '300',
                                        backgroundColor: '#0C0E0D',
                                        border: '1px solid #FC7309'
                                    }}
                                    className="join-button"
                                    onClick={handleJoinusClick}
                                >
                                    Join us
                                </button>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
                <div class="pricing-plan4">
                    <svg class="pricing-plan-svg" viewBox="0 0 400 700">
                        <rect x="0" y="0" width="400" height="700" rx="24" ry="24" fill="none" stroke="#816AD3" stroke-width="2" />
                        <foreignObject x="20" y="20" width="360" height="700">

                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <h2 style={{ color: '#977BFA' }}>Tablo</h2>
                                <Counter initialValue={1} min={1} max={20} rate={15} color="#977BFA" />



                                <div style={{ paddingBottom: '40px' }}> </div>

                                <div class="point1">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Unlimited cards</h6>
                                </div>

                                <div class="point2">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Up to 10 boards per Workspace</h6>
                                </div>

                                <div class="point3">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">Unlimited storage (10MB/file)</h6>
                                </div>
                                <div class="point4">
                                    <PointSVG className="svg-point" />
                                    <h6 class="inline">10 Corrections Points</h6>
                                </div>
                            </div>


                            <div className="auth-buttons">
                                <button
                                    style={{
                                        color: '#FFFBDA',
                                        fontFamily: 'Gilroy',
                                        fontSize: '22px',
                                        fontWeight: '400',
                                        backgroundColor: '#0C0E0D',
                                        border: '1px solid #977BFA'
                                    }}
                                    className="join-button"
                                    onClick={handleJoinusClick}
                                >
                                    Join us
                                </button>
                            </div>

                        </foreignObject>
                    </svg>
                </div>



            </section>


            <div class="next-section">
                <button class="svg-button">
                    <NextSectionSVG className="svg.next-section" />
                </button>
            </div>







            <section className="pri-Section3a" data-block="Section3a">
                <h1 id="choose1" class="choose1__heading-text heading-xl" aria-hidden="true">
                    <span className="choose1__animate">C</span>
                    <span className="choose1__animate">h</span>
                    <span className="choose1__animate">o</span>
                    <span className="choose1__animate">o</span>
                    <span className="choose1__animate">s</span>
                    <span className="choose1__animate">e</span>



                </h1>

                <h2 id="choose2-heading" className="choose2__heading-text heading-xl" aria-hidden="true">
                    <span className="choose2__animate">&nbsp;</span>
                    <span className="choose2__animate">y</span>
                    <span className="choose2__animate">o</span>
                    <span className="choose2__animate">u</span>
                    <span className="choose2__animate">r</span>

                    <span class="choose2__animate">&nbsp;</span>
                </h2>

                <h3 id="choose3-heading" className="choose3__heading-text heading-xl" aria-hidden="true">

                    <span className="choose3__animate">p</span>
                    <span className="choose3__animate">l</span>
                    <span className="choose3__animate">a</span>
                    <span className="choose3__animate">n</span>


                </h3>

            </section>








            <section class="pri-Section3" data-block="Section3">
                <div class="plan">
                    <table class="features-table">
                        <tbody>
                            <tr class="features-table__row">
                                <th class="features-table__header">


                                    <p></p>
                                </th>
                                <th class="features-table__header">

                                    <p style={{ color: '#F788CC' }}>Plus</p>
                                    <div className="auth-buttons">
                                        <button
                                            style={{
                                                color: '#FFFBDA',
                                                fontFamily: 'Gilroy',
                                                fontSize: '22px',
                                                fontWeight: '300',
                                                backgroundColor: '#0C0E0D',
                                                border: '1px solid #F788CC'
                                            }}
                                            className="join-button"
                                            onClick={handleJoinusClick}
                                        >
                                            Join us
                                        </button>
                                    </div>

                                </th>
                                <th class="features-table__header">

                                    <p style={{ color: '#FC7309' }}>Premium</p>
                                    <div className="auth-buttons">
                                        <button
                                            style={{
                                                color: '#FFFBDA',
                                                fontFamily: 'Gilroy',
                                                fontSize: '22px',
                                                fontWeight: '300',
                                                backgroundColor: '#0C0E0D',
                                                border: '1px solid #FC7309'
                                            }}
                                            className="join-button"
                                            onClick={handleJoinusClick}
                                        >
                                            Join us
                                        </button>
                                    </div>
                                </th>
                                <th class="features-table__header">

                                    <p style={{ color: '#977BFA' }}>Business</p>


                                    <div className="auth-buttons">
                                        <button
                                            style={{
                                                color: '#FFFBDA',
                                                fontFamily: 'Gilroy',
                                                fontSize: '22px',
                                                fontWeight: '300',
                                                backgroundColor: '#0C0E0D',
                                                border: '1px solid #816AD3'
                                            }}
                                            className="join-button"
                                            onClick={handleJoinusClick}
                                        >
                                            Join us
                                        </button>
                                    </div>
                                </th>
                            </tr>






                            <tr class="features-table__row">
                                <td class="label">
                                    Unlimited cards
                                </td>
                                <td class="label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" aria-label="Tick">
                                        <path fill="currentColor" fill-rule="evenodd" d="m8.401 17.66 15.6-15.6L22.587.647 8.4 14.833 1.414 7.847 0 9.26l8.4 8.4v-.001h.001Z" clip-rule="evenodd"></path>
                                    </svg>

                                </td>
                                <td class="label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" aria-label="Tick">
                                        <path fill="currentColor" fill-rule="evenodd" d="m8.401 17.66 15.6-15.6L22.587.647 8.4 14.833 1.414 7.847 0 9.26l8.4 8.4v-.001h.001Z" clip-rule="evenodd"></path>
                                    </svg>

                                </td>
                                <td class="label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" aria-label="Tick">
                                        <path fill="currentColor" fill-rule="evenodd" d="m8.401 17.66 15.6-15.6L22.587.647 8.4 14.833 1.414 7.847 0 9.26l8.4 8.4v-.001h.001Z" clip-rule="evenodd"></path>
                                    </svg>

                                </td>
                            </tr>

                            <tr class="features-table__row">
                                <td class="label">
                                    Boards per Workspace
                                </td>
                                <td class="label">
                                    50
                                </td>
                                <td class="label">
                                    100
                                </td>
                                <td class="label">
                                    Unlimited
                                </td>
                            </tr>
                            <tr class="features-table__row">
                                <td class="label">
                                    Unlimited storage
                                </td>
                                <td class="label">
                                    10MB/file
                                </td>
                                <td class="label">
                                    1GB/file
                                </td>
                                <td class="label">
                                    100GB
                                </td>
                            </tr>

                            <tr class="features-table__row">
                                <td class="label">
                                    Corrections Points
                                </td>
                                <td class="label">
                                    10
                                </td>
                                <td class="label">
                                    100
                                </td>
                                <td class="label">
                                    Unlimited
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>







            <section class="pri-Section4" data-block="Section4">
                <div class="faq"> </div>
                <h1 id="faq1" class="faq1__heading-text heading-xl" aria-hidden="true">
                    <span class="faq1__animate">F</span>
                    <span class="faq1__animate">r</span>
                    <span class="faq1__animate">e</span>
                    <span class="faq1__animate">q</span>
                    <span class="faq1__animate">u</span>
                    <span class="faq1__animate">e</span>
                    <span class="faq1__animate">n</span>
                    <span class="faq1__animate">t</span>
                    <span class="faq1__animate">l</span>
                    <span class="faq1__animate">y</span>


                </h1>
                <div class="sub-headings-container"></div>
                <h2 id="faq2-heading" class="faq2__heading-text heading-xl" aria-hidden="true">
                    <span class="faq2__animate">&nbsp;</span>
                    <span class="faq2__animate">a</span>
                    <span class="faq2__animate">s</span>
                    <span class="faq2__animate">k</span>
                    <span class="faq2__animate">e</span>
                    <span class="faq2__animate">d</span>
                    <span class="faq2__animate">&nbsp;</span>
                </h2>

                <h3 id="faq3-heading" class="faq3__heading-text heading-xl" aria-hidden="true">

                    <span class="faq3__animate">q</span>
                    <span class="faq3__animate">u</span>
                    <span class="faq3__animate">e</span>
                    <span class="faq3__animate">s</span>
                    <span class="faq3__animate">t</span>
                    <span class="faq3__animate">i</span>
                    <span class="faq3__animate">o</span>
                    <span class="faq3__animate">n</span>
                    <span class="faq3__animate">s</span>

                </h3>
            </section>








            <section className="faq-section">
                <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(0)}>
                        <span>Does Tablo offer a free trial of the Premium version?</span>
                        <span className="faq-icon">{activeIndex === 0 ? '-' : '+'}</span>
                    </button>
                    <hr />
                    {activeIndex === 0 && (
                        <div className="faq-answer">
                            <p>Our return policy allows for returns within 30 days of purchase. Please make sure the items are in original condition.</p>
                        </div>
                    )}
                </div>

                <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(1)}>
                        <span>Do you offer discounted plans?</span>
                        <span className="faq-icon">{activeIndex === 1 ? '-' : '+'}</span>
                    </button>
                    <hr />
                    {activeIndex === 1 && (
                        <div className="faq-answer">
                            <p>You can track your order using the tracking number provided in your shipping confirmation email.</p>
                        </div>
                    )}
                </div>

                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(2)}>
                        <span>What payment methods are available?</span>
                        <span className="faq-icon">{activeIndex === 2 ? '-' : '+'}</span>
                    </button>
                    <hr />
                    {activeIndex === 2 && (
                        <div className="faq-answer">
                            <p>Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary.</p>
                        </div>
                    )}
                </div>
            </section>






            <Footer />




        </>


    )
}

export default Pricing;