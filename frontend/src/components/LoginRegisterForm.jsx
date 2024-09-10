import react from "react";
import { useEffect, useState } from "react";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

function LoginRegisterForm({route, method}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        const res = await api.post(route, {username, password});
        if (method === "login") {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate('/');
        } else {
            navigate('/login');
        }
    }

    return (<Box 
        component="form" 
        onSubmit={submitForm} 
        sx={{
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '400px', 
            minWidth: '400px',
            margin: 'auto', 
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
    >
        <Typography variant="h5" align="center" gutterBottom>
            {method === "login" ? "Login" : "Register"}
        </Typography>
        
        <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
        />
        <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
        />
        <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            fullWidth
        >
            {method === "login" ? "Login" : "Register"}
        </Button>
    </Box>)
}

export default LoginRegisterForm;