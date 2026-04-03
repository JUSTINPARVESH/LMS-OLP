import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("user");
        logout();
        navigate("/");
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to LMS</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;