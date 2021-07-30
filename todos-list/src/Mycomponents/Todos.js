import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    let mystyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={mystyle}>
            <h3 className="text-center my-3">Todos List </h3>
            {props.todos.length===0?"No todos to be done":
            props.todos.map((todo)=>{
                return (<TodoItem todo= {todo} key={todo.sno} onDelete={props.onDelete}/>)

            }
            )}
                </div>
    )
}
