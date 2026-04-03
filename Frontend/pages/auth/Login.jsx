import {useState} from "react";
import {loginUser} from "../../services/authService";

const Login = () => {
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
        </div>
    );
};
export default Login;
