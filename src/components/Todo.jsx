import {BsFillTrashFill} from "react-icons/bs"
import {AiFillFileAdd} from "react-icons/ai"
import React from 'react'


const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div className="icons">
            <button><AiFillFileAdd onClick={() => editTodo(task.id)}/></button>
            <button><BsFillTrashFill onClick={() => deleteTodo(task.id)}/></button>
        </div>
    </div>
  )
}

export default Todo
