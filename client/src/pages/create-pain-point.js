import React, { useState, useEffect } from 'react';
import './create-pain-point.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import WindowChat from '../modules/window-chat/window-chat';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ReactComponent as PainPointSVG } from './../assets/img/pain-point.svg'
import { ApiService } from '../services/apiService';
import { pointlist } from '../services/apiRouteService';



function CreatePainPoint() {
      
       
    const [todoItems, setTodoItems] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    const [newTodoItems, setNewTodoItems] = useState([]);
   

    const handleDragStart = (event) => {
        // console.log("Drag started:", event.target);
        setDraggedItem({
            id: Date.now(),
            offsetX: event.nativeEvent.offsetX,
            offsetY: event.nativeEvent.offsetY
        });

        

    };


    const handleDrop = (event) => {
        event.preventDefault();
        // console.log("No item is being dragged");
        if (!draggedItem) return;

        const rect = event.target.getBoundingClientRect();
        const xPos = event.clientX - rect.left - draggedItem.offsetX;
        const yPos = event.clientY - rect.top - draggedItem.offsetY;
        // console.log("Dropped at position:", xPos, yPos);
        const newItem = {
            taskId:1,
            cordX: xPos,
            cordY: yPos,
            name: `User name ${todoItems.length}`,
            createdAt: new Date().toISOString().split('T')[0],
            description: `Write a description of ... ${todoItems.length}`
        };

      
        setTodoItems([...todoItems, newItem]);
        setNewTodoItems([...newTodoItems, newItem]);
        setDraggedItem(null);
        
        // console.log("New item added:", newItem);
    };

    const handleSaveAs = () => {
        ApiService.post(pointlist, {
            points:newTodoItems,
            taskId:1
        })
            .then(response => {
                console.log(response)
            })
       .catch(error=>console.log(error))
    }

    useEffect(() => {
        ApiService.get(pointlist)
        .then(response=>{
            console.log(response)
            setTodoItems([...todoItems, ...response]);
        })
    }, [])

    return (

        <div className="cre-new-project-wrapper">
            <HeaderApp />
            <DividerSVG className="svg-divider" />
            <div className="container-wrapper">
                <Sidebar />

                <div className="container-wrapper">
                    <div className="cre-main-content">
                        <div className="cre-chat-column">
                            <div className="cre-chat-header">
                                <div className="cre-chat-header2">
                                    <h3>Create Point Pain</h3>
                                    <h4>Drag a point into the image</h4>
                                </div >

                                <div draggable="true"
                                    onDragStart={handleDragStart}>
                                    <PainPointSVG
                                        className="svg-pain-point"

                                    />

                                </div>


                            </div>


                            <div className="cre-chat-content" id="chat-content">
                                {todoItems.map((todoItem, index) => (
                                    <WindowChat key={index} props={todoItem} />
                                ))}
                            </div>
                        </div>
                        <div className="cre-image-column">
                            <div
                                className="cre-image-container"
                                id="cre-image-container"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleDrop}
                            >
                                {todoItems.map((position, index) => (
                                    <PainPointSVG
                                        key={index}
                                        className="svg-pain-point"
                                        style={{
                                            position: 'absolute',
                                            left: `${position.cordX}px`,
                                            top: `${position.cordY}px`
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="buttons">
                                <button className="back-to-task">Back to task</button>
                                <button className="save-as" onClick={handleSaveAs}>Save as</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePainPoint;
