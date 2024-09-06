import react from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";

function Register() {
    return (<div>
            <h1>Register</h1>
            <LoginRegisterForm method="register" route="api/users/create/"></LoginRegisterForm>
        </div>
    )
}

export default Register;