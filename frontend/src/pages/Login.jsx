import react from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../utils";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        navigateAuth();
    }, [])

    const navigateAuth = async () => {
        if (await checkAuth() === true) {
            navigate("/");
        }
    }

    return (
        <div className="form-wrapper">
            <LoginRegisterForm method="login" route="api/token/"></LoginRegisterForm>
        </div>
    )
}

export default Login;