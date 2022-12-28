import './App.css';
import Todo from './pages/TodoPage';
import Followers from './pages/FollowersPage';
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
