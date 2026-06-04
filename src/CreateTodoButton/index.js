import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton"
    onClick={
      (event) => {
        console.log('Click en el botón')
        console.log(event)
        console.log(event.target)
      }
    }
    >
      <span>+</span>
    </button>
  );
}

export { CreateTodoButton };