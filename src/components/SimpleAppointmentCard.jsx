import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="appointment-card">
      <span className="icon">{icon}</span>
      <div>
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
