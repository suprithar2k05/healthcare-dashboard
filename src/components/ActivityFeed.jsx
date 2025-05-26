import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <p className="subtitle">3 appointments on this week</p>
      <div className="bar-chart">
        {['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'].map((day, i) => (
          <div className="bar" key={i}>
            <div className="bar-inner" style={{ height: `${40 + (i * 5)}px` }}></div>
            <span>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
