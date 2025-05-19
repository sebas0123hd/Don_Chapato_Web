import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Perfil = () => {

    const puntos = [true, true, true, false, false];
    const navigate = useNavigate();


    return (
        <Box className="perfil-page">
            <Box className="perfil-header">
                <img src="/bodoque.jpg" alt="avatar" className="avatar" />
                <Typography variant="h4">Tulio Bodoque Diaz</Typography>
                <Typography
                    variant="body1"
                    color="primary"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate('/perfil/editar')}
                >
                    Perfil
                </Typography>

            </Box>

            <Box className="puntos-chapaton">
                <Typography variant="h5" fontWeight="bold" className="titulo-puntos">
                    Puntos Chapaton
                </Typography>
                <Box className="puntos-hexagono">
                    <Box className="fila fila-superior">
                        {puntos.slice(0, 3).map((activo, i) => (
                            <Box key={i} className={`punto-ovalo ${activo ? "activo" : ""}`}>
                                {activo && <img src="/dc.jpg" alt="DC" className="img-pc" />}
                            </Box>
                        ))}
                    </Box>
                    <Box className="fila fila-inferior">
                        {puntos.slice(3, 5).map((activo, i) => (
                            <Box key={i + 3} className={`punto-ovalo ${activo ? "activo" : ""}`}>
                                {activo && <img src="/dc.jpg" alt="DC" className="img-pc" />}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>


        </Box>
    );
};

export default Perfil;
