import React, { useEffect, useState } from 'react';
import './board.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import Card from '../modules/card/card';
import { ReactComponent as DividerSVG } from './../assets/img/divider.svg'
import { ApiService } from '../services/apiService';
import { boardlist } from '../services/apiRouteService';
import { board } from '../services/apiRouteService';
import { userboardlist } from '../services/apiRouteService';





function Board() {

    const [columnItems, setColumnItems] = useState([{
        name:'Add Section'
    }]);
    const [todoItems, setTodoItems] = useState([]);


    function addTodoListItem(id) {
        setTodoItems(prevTodoItems => {
            return [...prevTodoItems, {
                columnId: id,
                title: `Card title ${prevTodoItems.length}`,
                description: `Write a description of ... ${prevTodoItems.length}`,
                tags: ['priority'],
            }]
        })
    }
    useEffect(() => {
        ApiService.get(boardlist)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setColumnItems(prev => {
                    console.log(prev)
                    const lastItem = prev.pop()
                    return [...prev, ...response, lastItem]
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
                                        <button className="add-list" onClick={_ => addTodoListItem(index)}>+</button>

                                    </div>
                                    <div className="boa-tasks">
                                        {todoItems && todoItems.map(todoItem => {
                                            return (
                                                todoItem.columnId === index && <Card props={todoItem} />
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