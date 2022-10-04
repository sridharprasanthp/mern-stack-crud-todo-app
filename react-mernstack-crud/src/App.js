import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavLinks from './NavLink/NavLink';
import CreateToDo from './Pages/Create-ToDo';
import EditToDo from './Pages/Edit-ToDo';
import ToDoList from './Pages/ToDoList';

function App() {
  return (
    <div className="App">
      <NavLinks></NavLinks>
      <Routes>
        <Route path='/todolist' element={<ToDoList></ToDoList>}></Route>
        <Route path='/edit/:id' element={<EditToDo></EditToDo>}></Route>
        <Route path='/create' element={<CreateToDo></CreateToDo>}></Route>
      </Routes>

    </div>
  );
}

export default App;
