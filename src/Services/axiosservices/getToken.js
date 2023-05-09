import { toast } from "react-toastify";
import { axiosInstance } from "./axiosIntercepter";

export const getLocalAccessToken=()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    return token;
}

export const getLocalRefreshToken=()=>{
    const refreshToken = JSON.parse(localStorage.getItem("refreshtoken"))
    return refreshToken;
}

export const getRefreshToken=async()=>{
    try {
      return await axiosInstance.post("http://localhost:5000/refresh-token", {
        refreshtoken: getLocalRefreshToken(),
      });
    }catch(error){
      toast.error(error?.response?.data?.msg);
    }
  }