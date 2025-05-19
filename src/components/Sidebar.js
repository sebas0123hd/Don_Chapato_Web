import React, { useState } from "react";
import {Drawer, List, ListItem, ListItemText, IconButton, Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Sidebar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                size="large"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box className="sidebar">
                    <List>
                        <ListItem button component={Link} to="/">
                            <HomeIcon/>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                            <Diversity3Icon/>
                            <ListItemText primary="Sobre Nosotros" />
                        </ListItem>
                        <ListItem button component={Link} to="/ubication">
                            <LocationOnIcon/>
                            <ListItemText primary="Ubicaciones" />
                        </ListItem>
                        <ListItem button component={Link} to="/menu">
                            <RestaurantMenuIcon/>
                            <ListItemText primary="Menu" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;