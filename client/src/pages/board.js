import React, { useEffect, useState } from 'react';
import './board.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import Card from '../modules/card/card';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ApiService } from '../services/apiService';
import { boardcolumnlist,tasklist } from '../services/apiRouteService';


function Board() {

    const [columnItems, setColumnItems] = useState([{
        name: 'Add Section'
    }]);
    const [todoItems, setTodoItems] = useState([]);

    function addTodoListItem(id) {
        setTodoItems(prevTodoItems => {
            const newItem =  {
                boardColumnId: id,
                name: `Card title ${prevTodoItems.length}`,
                description: `Write a description of ... ${prevTodoItems.length}`,
                tag:`Development` ,
            };
            ApiService.post(tasklist, newItem)
            return [...prevTodoItems, newItem];
        });
    }
   

    useEffect(() => {
        ApiService.get(boardcolumnlist)
            .then(response => {
                console.log(response)
                setColumnItems(prev => {
                    console.log(prev)
                    const lastItem = prev.pop()
                    return [...prev, ...response, lastItem]
                })
            })
        ApiService.get('/api/tasks')
            .then(response => {
                console.log(response)
                setTodoItems(prev => {
                    console.log(prev)

                    
                    return [...prev, ...response]
                })
            })
    }, [])

    

    return (
        <>
            <HeaderApp />
            <DividerSVG className="svg-divider" />
            <div className="boa-container-wrapper">
                <Sidebar />

                <div className="boa-container">
                    <main className="boa-board-content">
                        {columnItems && columnItems.map((columnItem, index) => {
                            return (
                                <div className="boa-list" key={index}>
                                    <div className="boa-list-header">
                                        <h3 style={{ color: columnItem.titleColor }}>{columnItem.name}</h3>
                                        <button className="add-list" onClick={() => addTodoListItem(columnItem.id)}>+</button>
                                    
                                    </div>
                                    <div className="boa-tasks">
                                        {todoItems && todoItems.map(todoItem => {
                                            console.log(todoItem,columnItem)
                                            return (
                                                todoItem.boardColumnId === columnItem.id && 
                                                <Card key={Date.now() + Math.random()} props={todoItem} /> // Dodanie unikalnego klucza
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </main>
                </div>
            </div>
        </>
    )
}

export default Board;
