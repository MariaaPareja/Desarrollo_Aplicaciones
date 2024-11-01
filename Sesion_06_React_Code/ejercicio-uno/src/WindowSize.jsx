import React, { useState, useEffect } from 'react';
 
const WindowSize = () => {
    const [tamaño, setTamaño] = useState({ ancho: window.innerWidth, alto: window.innerHeight });
 
    useEffect(() => {
        const actualizarTamaño = () => {
            setTamaño({ ancho: window.innerWidth, alto: window.innerHeight });
        };
 
        window.addEventListener('resize', actualizarTamaño);
        
        return () => {
            window.removeEventListener('resize', actualizarTamaño);
        };
    }, []);
 
    return (
        <div>
            <h1>Tamaño de la Ventana</h1>
            <p>Ancho: {tamaño.ancho}px, Alto: {tamaño.alto}px</p>
        </div>
    );
};
 
export default WindowSize;
