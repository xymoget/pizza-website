import React from "react";
import { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, Typography, Box, IconButton, TextField, Avatar } from '@mui/material';
import api from "../api";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(null);
    const [open, setOpen] = useState(false);
    const [deletedItems, setDeletedItems] = useState({});

    useEffect(() => {
        getCartProducts();
    }, [])

    const getCartProducts = () => {
        api.get("/api/cart/")
        .then((res) => res.data)
        .then((data) => {
            setCart(data);
            setProducts(data.products);
            console.log(data);
        });
    }

    const handleClickOpen = () => {
        getCartProducts();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeletePizza = (pizzaId) => {
        setDeletedItems((prev) => ({ ...prev, [pizzaId]: true }));

        setTimeout(() => {
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.pizza.id !== pizzaId)
            );

            api.post("/api/cart/remove-pizza/", { pizzaId });

            setDeletedItems((prev) => {
                const updated = { ...prev };
                delete updated[pizzaId];
                return updated;
            });
        }, 300);
    };

    const handleQuantityChange = (pizzaId, newQuantity) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.pizza.id === pizzaId
                    ? { ...product, quantity: newQuantity }
                    : product
            )
        );

        api.post("/api/cart/update-quantity/", {
            pizzaId: pizzaId,
            quantity: newQuantity,
        })

        // .then((res) => res.data)
        // .then((data) => {
        //     setCart(data);
        //     setProducts(data.products);
        // });
        
        console.log(products)
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                <ShoppingCartIcon sx={{ color: "white", fontSize: 20, marginRight: '3px' }} />
                Cart
                </Button>

            {/* Dialog to display cart items */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>My Cart</DialogTitle>
                <DialogContent dividers>
                    {products.length > 0 ? (
                        <List>
                            {products.map((data) => (
                                <ListItem
                                    key={data.pizza.id}
                                    sx={{
                                        opacity: deletedItems[data.pizza.id] ? 0 : 1, // Fade out effect
                                        transition: "opacity 0.3s ease-out", // Add CSS transition for the fade effect
                                    }}
                                >
                                    <Avatar
                                        src={data.pizza.picture}
                                        sx={{ width: 40, height: 40, marginRight: 2 }}
                                    />
                                    <ListItemText
                                        primary={data.pizza.name}
                                        secondary={`$${data.pizza.price.toFixed(2)} - ${data.pizza.description}`}
                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            onClick={() =>
                                                handleQuantityChange(
                                                    data.pizza.id,
                                                    Math.max(data.quantity - 1, 1)
                                                )
                                            }
                                            size="small"
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <TextField
                                            value={data.quantity}
                                            size="small"
                                            sx={{ width: '50px', textAlign: 'center' }}
                                            inputProps={{ min: 1, style: { textAlign: 'center' } }}
                                            onChange={(e) => {
                                                const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
                                                handleQuantityChange(data.pizza.id, newQuantity);
                                            }}
                                        />
                                        <IconButton
                                            onClick={() =>
                                                handleQuantityChange(
                                                    data.pizza.id,
                                                    data.quantity + 1
                                                )
                                            }
                                            size="small"
                                        >
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => handleDeletePizza(data.pizza.id)} // Call the delete function
                                            size="small"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
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