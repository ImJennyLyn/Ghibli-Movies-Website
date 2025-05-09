import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.png'; // Adjust the path to your actual file

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Studio Ghibli" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/popular">Popular</Link></li>
        <li><Link to="/mylist">My List</Link></li>
      </ul>
      <input type="text" placeholder="Search..." />
      <div className="profile-icon">👤</div>
    </nav>
  );
}
