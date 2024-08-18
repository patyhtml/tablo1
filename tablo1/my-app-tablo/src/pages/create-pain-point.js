import React, { useState } from 'react';
import './create-pain-point.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import styles from '../modules/sidebar/sidebar.css';
import WindowChat from '../modules/window-chat/window-chat';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg';
import { ReactComponent as PainPointSVG } from './../assets/img/pain-point.svg';

function CreatePainPoint() {
    const [todoItems, setTodoItems] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    const [positions, setPositions] = useState([]);

    const handleDragStart = (event) => {
        console.log("Dragging started");
        // event.dataTransfer.setData("text/plain", event.target.id);
        // setDraggedItem({
        //     id: Date.now(),
        //     offsetX: event.nativeEvent.offsetX,
        //     offsetY: event.nativeEvent.offsetY
        // });
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (!draggedItem) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const xPos = event.clientX - rect.left - draggedItem.offsetX;
        const yPos = event.clientY - rect.top - draggedItem.offsetY;

     

        const newItem = {
            id: draggedItem.id,
            x: xPos,
            y: yPos,
            title: `User name ${todoItems.length + 1}`,
            time: new Date().toLocaleTimeString(),
            description: `Write a description of ... ${todoItems.length + 1}`
        };

        setPositions([...positions, newItem]);
        setTodoItems([...todoItems, newItem]);
        setDraggedItem(null);
    };

    const handleChatDrop = (event) => {
        event.preventDefault();
        if (!draggedItem) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const xPos = event.clientX - rect.left;
        const yPos = event.clientY - rect.top;

        const newTodoItem = {
            id: draggedItem.id,
            x: xPos,
            y: yPos,
            title: `User name ${todoItems.length + 1}`,
            time: new Date().toLocaleTimeString(),
            description: `Write a description of ... ${todoItems.length + 1}`
        };

        setTodoItems([...todoItems, newTodoItem]);
        setDraggedItem(null);
    };

    return (
        <div className="cre-new-project-wrapper">
            <HeaderApp />
            <DividerSVG className="svg-divider" />
            <div className="container-wrapper">
                <Sidebar />
                <div className={styles.sidebar}></div>
                <div className="cre-main-content">
                    <div className="cre-chat-column">
                        <div className="cre-chat-header">
                            
                            <PainPointSVG
                                className="svg-pain-point"
                                draggable="true"
                                onDragStart={handleDragStart}
                            />
                            <div className="cre-chat-header2">
                                <h3>Create Point Pain</h3>
                                <h4>Drag a point into the image or chat</h4>
                            </div>
                        </div>
                        <div 
                            className="cre-chat-content" 
                            id="chat-content"
                            onDragOver={(e) => e.preventDefault()} 
                            onDrop={handleChatDrop}
                        >
                            {todoItems.map((todoItem) => (
                                <WindowChat key={todoItem.id} props={todoItem} />
                            ))}
                        </div>
                    </div>
                    <div className="cre-image-column">
                        <div
                            className="cre-image-container"
                            id="image-container"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            {/* {positions.map((position) => (
                                <PainPointSVG
                                
                                    key={position.id}
                                    className="svg-pain-point"
                                    style={{
                                        position: 'absolute',
                                        left: `${position.x}px`,
                                        top: `${position.y}px`,
                                    }}
                                />
                            ))} */}
                        </div>
                        <div className="buttons">
                            <button className="back-to-task">Back to task</button>
                            <button className="save-as">Save as</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePainPoint;


