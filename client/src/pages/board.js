import React, { useEffect, useState } from 'react';
import './board.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import Card from '../modules/card/card';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ApiService } from '../services/apiService';
import { boardlist } from '../services/apiRouteService';


function Board() {

    const [columnItems, setColumnItems] = useState([{
        name: 'Add Section'
    }]);
    const [todoItems, setTodoItems] = useState([]);

    function addTodoListItem(id, newTask = null) {
        setTodoItems(prevTodoItems => {
            const newItem = newTask || {
                columnId: id,
                title: `Card title ${prevTodoItems.length}`,
                description: `Write a description of ... ${prevTodoItems.length}`,
                tags: ['priority'],
                id: Date.now() + prevTodoItems.length // Unikalny ID dla każdego todoItem
            };
            return [...prevTodoItems, newItem];
        });
    }
    // / Callback, który zostanie wywołany przez NewProject do dodania nowego taska
    const handleSaveTask = (newTask) => {
        addTodoListItem(0, newTask); // Dodajemy nowy task do kolumny 0
    }

    useEffect(() => {
        ApiService.get(boardlist)
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
                                        <button className="add-list" onClick={() => addTodoListItem(index)}>+</button>
                                    
                                    </div>
                                    <div className="boa-tasks">
                                        {todoItems && todoItems.map(todoItem => {
                                            return (
                                                todoItem.board_column_id === columnItem.id && 
                                                <Card key={todoItem.id} props={todoItem} /> // Dodanie unikalnego klucza
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
