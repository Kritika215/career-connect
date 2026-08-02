import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {

        logout();

        navigate("/login");

    }

    return (

        <>
            <Navbar />

            <div className="dashboard">

                <div className="dashboard-card">

                    <h1>Welcome 👋</h1>

                    <h2>{user?.email}</h2>

                    <p>
                        You're successfully logged in to CareerConnect.
                    </p>

                    <div className="dashboard-buttons">

                        <button
                            onClick={()=>navigate("/profile")}
                        >
                            My Profile
                        </button>

                        <button
                            onClick={()=>navigate("/saved")}
                        >
                            Saved Jobs
                        </button>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Dashboard;