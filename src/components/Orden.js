
import React from 'react';
import { Box, Typography, IconButton, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Orden = ({ items = [], onQuantityChange }) => {
    const getTotal = () =>
        items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6">Articulos</Typography>

            {items.map((item, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="center" sx={{ my: 2 }}>
                    <img src={item.img} alt={item.nombre} width={180} height={180} style={{ borderRadius: 8 }} />
                    <Box flexGrow={1}>
                        <Typography>{item.nombre}</Typography>
                        <Typography fontSize={14}>{`$${item.precio}`}</Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton onClick={() => onQuantityChange(index, item.cantidad - 1)} disabled={item.cantidad <= 0}>
                                <RemoveIcon />
                            </IconButton>
                            <Typography>{item.cantidad}</Typography>
                            <IconButton onClick={() => onQuantityChange(index, item.cantidad + 1)}>
                                <AddIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                    <ChevronRightIcon />
                </Stack>
            ))}

            <Box sx={{ mt: 4, backgroundColor: '#ec9e4f', p: 2, borderRadius: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight="bold">Total:</Typography>
                    <Typography fontWeight="bold">${getTotal()}</Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default Orden;
