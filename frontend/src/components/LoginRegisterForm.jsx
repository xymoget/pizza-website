import react from "react";
import { useEffect, useState } from "react";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";

function LoginRegisterForm({route, method}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitForm = async (e) => {
        const res = await api.post(route, {username, password});
        if (method === "login") {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate('/');
        } else {
            navigate('/login');
        }
    }

    return (<form onSubmit={submitForm}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
        <button type="submit">{method}</button>
    </form>)
}

export default LoginRegisterForm;