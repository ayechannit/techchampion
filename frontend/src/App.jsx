import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [tier, setTier] = useState('Adult');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaderboard();
  }, [tier]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_BASE_URL}/api/leaderboard?tier=${tier}`);
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
      }
      const data = await response.json();
      setLeaderboard(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typing Championship Leaderboard</h1>
        <div className="tier-selector">
          <button 
            className={tier === 'Adult' ? 'active' : ''} 
            onClick={() => setTier('Adult Tier')}
          >
            Adult
          </button>
          <button 
            className={tier === 'Youth' ? 'active' : ''} 
            onClick={() => setTier('Youth Tier')}
          >
            Youth
          </button>
        </div>
      </header>

      <main>
        {loading && <p>Loading leaderboard...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Tier</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Rank}</td>
                    <td>{item.Player_name}</td>
                    <td>{item.Score || item.WPM}</td>
                    <td>{item.Tier}</td>
                  </tr>
                ))}
                {leaderboard.length === 0 && (
                  <tr>
                    <td colSpan="4">No data available for this tier.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
