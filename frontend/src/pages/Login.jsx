import react from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../utils";

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

    return (<div>
            <h1>Login</h1>
            <LoginRegisterForm method="login" route="api/token/"></LoginRegisterForm>
        </div>
    )
}

export default Login;