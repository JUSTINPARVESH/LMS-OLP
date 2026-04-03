import {useState} from "react";
import {loginUser} from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form, setForm] = useState({
        email:"",
        password:"",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(form);
            console.log("login success:",data);

            alert("Login successful");
            login(data);
            navigate("/dashboard"); // Redirect to dashboard on successful login
        } catch(error){
          alert(error.message || "Login Failed");
        }
    };
    return(
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input type ="email" placeholder ="email"
                onChange={(e) =>setForm({...form, email:e.target.value})}
                />

                <input type ="password" placeholder ="password"
                onChange={(e) =>setForm({...form,password:e.target.value})}
                />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};
export default Login;
