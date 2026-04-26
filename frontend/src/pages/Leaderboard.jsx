import { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [adultLeaderboard, setAdultLeaderboard] = useState([]);
  const [youthLeaderboard, setYouthLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(() => {
    const today = new Date();
    const deadline = new Date('2026-05-09T00:00:00');
    return today < deadline;
  });

  useEffect(() => {
    const fetchLeaderboards = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        
        const [adultRes, youthRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/leaderboard?tier=Adult Tier`),
          fetch(`${API_BASE_URL}/api/leaderboard?tier=Youth Tier`)
        ]);

        if (!adultRes.ok || !youthRes.ok) {
          throw new Error('Failed to fetch leaderboards');
        }

        const adultData = await adultRes.json();
        const youthData = await youthRes.json();

        setAdultLeaderboard(adultData);
        setYouthLeaderboard(youthData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboards();
  }, []);

  const renderTableRows = (data) => {
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="7" style={{ textAlign: 'center' }}>No data available</td>
        </tr>
      );
    }

    return data.map((item, index) => {
      const rankClass = index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : '';
      const rowClass = index < 3 ? 'top-rank' : '';

      return (
        <tr key={index} className={rowClass}>
          <td><span className={`rank ${rankClass}`}>{index + 1}</span></td>
          <td>{item.Player_name || ''}</td>
          <td>{item.Score || 0}</td>
          <td>{item.WPM || 0}</td>
          <td>{item.Accuracy || '0%'}</td>
          <td>{item.Mistake || 0}</td>
          <td>{item.Branch_Name || item.Location || ''}</td>
        </tr>
      );
    });
  };

  return (
    <main>
      <section className="title-panel">
        <div className="tournament-branding">
          <img className="tournament-logo" src="/assets/tournament-logo.png" alt="Typing Championship 2026 tournament logo" />
          <div className="title-copy">
            <p className="eyebrow">Official standings</p>
            <h1>2026 Typing Championship Leaderboard</h1>
            <p className="hero-text">Adult Tier and Youth Tier rankings for the competition arena.</p>
          </div>
        </div>

        <aside className="hero-partners" aria-label="Tournament sponsors and organisers">
          <div className="partner-card">
            <span>Main Sponsor and Organised By</span>
            <div className="organiser-logos">
              <img className="organiser-logo logo-nyein" src="/assets/nyein-techno-logo.png" alt="NYEIN Techno logo" />
              <img className="organiser-logo logo-it" src="/assets/sponsor-logo.png" alt="IT Studio logo" />
            </div>
            <strong>NYEIN Techno x IT Studio</strong>
          </div>

          <div className="partner-card accessory-card">
            <span>Accessories Prize Sponsor</span>
            <img className="partner-fantech-logo" src="/assets/fantech-logo.jpg" alt="Fantech Myanmar logo" />
            <strong>Fantech Myanmar</strong>
          </div>
        </aside>
      </section>

      {error && <div className="rule-note" style={{ marginBottom: '22px' }}>Error: {error}</div>}
      {loading && <div className="hero-text" style={{ textAlign: 'center', padding: '40px' }}>Loading leaderboards...</div>}

      <section className="leaderboard-layout" aria-label="Competition leaderboards">
        <article className="leaderboard-card adult-tier">
          <div className="card-heading">
            <div>
              <p className="eyebrow">Adult Tier</p>
              <h2>Pro Division</h2>
              <p className="prize-label">Winner Prize - 3,000,000 ks</p>
            </div>
            <span className="tier-badge">16 and above</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>PLAYER</th>
                  <th>Score</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                  <th>Mistake</th>
                  <th>Branch_Name</th>
                </tr>
              </thead>
              <tbody data-tier="adult">
                {!loading && renderTableRows(adultLeaderboard)}
              </tbody>
            </table>
          </div>
        </article>

        <article className="leaderboard-card youth-tier">
          <div className="card-heading">
            <div>
              <p className="eyebrow">Youth Tier</p>
              <h2>Rising Division</h2>
              <p className="prize-label">Winner Prize - 2,000,000 ks</p>
            </div>
            <span className="tier-badge">Under 16</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>PLAYER</th>
                  <th>Score</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                  <th>Mistake</th>
                  <th>Branch_Name</th>
                </tr>
              </thead>
              <tbody data-tier="youth">
                {!loading && renderTableRows(youthLeaderboard)}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Leaderboard Notice</h3>
            <p>Heads up! 🚀 The leaderboard scores you see right now are just a test run. The real results will be revealed after May 9, 2026. Stay tuned!</p>
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              Got it
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Leaderboard;
