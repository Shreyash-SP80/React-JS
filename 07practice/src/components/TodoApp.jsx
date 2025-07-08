import React, { useState, useEffect, useRef, useCallback } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(() => {
    // Load from localStorage on first render
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const inputRef = useRef(null);

  // Focus on input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add Task (memoized)
  const addTask = useCallback(() => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
    inputRef.current.focus();
  }, [task, todos]);

  // Delete Task
  const deleteTask = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>📝 To-Do List</h2>

      <div style={{ marginBottom: 10 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          style={{ padding: 10, width: "70%", marginRight: 10 }}
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            {todo.text}
            <button
              onClick={() => deleteTask(todo.id)}
              style={{ marginLeft: 10 }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
