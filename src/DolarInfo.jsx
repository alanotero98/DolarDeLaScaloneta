// src/DolarInfo.js
import React, { useState, useEffect } from 'react';
import dolar from './img/dolar.jpg';
import './DolarInfo.css';

const DolarInfo = () => {
  const [dolarInfo, setDolarInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares/blue');
        const data = await response.json();
        setDolarInfo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once

  return (
    <div className="dolar-info-container">
      <div className="fondo-gif" />
      <img className="foto-testa" src={dolar} alt="Tu Foto" />
      <p className="descripcion">
        ¡Hola! Soy Testa un tipo muy Kpo en finanzas y en penes, estoy aquí para contarte las últimas actualizaciones del dólar blue:
      </p>
      {dolarInfo ? (
        <div className="dolar-content">
          <h2>Dólar Blue</h2>
          <p>Información actualizada: {dolarInfo.fechaActualizacion}</p>
          <p>Compra: ${dolarInfo.compra}</p>
          <p>Venta: ${dolarInfo.venta}</p>
        </div>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>
  );
};

export default DolarInfo;
