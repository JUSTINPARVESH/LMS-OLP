import axios from "axios";
const API=axios.create({
    baseURL:"http://localhost:5001/api",
});
//Token automatic aa add aidum
API.interceptors.request.use((req)=>{
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.token) {
        req.headers.Authorization = 'Bearer${user.token}';
    }
    return req;
});
export default API;