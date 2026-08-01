import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaBriefcase } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const { user, logout } = useAuth();

  return (

    <nav className="navbar">

      <div className="logo">

        <FaBriefcase className="logo-icon"/>

        <Link to="/" className="logo-link">
          CareerConnect
        </Link>

      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/jobs">Jobs</Link></li>

        <li><Link to="/dashboard">Dashboard</Link></li>

        <li><Link to="/profile">Profile</Link></li>

      </ul>

      <div className="auth">

        {
          user ?

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

          :

          <>

            <Link to="/login">

              <button className="login-btn">
                Login
              </button>

            </Link>

            <Link to="/register">

              <button className="register-btn">
                Register
              </button>

            </Link>

          </>

        }

      </div>

    </nav>

  );

}

export default Navbar;