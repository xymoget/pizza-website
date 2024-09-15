import React from "react";
import { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, Typography, Box, IconButton } from '@mui/material';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import api from "../api";

function Cart() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getCartProducts();
    }, [])

    const getCartProducts = () => {
        api.get("/api/cart/")
        .then((res) => res.data)
        .then((data) => setProducts(data));
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton color="primary" onClick={handleClickOpen}>
                <ShoppingCart />
            </IconButton>

            {/* Dialog to display cart items */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>My Cart</DialogTitle>
                <DialogContent dividers>
                    {products.length > 0 ? (
                        <List>
                            {products.map((pizza) => (
                                <ListItem key={pizza.id}>
                                    <ListItemText
                                        primary={pizza.name}
                                        secondary={`$${pizza.price.toFixed(2)} - ${pizza.description}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography>No items in your cart.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Checkout
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Cart;