import { useState } from 'react';
import Orden from "./Orden"; //


const OrdenWrapper = () => {
    const [items, setItems] = useState([
        { nombre: "Pechuga de Pavo", precio: 70, cantidad: 1, img: "/chapata2.jpg" },
        { nombre: "Agua del Dia", precio: 25, cantidad: 1, img: "/aguas.jpg" },
        { nombre: "Papaitas", precio: 25, cantidad: 1, img: "/papitas.jpg" },
    ]);

    const handleQuantityChange = (index, cantidad) => {
        const newItems = [...items];
        newItems[index].cantidad = Math.max(0, cantidad);
        setItems(newItems);
    };

    return <Orden items={items} onQuantityChange={handleQuantityChange} />;
};
export default OrdenWrapper;