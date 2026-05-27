import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Terminar el curso de React', completed: true },
  { text: 'Terminar el curso de Programar en Bash', completed: false },
  { text: 'Hacer el portal UMAE HE', completed: false },
  { text: 'Concluir el sistema de gestión de Equipo médico', completed: false },
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </div>
  );
}

export default App;
