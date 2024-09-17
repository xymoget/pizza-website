import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddPizzaButton from './AddPizzaButton';

const PizzaCard = ({pizza}) => {
    return (
        <Link to={`/pizzas/${pizza.id}`} style={ {textDecoration: 'none'} }>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={pizza.picture}
                    alt={pizza.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {pizza.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pizza.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" color="primary">
                            ${pizza.price.toFixed(2)}
                        </Typography>
                    </Box>
                    <AddPizzaButton pizzaId={pizza.id} />
                </CardContent>
            </Card>
        </Link> 
    );
};

export default PizzaCard;