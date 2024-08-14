import './new-project.css';
import HeaderApp from '../modules/header-app/header-app'
import {ReactComponent as DividerSVG} from './../assets/img/divider.svg'
import Sidebar from '../modules/sidebar/sidebar';
import styles from '../modules/sidebar/sidebar.css';
import { ReactComponent as CalendarSVG} from './../assets/img/calendar.svg'
import { ReactComponent as CarouselButtonPrevSVG} from './../assets/img/carousel-button-prev.svg'
import { ReactComponent as CarouselButtonNextSVG} from './../assets/img/carousel-button-next.svg'

function NewProject() {
    return (
        <div className="nep-wrapper">
        <HeaderApp />
        <DividerSVG className="svg-divider" />
        <div className="container-wrapper">
            <Sidebar />
            <div className={styles.sidebar}>
            </div>
            <main className="npe-container">
                <div className="column column-right">
                    <div className="field">
                        <input type="text" placeholder="Name Project" />
                    </div>
                    <div className="field">
                        <textarea placeholder="Description"></textarea>
                    </div>
                    <div className="field">
                        <input type="text" placeholder="E-mail, comma separated" />
                    </div>
                    <div className="field">
                        <input type="text" placeholder="Tag" />
                    </div>
                    <div className="field">
                        <select>
                            <option value="high">High</option>
                            <option value="normal">Normal</option>
                            <option value="low">Low</option>
                            <option value="clear">Clear</option>
                        </select>
                    </div>
                    <div className="field date-field">
                        <input type="date" id="start-date" placeholder="Start date" />
                        <button className="calendar-button" type="button" onClick={() => document.getElementById('start-date').showPicker()}>
                            <CalendarSVG className="svg-calendar" />
                        </button>
                        <input type="date" id="due-date" placeholder="Due date" />
                        <button className="calendar-button" type="button" onClick={() => document.getElementById('due-date').showPicker()}>
                            <CalendarSVG className="svg-calendar" />
                        </button>
                    </div>
                    <div className="field">
                        <div className="carousel">
                            <button className="carousel-button prev">
                                <CarouselButtonPrevSVG className="svg-carousel-button-prev" />
                            </button>
                            <div className="image-track">
                                <div className="image-placeholder">+</div>
                                <div className="image-placeholder">+</div>
                                <div className="image-placeholder">+</div>
                                <div className="image-placeholder">+</div>
                            </div>
                            <button className="carousel-button next">
                                <CarouselButtonNextSVG className="svg-carousel-button-next" />
                            </button>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="back-button">Back to task</button>
                        <button className="save-button">Save as</button>
                    </div>
                </div>
            </main>
        </div>
    </div>
  
    )
}   

export default NewProject;