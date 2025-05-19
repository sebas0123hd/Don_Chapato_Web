import React from "react";
import {Typography, Box, Stack, Avatar, Button} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";


const Menu = () => {
    const chapatas = [
        { nombre: "Pechuga de Pavo", precio: "$70", img: "/chapata2.jpg" },
        { nombre: "Jamon de Pierna", precio: "$70", img: "/chapata4.jpg" },
        { nombre: "3 quesos", precio: "$70", img: "/chapata1.jpg" },
        { nombre: "Hawaina", precio: "$80", img: "/chapata2.jpg" },
        { nombre: "Jamon Serrano", precio: "$100", img: "/chapata4.jpg" },
        { nombre: "Capone", precio: "$85", img: "/chapata1.jpg" },
        { nombre: "Papitas", precio: "$25", img: "/papitas.jpg" },
        { nombre: "Agua del dia", precio: "$25", img: "/aguas.jpg" }
    ];

    const ingredientes = [
        "/lechuga.jpg",
        "/jitomate.jpg",
        "/pepino.jpg",
        "/aguacate.jpg",
        "/frijol.jpg",
        "/queso.jpg",
        "/chipotle.jpg",
        "/mayonesa.webp"
    ];

    const navigate = useNavigate();

    return (
        <Box sx={{ minHeight: "100vh", p: 2 }}>


            <Box sx={{ mt: 3 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h6">Chapatas</Typography>
                    <ArrowRightAltIcon sx={{ fontSize: 60 }} />
                </Stack>

                <Box
                    sx={{
                        mt: 1,
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        pr: 1,
                        "&:hover::-webkit-scrollbar": {
                            height: 4
                        },
                        "&::-webkit-scrollbar": {
                            height: 0
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#FE9D8B",
                            borderRadius: "4px"
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#f0d5b6",  // Beige claro
                            borderRadius: "4px"
                        },
                        scrollbarWidth: "thin", // Firefox
                        scrollbarColor: "rgba(102, 51, 0, 0.5) #f0d5b6"
                    }}
                >

                {chapatas.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "inline-block",
                                width: 140,
                                mx: 4,
                                textAlign: "center"
                            }}
                        >
                            <Avatar
                                src={item.img}
                                alt={item.nombre}
                                sx={{ width: 150, height: 150, mx: "auto" }}
                            />
                            <Typography fontSize="16px">{item.nombre}</Typography>
                            <Typography fontSize="16px">{item.precio}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* INGREDIENTES */}
            <Box sx={{ mt: 5 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h6">Ingredientes</Typography>
                    <ArrowRightAltIcon sx={{ fontSize: 60 }} />
                </Stack>

                <Box
                    sx={{
                        mt: 2,
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        scrollbarWidth: "auto",
                        "&::-webkit-scrollbar": {
                            height: 8
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#888",
                            borderRadius: 4
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#eee"
                        }
                    }}
                >
                    {ingredientes.map((img, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={img}
                            alt={`Ingrediente ${index + 1}`}
                            sx={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                borderRadius: 2,
                                objectFit: "cover",
                                mx: 1
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* BOTÓN */}


            <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#444",
                        px: 5,
                        py: 1.5,
                        fontSize: "16px",
                        borderRadius: "12px",
                        "&:hover": { bgcolor: "#333" }
                    }}
                    onClick={() => navigate("/orden")}
                >
                    Ordenar
                </Button>
            </Box>

        </Box>
    );
};

export default Menu;
