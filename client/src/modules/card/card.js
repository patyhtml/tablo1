import React, { useState, useEffect, useRef } from 'react';
import './card.css';

import ImagePNG from './../../assets/img/image.png';
import { ReactComponent as ExpandButtonSVG } from './../../assets/img/expand-button.svg';
import { ReactComponent as CalendarSVG } from './../../assets/img/calendar.svg';
import { ReactComponent as PrioritySVG } from './../../assets/img/priority.svg';
import { ReactComponent as SetPriorityRed3SVG } from './../../assets/img/set-priority-red3.svg';
import { ReactComponent as SetPriorityGreen1SVG } from './../../assets/img/set-priority-green1.svg';
import { ReactComponent as SetPriorityYellow2SVG } from './../../assets/img/set-priority-yellow2.svg';
import { ReactComponent as SetPriorityClear4SVG } from './../../assets/img/set-priority-clear4.svg';
import { ReactComponent as AttachmentSVG } from './../../assets/img/attachment.svg';
import { ReactComponent as PhotoAddSVG } from './../../assets/img/photoadd.svg';

export const Card = ({ props }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [PriorityIcon, setPriorityIcon] = useState(PrioritySVG);
    const [startDate, setStartDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // Stan do przechowywania wybranego zdjęcia

    // Stany do zarządzania tytułem, opisem i tagiem
    const [title, setTitle] = useState(props.projectName);
    const [description, setDescription] = useState(props.description);
    const [tag, setTag] = useState(props.tag); // Edytowalny tag

    const calendarRef = useRef(null);
    const priorityRef = useRef(null);
    const attachmentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (calendarRef.current && !calendarRef.current.contains(event.target)) &&
                (priorityRef.current && !priorityRef.current.contains(event.target)) &&
                (attachmentRef.current && !attachmentRef.current.contains(event.target))
            ) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handlePriorityClick = () => {
        setActiveDropdown(activeDropdown === 'priority' ? null : 'priority');
    };

    const handleCalendarClick = () => {
        setActiveDropdown(activeDropdown === 'calendar' ? null : 'calendar');
    };

    const handleAttachmentClick = () => {
        setActiveDropdown(activeDropdown === 'attachment' ? null : 'attachment');
    };

    const handlePriorityIconClick = (IconComponent) => {
        setPriorityIcon(() => IconComponent);
        setActiveDropdown(null); // Zamknij dropdowny po wyborze
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    };

     // Funkcja do zmiany koloru tła w zależności od długości tekstu
     const getBackgroundColorBasedOnLength = () => {
        const length = tag.length;
        if (length < 7) return "#F788CC"; // Różowy dla małej liczby znaków
        if (length < 10) return "#FC7309"; // Pomarańczowy dla średniej liczby znaków
        return "#816AD3"; // Fioletowy dla dużej liczby znaków
    };

    // Funkcja do dynamicznego ustawiania szerokości pola na podstawie liczby znaków
    const getInputWidthBasedOnText = () => {
        const length = tag.length;
        const minWidth = 20; // Minimalna szerokość (w px)
        const additionalWidth = length * 8; // 8px na każdy znak
        return `${minWidth + additionalWidth}px`; // Zwracamy szerokość w pikselach
    };
    // Funkcja do obsługi wyboru pliku (zdjęcia)
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Wyświetlamy wybrane zdjęcie
        }
    };

    // Funkcja do otwarcia okna dialogowego wyboru pliku
    const handleImageUploadClick = () => {
        document.getElementById('file-upload').click();
    };

    return (
        <div className="product-card">
            <div className={`image-container ${isExpanded ? 'expanded' : ''}`}>
                {/* Wyświetlamy wybrane zdjęcie lub domyślny obraz */}
                <img src={selectedImage || ImagePNG} alt="Project" />
                <button className="photo-upload-button" onClick={handleImageUploadClick}>
                    <PhotoAddSVG className="svg-photo-add" /> {/* Ikona dodawania zdjęcia */}
                </button>
                <input
                    type="file"
                    id="file-upload"
                    style={{ display: 'none' }} // Ukrycie inputa
                    accept="image/*"
                    onChange={handleFileChange} // Wywołanie funkcji po wyborze pliku
                />
            </div>
            <div className={`project-info ${isExpanded ? 'expanded' : ''}`}>
                {/* Edytowalny tag */}
                <input
                    type="text"
                    className="project-tag-input"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    dir="ltr" // Wymusza kierunek tekstu od lewej do prawej
                    style={{
                        backgroundColor: getBackgroundColorBasedOnLength(),
                        width: getInputWidthBasedOnText() // Dynamiczna szerokość
                    }}
                />
                <button className="expand-button" id="expand-button" onClick={handleExpandClick}>
                    <ExpandButtonSVG
                        className="svg-expand-button"
                        style={{ transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)' }}
                    />
                </button>
            </div>

            {/* Zamiast contentEditable, używamy <input> i <textarea> */}
            <input
                type="text"
                className="project-title-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                dir="ltr" // Wymusza kierunek tekstu od lewej do prawej
            />

            <textarea
                className="project-description-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                dir="ltr" // Wymusza kierunek tekstu od lewej do prawej
            />

            <div className="project-details">
                <div className="detail-item" id="deadline-detail"
                    ref={calendarRef}
                >
                    <span>Deadline</span>
                    <CalendarSVG
                        className="svg-calendar"
                        onClick={handleCalendarClick}
                        style={{ fill: activeDropdown === 'calendar' ? '#F788CC' : 'initial' }}
                    />
                    <div className={`dropdown-content ${activeDropdown === 'calendar' ? 'visible' : ''}`}>
                        <label htmlFor="start-date">Start Date:</label>
                        <input
                            type="date"
                            id="start-date"
                            value={startDate}
                            onChange={handleStartDateChange}
                        />
                        <label htmlFor="due-date">Due Date:</label>
                        <input
                            type="date"
                            id="due-date"
                            value={dueDate}
                            onChange={handleDueDateChange}
                        />
                    </div>
                </div>
                <div className="detail-item" id="priority-detail"
                    ref={priorityRef}
                    onClick={handlePriorityClick}
                >
                    <span>Priority</span>
                    <PriorityIcon className="priority-icon-card" />
                    <div className={`dropdown-content ${activeDropdown === 'priority' ? 'visible' : ''}`}>
                        <SetPriorityGreen1SVG onClick={() => handlePriorityIconClick(SetPriorityGreen1SVG)} className="set-priority-green1" /> Normal
                        <SetPriorityYellow2SVG onClick={() => handlePriorityIconClick(SetPriorityYellow2SVG)} className="set-priority-yellow2" /> Low
                        <SetPriorityRed3SVG onClick={() => handlePriorityIconClick(SetPriorityRed3SVG)} className="set-priority-red3" /> High
                        <SetPriorityClear4SVG onClick={() => handlePriorityIconClick(SetPriorityClear4SVG)} className="set-priority-clear4" /> Clear
                    </div>
                </div>
                <div className="detail-item" id="attachment-detail"
                    ref={attachmentRef}
                    onClick={handleAttachmentClick}
                >
                    <span>Attachment</span>
                    <AttachmentSVG className="svg-attachment" />
                    <div className={`dropdown-content ${activeDropdown === 'attachment' ? 'visible' : ''}`}>
                        <input type="file" id="attachment-upload" accept="image/*" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
