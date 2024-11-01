import React, { useState, useEffect } from 'react';
 
const TimerControl = () => {
    const [tiempo, setTiempo] = useState(0);
    const [pausado, setPausado] = useState(true);
 
    useEffect(() => {
        let intervalo;
        if (!pausado) {
            intervalo = setInterval(() => {
                setTiempo((prevTiempo) => prevTiempo + 1);
            }, 1000);
        }
        
        return () => {
            clearInterval(intervalo);
        };
    }, [pausado]);
 
    const togglePause = () => setPausado(!pausado);
 
    return (
        <div>
            <h1>Tiempo: {tiempo} segundos</h1>
            <button onClick={togglePause}>
                {pausado ? 'Reanudar' : 'Pausar'}
            </button>
        </div>
    );
};
 
export default TimerControl;
