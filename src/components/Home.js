import {Box} from "@mui/material";
import ListIntegrate from "./ListIntegrate";


const Home = () => {
    return (
        <Box>
            <div className="container-home">
                <img src="don-chapato.jpg" className="img1" />
                <div className="texto-home">
                    <h2 className="h2-home1">Nuestra Historia</h2>
                    <p className="p-home1">
                        En Don Chapato, es un restaurante familiar en donde comenzamos nuestra historia hace más de dos
                        años, con la misión de traer la mejor calidad y sabor a cada cliente. Nuestra Misión es siempre
                        servir un alimento fresco de buena calidad, pero sobre todo que sea un deleite digno de nuestros
                        clientes. ¡Gracias por ser parte de nuestra aventura!
                    </p>
                </div>
            </div>
            <h2 className="h2-home2">Integrantes de la familia Don Chapato</h2>
            <ListIntegrate/>
        </Box>
    )
};

export default Home;