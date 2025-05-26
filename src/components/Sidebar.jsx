import './Sidebar.css';
import navLinks from '../data/navigation';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo"><span className="highlight">Health</span>care.</h2>
      <nav>
        <h4 className="section-title">General</h4>
        <ul className="nav-list">
          {navLinks.map(link => (
            <li key={link.id} className="nav-item">
              <img src={link.icon} alt={`${link.label} icon`} className="nav-icon" />
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
