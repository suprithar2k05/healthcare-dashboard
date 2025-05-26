import './DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-lower">
        <CalendarView />
        <div className="right-section">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
