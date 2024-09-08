// Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ p: 2, mt: 'auto', backgroundColor: '#1976d2', color: 'white' }}>
            <Typography variant="body2" align="center">
                © 2024 Pizza Shop. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
