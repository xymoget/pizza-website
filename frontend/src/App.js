import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Pizza from "./pages/Pizza";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Pizzas from "./pages/Pizzas";

function Logout() {
    localStorage.clear();
    return <Navigate to="/"></Navigate>
}

function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
}

function App() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/logout" element={<Logout />}/>
                    <Route path="/register" element={<RegisterAndLogout />}/>
                    <Route path="/pizzas/:id" element={<Pizza />} />
                    <Route path="/pizzas" element={<Pizzas />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}

export default App