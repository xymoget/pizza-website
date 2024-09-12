import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function AddPizzaButton() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add to cart
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Pizza Order"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to confirm your pizza order?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddPizzaButton;
