import API from "./api";

//login ku
export const loginUser=async(data)=>{
    const res=await API.post("/auth/login",data);

    localStorage.setItem("user",JSON.stringify(res.data));
    return res.data;
};
//ippo register
export const registerUser=async(data)=>{
    const res=await API.post("/auth/register",data);
    return res.data;
};