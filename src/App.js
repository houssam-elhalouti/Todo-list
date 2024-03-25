import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import TodoList from './Components/TodoList';
import {uuid} from 'uuid';

function App() {

  
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
           
            <TodoList />
          </div>
        </div>
      </div>
     

    </div>
  );
}

export default App;
