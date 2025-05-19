import React from "react";
import {Box, Card, CardContent, CardMedia, Typography, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText} from "@mui/material";

const data = [
    {
        title: "Escondido Condesa",
        img: "condesa.jpg",
        description: "Colima 378, Roma Nte., Cuauhtémoc, 06700 CDMX",
        address: "Colima 378, Roma Norte, CDMX"
    },
    {
        title: "Foro Tonalá",
        img: "tonala.jpg",
        description: "Tonalá 261, Roma Sur, Cuauhtémoc, 06760 CDMX",
        address: "Tonalá 261, Roma Sur, CDMX"
    },
    {
        title: "Otro Lugar",
        img: "img3.jpg",
        description: "Av. Universidad 3000, Coyoacán, CDMX",
        address: "Av. Universidad 3000, CDMX"
    }
];

const Ubication = () => {
    return (
        <Box sx={{ maxWidth: 900, mx: "auto", p: 2 }}>
            {/* Tarjeta Principal */}
            <Card sx={{ display: "flex", mb: 4, p: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 250, borderRadius: 2 }}
                    image="castillo.jpg"
                />
                <CardContent>
                    <Typography variant="h5">Castillo Rebsamen</Typography>
                    <Typography variant="body1" color="text.secondary">
                        Rebsamen 280 col. Narvarte Poniente
                    </Typography>
                    <Typography variant="body1">
                        El castillo Rebsamen es la ubicación principal y la más grande.
                    </Typography>
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ mt: 2 }}
                        onClick={() =>
                            window.open(
                                "https://maps.app.goo.gl/bBUuTyfxPUkSAwgp7",
                                "_blank"
                            )
                        }
                    >
                        Ir al mapa
                    </Button>
                </CardContent>
            </Card>

            {/* Lista de sedes alternas */}
            <Typography variant="h5" gutterBottom>Sedes alternas →</Typography>
            <List>
                {data.map((item, index) => (
                    <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{
                            mb: 3,
                            p: 2,
                            borderRadius: 2,
                            bgcolor: "background.paper",
                            boxShadow: 1
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                sx={{ width: 80, height: 80, mr: 3, borderRadius: 2 }}
                                src={item.img}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography variant="h6">{item.title}</Typography>}
                            secondary={
                                <>
                                    <Typography variant="body1" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                        sx={{ mt: 1 }}
                                        onClick={() =>
                                            window.open(
                                                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                                    item.address
                                                )}`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        Ir al mapa
                                    </Button>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Ubication;
