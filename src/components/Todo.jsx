import React from 'react';

const Todo =({text, setTodos, completed}) =>{
    const element = ({completed}=== true) ? <i className="fas fa-check"></i> : <i className="fas fa"></i>
    console.log(text);
    return (
        <div className="todo">
            <li className="todo-item"> {text}</li>
            <button >
                {element}
            </button>
            <button>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
 
export default Todo;