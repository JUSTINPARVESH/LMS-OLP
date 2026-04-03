import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [form,setForm] = useState({
        name:"",
        email:"",
        password:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerUser(form);

            alert ("Registration successful");
            navigate("/"); // back to login
        } catch(error) {
          alert(error.response?.data?.message || "Registration Failed");
        }
    };
    return (
        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name"
                onChange={(e) => setForm({...form, name: e.target.value})}
                />

                <input type="email" placeholder="email"
                onChange={(e) => setForm({...form, email: e.target.value})}
                />

                <input type="password" placeholder="password"
                onChange={(e) => setForm({...form, password: e.target.value})}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;