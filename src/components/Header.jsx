import './Header.css';
import avatar from '../assets/avatar.png';
import bell from '../assets/bell.svg';

const Header = () => (
  <header className="dashboard-header">
    <input type="text" className="search-input" placeholder="Search..." />
    <div className="header-actions">
      <img src={bell} alt="Notifications" className="icon" />
      <img src={avatar} alt="User" className="avatar" />
      <button className="add-button">+</button>
    </div>
  </header>
);

export default Header;
