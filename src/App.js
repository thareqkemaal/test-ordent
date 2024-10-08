import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import TaskSatu from './pages/task-1';
import TaskDua from './pages/task-2';
import TaskTiga from './pages/task-3';
import TaskEmpat from './pages/task-4';
import NotFound from './pages/notfound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/task-1' element={<TaskSatu />} />
        <Route path='/task-2' element={<TaskDua />} />
        <Route path='/task-3' element={<TaskTiga />} />
        <Route path='/task-4' element={<TaskEmpat />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
