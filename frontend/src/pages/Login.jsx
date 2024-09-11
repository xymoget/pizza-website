import react from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../utils";
import "../styles/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <div>
            <Header />
            <div className="form-wrapper">
                <LoginRegisterForm method="login" route="api/token/"></LoginRegisterForm>
            </div>
            <Footer />
        </div>
    )
}

export default Login;