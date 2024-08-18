
import React, { useState, useRef } from 'react';
import './new-project.css';
import HeaderApp from '../modules/header-app/header-app';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg';
import Sidebar from '../modules/sidebar/sidebar';
import { ReactComponent as CalendarSVG } from './../assets/img/calendar.svg';
import { ReactComponent as CarouselButtonPrevSVG } from './../assets/img/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNextSVG } from './../assets/img/carousel-button-next.svg';
import { ReactComponent as SetPriorityRed3SVG } from './../assets/img/set-priority-red3.svg';
import { ReactComponent as SetPriorityGreen1SVG } from './../assets/img/set-priority-green1.svg';
import { ReactComponent as SetPriorityYellow2SVG } from './../assets/img/set-priority-yellow2.svg';
import { ReactComponent as SetPriorityClear4SVG } from './../assets/img/set-priority-clear4.svg';

function NewProject() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState(Array(8).fill(null)); // Inicjalizacja z 8 pustymi miejscami
    const [selectedPriority, setSelectedPriority] = useState('clear');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const trackRef = useRef(null);

    const priorities = [
        { value: 'high', Icon: SetPriorityRed3SVG, text: 'High' },
        { value: 'normal', Icon: SetPriorityGreen1SVG, text: 'Normal' },
        { value: 'low', Icon: SetPriorityYellow2SVG, text: 'Low' },
        { value: 'clear', Icon: SetPriorityClear4SVG, text: 'Clear' }
    ];

    const handleNext = () => {
       
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
    };

    const handleFileSelect = (index) => (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const newImages = [...images];
            newImages[index] = e.target.result;
            setImages(newImages);
        };
        reader.readAsDataURL(file);
    };

    const handleSelect = (value) => {
        setSelectedPriority(value);
        setIsDropdownOpen(false);
    };

    return (
        <div className="nep-wrapper">
            <HeaderApp />
            <DividerSVG className="svg-divider" />
            <div className="container-wrapper">
                <Sidebar />
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
                            <div className="priority-field">
                                <div className={`priority-dropdown ${selectedPriority}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    {priorities.find(p => p.value === selectedPriority).text}
                                    {React.createElement(priorities.find(p => p.value === selectedPriority).Icon)}
                                </div>
                                {isDropdownOpen && (
                                    <div className="priority-options">
                                        {priorities.map(priority => (
                                            <div key={priority.value} className="priority-option" onClick={() => handleSelect(priority.value)}>
                                                {React.createElement(priority.Icon, { className: "priority-icon" })}
                                                {priority.text}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
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
                                <button className="carousel-button prev" onClick={handlePrev}>
                                    <CarouselButtonPrevSVG className="svg-carousel-button-prev" />
                                </button>
                                <div className="image-track" ref={trackRef} style={{'--active-slide':currentIndex}}> 
                                    {images.map((image, index) => (
                                        <div key={index} className="image-placeholder" style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
                                            {image ? null : (
                                                <button onClick={() => document.getElementById(`file-input-${index}`).click()}>+</button>
                                            )}
                                            <input type="file" id={`file-input-${index}`} style={{ display: 'none' }} onChange={handleFileSelect(index)} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-button next" onClick={handleNext}>
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
    );
}

export default NewProject;

