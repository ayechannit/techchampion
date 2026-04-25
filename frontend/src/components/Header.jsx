import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return 'active';
    if (path !== '/' && location.pathname.startsWith(path)) return 'active';
    return '';
  };

  return (
    <header className="site-header">
      <Link className={`brand-link ${isActive('/')}`} to="/">Leaderboard</Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className={isActive('/rules')} to="/rules">Player Rules</Link>
        <Link className={isActive('/location')} to="/location">Location</Link>
        <Link className={isActive('/sponsor')} to="/sponsor">Sponsor</Link>
        <Link className={isActive('/about')} to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
