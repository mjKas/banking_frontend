import axios from "axios";
//localhost
//const API_URL = "http://localhost:8080/auth";
//AWS 
const API_URL = "http://54.236.21.144:8080/auth";

export const signup = async (data) => {
    return axios.post(`${API_URL}/signup`, data);
};

export const verifySignupOtp = async (data) => {
    return axios.post(`${API_URL}/verify`, data);
};

export const login = async (data) => {
    return axios.post(`${API_URL}/login`, data);
};

export const verifyLoginOtp = async (data) => {
    return axios.post(
        `${API_URL}/verify-login-otp`,
        data
    );
};

export const getProtectedData = async () => {

    const token = localStorage.getItem("token");

    return axios.get("http://localhost:8080/api/test", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};