import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({}) => {

    const navigate = useNavigate();

    const goToPerfil = () => {
        navigate("/perfil");
    };

    return (
        <AppBar className="Barra" position="static">
            <Toolbar>
                <Sidebar />
                <Typography className="barra-text" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Don Chapato
                </Typography>
                <IconButton color="inherit" onClick={goToPerfil}>
                    <PermIdentityIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;