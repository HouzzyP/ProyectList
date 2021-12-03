import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Profile from './pages/Profile'

function App() {
  return (
    <>
    <Router >
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Games />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
