//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import AddTodo from './components/AddForm';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = { 
    todos : [],
  }

  deleteTodo =(id) =>{
    console.log("Delete id " +id);
    const todos = this.state.todos.filter(todo=>{
        return todo.id !== id;
    });
    this.setState({todos : todos});
  }

  addTodo =(userTodo) =>{
    const todos= this.state.todos;
    userTodo.id = Math.random() * 1000;
    console.log(userTodo);
    todos.push(userTodo);
    this.setState({count: this.state.count+1, todos: todos});
    console.log(todos);
  }

  render() { 
    return (  
      <div className="todo-app container">
        <h1 className="center black-text"> To do's List </h1>
        <AddTodo addTodo={this.addTodo} />
        <ToDoList todos={this.state.todos}  deleteTodo={this.deleteTodo} />

      </div>
    );
  }
}
 
export default App;
