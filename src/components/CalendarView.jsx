import './CalendarView.css';
import calendarData from '../data/calendarData';

const CalendarView = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="arrow-buttons">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day, i) => (
          <div key={i} className={`calendar-cell ${day.active ? 'active' : ''}`}>
            <span className="calendar-day">{days[i]}</span>
            <span className="calendar-date">{day.date}</span>
            <div className="time-slots">
              {day.times.map((time, index) => (
                <span key={index} className="time-slot">{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="calendar-card dentist">
          <p className="appt-type">Dentist</p>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="calendar-card physio">
          <p className="appt-type">Physiotherapy Appointment</p>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
