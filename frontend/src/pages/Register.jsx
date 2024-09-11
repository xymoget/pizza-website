import react from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
    return (
        <div>
            <Header />
            <div className="form-wrapper">
                <LoginRegisterForm method="register" route="api/users/create/"></LoginRegisterForm>      
            </div>
            <Footer />
        </div>
    )
}

export default Register;