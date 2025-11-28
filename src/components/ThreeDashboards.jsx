
import '../components/ThreeDashboards.css';

const dashboards = [
  {
    title: "Admin Dashboard",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    features: ["Manage Students & Staff", "Fee Collection & Tracking", "Certificate Generation", "Bulk Data Upload", "Advanced Analytics"],
    description: "Complete control over your school operations",
    iconClass: "icon-blue",
    cardClass: "card-blue",
    circleClass: "circle-blue"
  },
  {
    title: "Parent App",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    features: ["View Assignments", "Fee Payment Timeline", "Chat & Call Teachers", "Track Progress", "Real-time Notifications"],
    description: "Stay connected with your child's education",
    iconClass: "icon-purple",
    cardClass: "card-purple",
    circleClass: "circle-purple"
  },
  {
    title: "Teacher App",
    icon: "M12 14l9-5-9-5-9 5 9 5zM4 14l9 5 9-5M4 19l9 5 9-5",
    features: ["Streamline teaching and communication", "Assign & Grade Work", "Track Completion", "Manage Requests", "Student Analytics", "Parent Communication"],
    description: "Streamline teaching and communication",
    iconClass: "icon-emerald",
    cardClass: "card-emerald",
    circleClass: "circle-emerald"
  }
];

const DashboardCard = ({ dashboard }) => {
  return (
    <div className={`dashboard-card ${dashboard.cardClass} mb-4`}>
      {/* Large Circle in Top Right */}
      <div className={`card-circle ${dashboard.circleClass}`}></div>

      {/* Icon Area */}
      <div className={`icon-container ${dashboard.iconClass}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d={dashboard.icon} />
        </svg>
      </div>

      {/* Content */}
      <h3 className="h4 font-weight-bold text-white mt-1 mb-1">{dashboard.title}</h3>
      <p className="text-white small mb-4">{dashboard.description}</p>

      {/* Feature List */}
      <ul className="feature-list">
        {dashboard.features.map((feature, index) => (
          <li key={index}>
            {/* Checkmark Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
const ThreeDashboards = () => {
  return (
    <div className="dashboard-section">
      <div className="container">

        {/* Header Section */}
        <header className="text-center mb-5">
          <h2 className="display-4 font-weight-bolder mb-3 text-white">
            <span className="gradient-header-text">Three Powerful</span>
            <span className="text-white "><b className="dasboard"> Dashboards</b></span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '40rem' }}>
            Purpose-built interfaces for every stakeholder in your educational ecosystem
          </p>
        </header>

        <div className="dashboard-connection-wrapper">
          <div className="row justify-content-center">
            {dashboards.map((dashboard, index) => (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <DashboardCard dashboard={dashboard} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThreeDashboards;