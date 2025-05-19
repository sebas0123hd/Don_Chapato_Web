import React from 'react';
import {Avatar, Box, Button, Stack, TextField, Typography, Paper} from '@mui/material';

const Register = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#ffc78e',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2
            }}
        >
            <Paper elevation={3} sx={{ p: 4, width: 350, borderRadius: 4 }}>
                <Stack spacing={2} alignItems="center">
                    <Avatar
                        src="/don-chapato.jpg"
                        sx={{ width: 80, height: 80 }}
                    />
                    <TextField label="Nombres" placeholder="ejemplo: Pepe" fullWidth />
                    <TextField label="Apellido Paterno" placeholder="ejemplo: Perez" fullWidth />
                    <TextField label="Apellido Materno" placeholder="ejemplo: Garcia" fullWidth />
                    <TextField label="Número Celular" placeholder="ejemplo: 5581296262" fullWidth />
                    <TextField label="Correo" placeholder="ejemplo@gmail.com" fullWidth />
                    <TextField label="Contraseña" placeholder="ejemplo" type="password" fullWidth />
                    <TextField label="Contraseña" placeholder="ejemplo" type="password" fullWidth />
                    <Button variant="contained" sx={{ bgcolor: '#de9400', width: '100%' }}>
                        Registrarse
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default Register;
