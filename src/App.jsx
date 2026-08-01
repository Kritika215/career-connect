import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Jobs from "./pages/Jobs/Jobs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import JobDetails from "./pages/JobDetails/JobDetails";
import RecruiterDashboard from "./pages/RecruiterDashboard/RecruiterDashboard";
import PostJob from "./pages/PostJob/PostJob";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>
  }
/>
     <Route
path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
     <Route
  path="/recruiter"
  element={
    <ProtectedRoute>
      <RecruiterDashboard />
    </ProtectedRoute>
  }
/>
      <Route
  path="/post-job"
  element={
    <ProtectedRoute>
      <PostJob />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;