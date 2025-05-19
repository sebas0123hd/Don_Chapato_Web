import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";


const EditarPerfil = () => {
    const [image, setImage] = useState('/bodoque.jpg');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <Box className="editar-perfil">
            <img src={image} alt="avatar" className="avatar-editar" />
            <label htmlFor="upload-photo" className="cambiar-foto">
                Cambiar Foto
            </label>
            <input
                id="upload-photo"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />

            <TextField fullWidth label="Nombres" defaultValue="Tulio" margin="normal" disabled />
            <TextField fullWidth label="Apellido Paterno" defaultValue="Bodoque" margin="normal" disabled />
            <TextField fullWidth label="Apellido Materno" defaultValue="Diaz" margin="normal" disabled />
            <TextField fullWidth label="Número Celular" defaultValue="5528987338" margin="normal" />
            <TextField fullWidth label="Escribe un correo" defaultValue="ejemplo@gmail.com" margin="normal" />
            <TextField fullWidth label="Escribe tu contraseña" defaultValue="ejemplo" margin="normal" type="password" />
            <TextField fullWidth label="Confirma tu contraseña" defaultValue="ejemplo" margin="normal" type="password" />

            <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#f4a300', color: 'black' }}>
                Guardar Cambios
            </Button>
        </Box>
    );
};

export default EditarPerfil;
