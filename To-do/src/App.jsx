import React, {useState} from "react";
import './App.css'; // Assuming you have some basic styles in App.css
export default function TodoList(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo=()=>{
    if(input.trim()=== "")return

const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="todo-app">      
      <h1>Todo List</h1>
      <input className="todo-input"
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={addTodo} className="add-button">Add</button>
      <ul className="todo-unordered-list">
        {todos.map(todo => (
          <li key={todo.id}  className="todo-item">
            <input className="item-checkbox"
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}/>
            <span 
            className="todo-text"
              style={{textDecoration: todo.completed ? "line-through" : "none"}}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

