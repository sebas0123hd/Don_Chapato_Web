import * as React from 'react';
import Button from '@mui/material/Button';
import Carousel from "./Carousel";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
    const navigate = useNavigate();

    return (
        <Box margin={5}>
            <Carousel/>

            <Stack className="butonI" spacing={2} direction="row" margin={10}>
                <Button
                    className="butonI1"
                    variant="contained"
                    disableElevation
                    onClick={() => navigate('/login')}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    className="butonI2"
                    variant="contained"
                    disableElevation
                    onClick={() => navigate('/register')}
                >
                    Registrarse
                </Button>
            </Stack>

            <h1 className="h1-initial">
                Redes Sociales <ArrowRightAltIcon className="flechaRedes" sx={{ fontSize: 60 }} />
            </h1>

            <Stack direction="row" spacing={40} margin={10}>
                <a
                    href="https://www.instagram.com/donchapatomx?igsh=am5oMWczeThmNzF3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Avatar className="img-redes" src="/instagram.png" />
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Avatar className="img-redes" src="/facebook.png" />
                </a>
                <a
                    href="https://www.tiktok.com/@donchapato?_t=ZS-8wT6ztZBQIL&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Avatar className="img-redes" src="/tik-tok.png" />
                </a>
            </Stack>
        </Box>
    );
};

export default Initial;
