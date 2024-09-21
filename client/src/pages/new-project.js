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
import { ApiService } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { boardlist } from '../services/apiRouteService';

function NewProject({ onSave }) {
    // Definicja stanu dla poszczególnych pól formularza
    const [projectName, setProjectName] = useState(''); // Nazwa projektu
    const [description, setDescription] = useState(''); // Opis projektu
    const [email, setEmail] = useState(''); // E-mail
    const [tag, setTag] = useState(''); // Tag
    const [priority, setPriorityValue] = useState('clear'); // Priorytet
    const [startDate, setStartDate] = useState(''); // Data rozpoczęcia
    const [dueDate, setDueDate] = useState(''); // Data zakończenia

    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState(Array(8).fill(null)); // Inicjalizacja z 8 pustymi miejscami
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Stan dla rozwijanego menu priorytetów
    const trackRef = useRef(null);

    const navigate = useNavigate(); // Hook do nawigacji

    const priorities = [
        { value: 'high', Icon: SetPriorityRed3SVG, text: 'High' },
        { value: 'normal', Icon: SetPriorityGreen1SVG, text: 'Normal' },
        { value: 'low', Icon: SetPriorityYellow2SVG, text: 'Low' },
        { value: 'clear', Icon: SetPriorityClear4SVG, text: 'Clear' }
    ];

    const handleNext = () => {
        // Obsługa następnego obrazka w karuzeli
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        // Obsługa poprzedniego obrazka w karuzeli
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
    };

    const handleFileSelect = (index) => (event) => {
        // Obsługa wyboru pliku obrazka
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
        // Ustawienie wybranego priorytetu
        setPriorityValue(value);
        setIsDropdownOpen(false);
    };

    const handleSaveAs = async () => {
        // Walidacja pól
        if (!projectName) {
            alert('Please enter the project name.');
            return;
        }


        const response = await ApiService.get(boardlist)
        const boardColumnId = response[0].id



        const newProjectData = {
            boardColumnId,
            name:projectName,
            description,
            email,
            tag,
            priority,
            startDate: startDate ? new Date(startDate).toISOString() : null,
            dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        };

        console.log('Wysyłane dane:', newProjectData);

        ApiService.post('/api/tasks', newProjectData)
            .then(data => {
                console.log('Project saved:', data);
                // Po zapisaniu, przekieruj do boarda
                navigate('/board');
            })
            .catch(error => {
                console.error('Error saving project:', error.message);
                alert(`Error saving project: ${error.message}`);
            });
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
                            {/* Pole nazwy projektu powiązane ze stanem */}
                            <input
                                type="text"
                                placeholder="Name Project"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            {/* Pole opisu projektu powiązane ze stanem */}
                            <textarea
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="field">
                            {/* Pole e-mail powiązane ze stanem */}
                            <input
                                type="text"
                                placeholder="E-mail, comma separated"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            {/* Pole tagu powiązane ze stanem */}
                            <input
                                type="text"
                                placeholder="Tag"
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <div className="priority-field">
                                {/* Pole wyboru priorytetu */}
                                <div
                                    className={`priority-dropdown ${priority}`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {React.createElement(priorities.find(p => p.value === priority).Icon)}
                                    {priorities.find(p => p.value === priority).text}
                                </div>
                                {isDropdownOpen && (
                                    <div className="priority-options">
                                        {priorities.map(pri => (
                                            <div
                                                key={pri.value}
                                                className="priority-option"
                                                onClick={() => handleSelect(pri.value)}
                                            >
                                                {React.createElement(pri.Icon, { className: "priority-icon" })}
                                                {pri.text}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="field date-field">
                            {/* Pole daty rozpoczęcia powiązane ze stanem */}
                            <input
                                type="date"
                                id="start-date"
                                placeholder="Start date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <button
                                className="calendar-button"
                                type="button"
                                onClick={() => document.getElementById('start-date').showPicker()}
                            >
                                <CalendarSVG className="svg-calendar" />
                            </button>
                            {/* Pole daty zakończenia powiązane ze stanem */}
                            <input
                                type="date"
                                id="due-date"
                                placeholder="Due date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                            <button
                                className="calendar-button"
                                type="button"
                                onClick={() => document.getElementById('due-date').showPicker()}
                            >
                                <CalendarSVG className="svg-calendar" />
                            </button>
                        </div>
                        <div className="field">
                            <div className="carousel">
                                <button className="carousel-button prev" onClick={handlePrev}>
                                    <CarouselButtonPrevSVG className="svg-carousel-button-prev" />
                                </button>
                                <div className="image-track" ref={trackRef} style={{ '--active-slide': currentIndex }}>
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
                            <button className="save-as" onClick={handleSaveAs}>Save as</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NewProject;
