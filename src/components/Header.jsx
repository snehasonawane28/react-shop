import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg"></img>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        
      </nav>
    </header>
  );
}

export default Header;
