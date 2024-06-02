import React, { useContext, useState } from 'react';
import '../styles/context.css';
import { todoContext } from '..';

function Context() {
  const { todos, addTodo, toggleTodo, removeTodo } = useContext(todoContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <div className="context-container">
      <div>
        <h1>TODO App</h1>
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new todo"
            className="todo-input"
          />
          <button type="submit" className="add-button">Add</button>
        </form>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className={todo.completed ? 'todo-text completed' : 'todo-text'}>
                {todo.text}
              </span>
              <button onClick={() => removeTodo(todo.id)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Context;
