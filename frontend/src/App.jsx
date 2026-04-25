import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Leaderboard from './pages/Leaderboard';
import Rules from './pages/Rules';
import Location from './pages/Location';
import Sponsor from './pages/Sponsor';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/location" element={<Location />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
