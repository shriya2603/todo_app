import React, {Component} from 'react';


class AddTodo extends Component {
    state = { 
        content : ""
     }

    styles ={
        background: "white",
        padding: "0.5rem",
        fontSize: "2rem",
        border: "none",
    }

    handleChange =(e)=>{
        this.setState({content: e.target.value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props);
        console.log(this.state.content);
        if(this.state.content.length){
            this.props.addTodo({content : this.state.content});
        }else {
            alert("A Todo can't be empty ");
        }
    }

    render() { 
        return ( 
            <div>
                <form >
                    <input style={this.styles} placeholder="Add a Todo " className="todo" type="text" onChange={this.handleChange} ></input>
                    <button style={this.styles} className="todo-button" type="submit" onClick={this.handleSubmit} >
                    <i className="fas fa-plus-square"></i>
                </button>
                </form>
            </div>

        );
    }
}
 
export default AddTodo;