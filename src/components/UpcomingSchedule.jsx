import './UpcomingSchedule.css';
import appointments from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="schedule-day">
        <h4>On Thursday</h4>
        {appointments.thursday.map((appt, idx) => (
          <SimpleAppointmentCard key={idx} {...appt} />
        ))}
      </div>
      <div className="schedule-day">
        <h4>On Saturday</h4>
        {appointments.saturday.map((appt, idx) => (
          <SimpleAppointmentCard key={idx} {...appt} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
