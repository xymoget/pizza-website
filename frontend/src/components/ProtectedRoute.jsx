import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from "react"
import { checkAuth } from "../utils"

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        verifyAuth();
    }, [])

    const verifyAuth = async () => {
        const result = await checkAuth();
        setIsAuthorized(result);
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" ></Navigate>

}

export default ProtectedRoute;