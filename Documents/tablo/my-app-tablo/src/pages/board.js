import React, { useState } from 'react';
import './board.css';
import HeaderApp from '../modules/header-app/header-app';
import Sidebar from '../modules/sidebar/sidebar';
import styles from '../modules/sidebar/sidebar.css';
import Card from '../modules/card/card';
import {ReactComponent as DividerSVG} from './../assets/img/divider.svg'


function Board() {

    const columns=[
        {
            name:'To do',
            titleColor: '#F788CC'
        },
        {
            name:'Doing',
            titleColor: '#FC7309'
        },
        {
            name:'Done',
            titleColor: '#816AD3'
        },
        {
            name:'Add section',
            titleColor: ''
        },
    ]
    const [columnItems, setColumnItems] = useState(columns);
    const [todoItems, setTodoItems] = useState([]);
   


 function addTodoListItem(id){
    setTodoItems(prevTodoItems=>{
        return [...prevTodoItems,{
            columnId: id,
            title: `tytul karty ${prevTodoItems.length}`,
            description: `opis karty ${prevTodoItems.length}`,
            tags: ['priority' ],
        }]
    })
 }













    return (
     
    <>
     <HeaderApp />
   <DividerSVG className="svg-divider" />
   <div className="boa-container-wrapper">
            <Sidebar />
            <div className={styles.sidebar}></div>
    
        <div className="boa-container">
                    <main className="boa-board-content">
                        {columnItems && columnItems.map((columnItem, index) => {
                            return (
                                <div className="boa-list" >
                                <div className="boa-list-header">
                                    <h3 style={{ color: columnItem.titleColor }}>{columnItem.name}</h3>
                                    <button className="add-list" onClick={_ => addTodoListItem(index)}>+</button>
                                    <button className="more-options">...</button>
                                </div>
                                <div className="boa-tasks">
                                    {todoItems && todoItems.map(todoItem =>{
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