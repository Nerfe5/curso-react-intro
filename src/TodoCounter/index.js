import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const allCompleted = completed === total && total > 0;
  
  return (
    <h1 className="TodoCounter">
      {allCompleted ? (
        '🎉 ¡Felicidades! Completaste todos tus TODOS 🎊'
      ) : (
        `Has completado ${completed} de ${total} TODOS`
      )}
    </h1>
  );
}

export { TodoCounter };