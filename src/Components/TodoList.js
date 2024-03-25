import React,{useState} from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const currentDate = new Date().toDateString();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== '') {
      setTodos([...todos, { id: Date.now(), task: todoInput }]);
      setTodoInput('');
    }
  };

  const handleEditTodo = (id, newTask) => {
    if (newTask.trim() !== '') {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);

    } else {
      alert("Please enter a valid task.");
    }
  };
  
  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className='TodoList'>
       <div className='TodoInput'>
        <h1 className='text-center text-secondary'>Todo List of the Day: {currentDate}</h1>
        <div className="card card-body my-3">
            <form onSubmit={handleAddTodo}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book w-100 py-2 "></i> 
                        </div>
                    </div>
                    <input
                      type="text"
                      value={todoInput}
                      onChange={(e)=> setTodoInput(e.target.value)}
                      className="form-control"
                      placeholder='add task'
                   />
                </div>
                <button type="submit" className='btn w-100 btn-primary mt-3' >Add Item</button>
            </form>
        </div>
      </div>
      <ul className="list-group my-5">
        {todos.map((todo) => (
          <div className='TodoItem' key={todo.id}>
            <li className="list-group-item d-flex justify-content-between my-2">
              <h6>{todo.task}</h6>
              <div className="todo-icon">
                <span className="mx-2 text-success" onClick={() => handleEditTodo(todo.id, prompt('Enter new task:', todo.task))}>
                  <i className="fas fa-edit" style={{cursor:'pointer'}}></i>
                </span>
                <span className="mx-2 text-danger" onClick={() => handleDeleteTodo(todo.id)}>
                  <i className="fas fa-trash" style={{cursor:'pointer'}}></i> 
                </span>
              </div>
            </li>
          </div>
        ))}
        <button className='btn btn-danger w-100 mt-5' onClick={() => setTodos([])}>Clear List</button>
      </ul>
    </div>
  )
}
