import React from 'react';


const ToDoList =({todos, deleteTodo})=> {

    const todoList = todos.length ? (
        todos.map(todo=>{
            return (
                <div className="todo" key={todo.id}>
                    <span>{todo.content}</span>
                    <button  onClick={()=> {deleteTodo(todo.id)}} >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        })

    ) : (<h3 className="center black-text">You have no todos left</h3>)
        
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todoList}
           </ul>
       </div>
    );
  
}
 
export default ToDoList;