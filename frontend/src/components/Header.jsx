import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { checkAuth } from '../utils';
import { useEffect, useState } from 'react';
import Cart from './Cart';

const Header = () => {
    const [isAuthorized, setIsAuthorized] = useState();

    useEffect(() => {
        verifyAuth();
    }, [])

    const verifyAuth = async () => {
        setIsAuthorized(await checkAuth());
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Pizza Shop
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/pizzas">Pizzas</Button>
                
                {isAuthorized ? <Cart /> : <Button color="inherit" component={Link} to="/login">Login</Button>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
