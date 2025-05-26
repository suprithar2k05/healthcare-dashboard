import './DashboardOverview.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => (
  <div className="overview-section">
    <AnatomySection />
    <HealthStatusCards />
  </div>
);

export default DashboardOverview;
