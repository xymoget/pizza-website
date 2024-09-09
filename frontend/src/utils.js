import { jwtDecode } from "jwt-decode";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";
import api from "./api";

export async function checkAuth() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token === null) {
        return false;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;
    
    if (tokenExpiration < now) {
        console.log(2);
        return (await refreshToken());
    } else {
        return true;
    }
}

export async function refreshToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
        const res = await api.post("/api/token/refresh/", { refresh: refreshToken });
        if (res.status === 200) {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}