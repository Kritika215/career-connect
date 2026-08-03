import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

function Dashboard() {

  const savedJobs =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

  const appliedJobs =
    JSON.parse(localStorage.getItem("applications")) || [];

  const profile =
    JSON.parse(localStorage.getItem("profile")) || {};

  let profileCompleted = 0;

  if (profile.name) profileCompleted += 20;
  if (profile.email) profileCompleted += 20;
  if (profile.college) profileCompleted += 20;
  if (profile.skills) profileCompleted += 20;
  if (profile.about) profileCompleted += 20;

  const data = [
    {
      name: "Saved",
      value: savedJobs.length,
    },
    {
      name: "Applied",
      value: appliedJobs.length,
    },
    {
      name: "Profile %",
      value: profileCompleted,
    },
  ];

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <h1>Candidate Dashboard</h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>{savedJobs.length}</h2>
            <p>Saved Jobs</p>
          </div>

          <div className="stat-card">
            <h2>{appliedJobs.length}</h2>
            <p>Applications</p>
          </div>

          <div className="stat-card">
            <h2>{profileCompleted}%</h2>
            <p>Profile Completed</p>
          </div>

        </div>

        <div className="chart-box">

          <h2>Overview</h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <BarChart data={data}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                    dataKey="value"
                    fill="#2563eb"
                    radius={[10,10,0,0]}
                />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="quick-actions">

  <h2>Quick Actions</h2>

  <div className="action-grid">

    <Link to="/jobs" className="action-card">
      <span>💼</span>
      <h3>Browse Jobs</h3>
      <p>Explore the latest opportunities.</p>
    </Link>

    <Link to="/saved" className="action-card">
      <span>❤️</span>
      <h3>Saved Jobs</h3>
      <p>View your saved jobs.</p>
    </Link>

    <Link to="/applications" className="action-card">
      <span>📄</span>
      <h3>Applications</h3>
      <p>Track your job applications.</p>
    </Link>

    <Link to="/profile" className="action-card">
      <span>👤</span>
      <h3>Edit Profile</h3>
      <p>Update your profile information.</p>
    </Link>

  </div>

</div>

      </div>

    </>

  );

}

export default Dashboard;