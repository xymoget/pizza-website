import react from "react";
import { useState, useEffect } from "react";
import api from "../api";
import PizzaCard from "../components/PizzaCard";
import { Box, Button, Typography, Container } from '@mui/material';
import "../styles/Home.css"
import Faq from "../components/Faq";

function Home() {
    return (
        <Box className="hero-section">
            <Container>
                <Box 
                    sx={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '40px',   // Added some padding for extra spacing
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to Pizza Shop
                    </Typography>
                    <Typography variant="h6" component="p" gutterBottom>
                        The best pizza in town, made with love and fresh ingredients.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        sx={{ mt: 4 }}
                        href="/pizzas"
                    >
                        Order Now
                    </Button>
                </Box>
                <Faq />
            </Container>
        </Box>
    );
}

export default Home;