import React from 'react';

function DetalleProducto({ producto }) {
  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>{producto.title}</p>
      <p>{producto.price}</p>
      <p>{producto.description}</p>
      <img src={producto.image} alt={producto.title} />
    </div>
  );
}

export default DetalleProducto;
