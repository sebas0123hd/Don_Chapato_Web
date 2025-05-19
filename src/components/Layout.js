import {Box, Container, Typography} from "@mui/material";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return(
        <Box className="fondo">
            <Navbar />
            <Container className="container">
                {children}
            </Container>

            <Box className="fondo" margin={10}>
                <Typography className="derechos" variant="h6" component="h1">
                    Todos los derechos reservados a @DonChapato
                </Typography>
            </Box>
        </Box>
    )
};

export default Layout;
