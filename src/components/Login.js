import React from 'react';
import { Box, Button, TextField, Typography, Link, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: '#ffc88e',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: 400, textAlign: 'center', border: '2px solid #0077cc' }}>
                <Avatar
                    alt="Avatar"
                    src="/don-chapato.jpg"
                    sx={{ width: 80, height: 80, margin: '0 auto 16px auto' }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    placeholder="ejemplo@gmail.com"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Contraseña"
                    placeholder="ejemplo"
                    type="password"
                    margin="normal"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: '#e7a700',
                        color: 'black',
                        '&:hover': { backgroundColor: '#d69800' }
                    }}
                >
                    Iniciar Sesión
                </Button>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    <Link href="#">¿Olvidaste tu Contraseña?</Link>
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    ¿No tienes cuenta?{' '}
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/register')}
                        sx={{fontWeight: 'bold' }}
                    >
                        Regístrate aquí
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
