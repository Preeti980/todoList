import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import './Todo.css'

const Todo = () => {
let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false }]);
let [newTodo, setNewTodo]=useState("");

let addNewTask=()=>{
    setTodos((prevTodos)=>{
    return    [...prevTodos,{task:newTodo, id:uuidv4(), isDone:false}]
});
    setNewTodo("");
};

let updateTodovalue=(event)=>{
    setNewTodo(event.target.value);
};
let deleteTodo=(id)=>{
   setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
}
let upperCaseAll=()=>{
    setTodos((prevTasks)=>
        prevTasks.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }
        })
    )
}

let markAsDone=(id)=>{
    setTodos((prevTasks)=>
    prevTasks.map((todo)=>{
        if(todo.id==id){
            return{
              ...todo,
                isDone:true,
            }
        }else{
            return todo;
        }
        
    })

    );
};

  return (
   
     <div className="todo">
        <h2>Todo App</h2>
        {/* <form className='todo-form'> */}
        <input className='todo-input' 
        placeholder='enter your task' value={newTodo} 
        onChange={updateTodovalue}></input>
        <button className='addtask' onClick={ addNewTask}>
            Add Task</button>
                
       
        {/* <br></br>
        <br></br>
        <br></br>
        <hr></hr> */}
        <hr></hr>
        <h4>Todo List</h4>
        <div className='todoList'>
        <ul  className="allTodos">
            {
                todos.map((todo)=>{
                  return <li key={todo.id} className='singleTodo' >
                    <span style={todo.isDone ?
                         {textDecorationLine :"line-through"} :
                          {}} className="todoText" >
                            {todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)} className='todo-delete'>delete</button>
                    <button onClick={()=>markAsDone(todo.id)  } 
                    className='todo-mark' >Mark As Done</button>
                    </li>
                })
            }
        </ul>
        </div>
        <br></br>
        
        <button onClick={upperCaseAll} className='todo-upperCase'>UpperCase All </button>
     {/* </form> */}
     </div>
   
  )
}

export default Todo;