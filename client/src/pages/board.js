import React, { useState } from 'react';
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

    
ApiService.get(boardlist)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})
ApiService.post(boardlist)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})
ApiService.get(board)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})

ApiService.post(board)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})

ApiService.delete(board)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})

ApiService.get(userboardlist)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})
ApiService.post(userboardlist)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})

ApiService.put(userboardlist)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})

ApiService.delete(userboardlist)
.then(response=>response.json())
.then(response=>{
    console.log(response)
})








    const columns = [
        {
            name: 'To do',
            titleColor: '#F788CC'
        },
        {
            name: 'Doing',
            titleColor: '#FC7309'
        },
        {
            name: 'Done',
            titleColor: '#816AD3'
        },
        {
            name: 'Add section',
            titleColor: ''
        },
    ]
    const [columnItems] = useState(columns);
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
                                <div className="boa-list" >
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