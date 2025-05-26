import './HealthStatusCards.css';
import healthCards from '../data/healthCards';

const HealthStatusCards = () => (
  <div className="health-cards">
    {healthCards.map(card => (
      <div key={card.title} className="health-card">
        <div className="card-header">
          <img src={card.icon} alt={card.title} className="card-icon" />
          <h4>{card.title}</h4>
        </div>
        <p className="card-date">Date: {card.date}</p>
        <div className="progress-bar">
          <div className="progress" style={{ backgroundColor: card.color, width: card.level }}></div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
