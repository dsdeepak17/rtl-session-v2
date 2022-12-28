import './App.css';
import Todo from './components/Todo/Todo';
import Followers from './components/Followers/Followers';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route strict path="/" element={<Todo />} />
        <Route strict exact path="/followers" element={<Followers />} />
      </Routes>
    </div>
  );
}

export default App;
