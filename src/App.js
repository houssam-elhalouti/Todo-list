import logo from './logo.svg';
import './App.css';

import Create from './Composants/Create';
import Update from './Composants/Update';
import UserList from './Composants/UserList'

import {Routes, Route, BrowserRouter} from 'react-router-dom';



function App() {

  
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
