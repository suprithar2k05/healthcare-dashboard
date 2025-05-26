import './AnatomySection.css';
import bodyImage from '../assets/body.png';
import indicators from '../data/healthData';

const AnatomySection = () => (
  <div className="anatomy-container">
    <img src={bodyImage} alt="Human Body" className="anatomy-img" />
    {indicators.map((indicator, i) => (
      <div key={i} className={`indicator ${indicator.className}`} style={{ top: indicator.top, left: indicator.left }}>
        <span>{indicator.label}</span>
      </div>
    ))}
  </div>
);

export default AnatomySection;
