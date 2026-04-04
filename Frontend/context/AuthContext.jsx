import { useState } from "react";
import { AuthContext } from "./authContext";

export { AuthContext };

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    //login ku
    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };
    //logout ku
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}            
        </AuthContext.Provider>
    );
};