import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("user");
        logout();
        navigate("/");
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome to LMS {user?.name }</h2>
            <p>Email: {user?.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;