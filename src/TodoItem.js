import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`TodoItem-check ${props.completed ? 'TodoItem-check--completed' : ''}`}
      >
        ✓
      </span>
      <p className={`TodoItem-text ${props.completed ? 'TodoItem-text--completed' : ''}`}>
        {props.text}
      </p>
      <span className="TodoItem-delete">✕</span>
    </li>
  );
}

export { TodoItem };