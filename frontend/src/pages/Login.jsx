import react from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";

function Login() {
    return (<div>
            <h1>Login</h1>
            <LoginRegisterForm method="login" route="api/token/"></LoginRegisterForm>
        </div>
    )
}

export default Login;