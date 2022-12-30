import './App.css';
import Todo from './pages/TodoPage';
import Followers from './pages/FollowersPage';
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<MainLayout />} >
          <Route strict path="/" element={<Todo />} />
          <Route strict exact path="/followers" element={<Followers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
