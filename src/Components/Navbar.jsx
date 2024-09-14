import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <img src="public/images/DH.png" alt="DH Odonto" className="navbar-logo"/>
    <div className="navbar-content">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          <span className="icon">🌙</span>
        </button>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
