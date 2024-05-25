import React, { useState } from 'react';

function Carrito({ itemsCarrito }) {
  const [mostrarProductos, setMostrarProductos] = useState(false);

  const totalElementos = itemsCarrito.reduce((total, item) => total + item.cantidad, 0);

  const toggleMostrarProductos = () => {
    setMostrarProductos(!mostrarProductos);
  };
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Total de elementos en el carrito: {totalElementos}</p>
      <button onClick={toggleMostrarProductos}>
        {mostrarProductos ? 'Ocultar productos del carrito' : 'Mostrar productos del carrito'}
      </button>
      {mostrarProductos && (
        <ul>
          {itemsCarrito.map((item, index) => (
            <li key={index}>
              {item.producto.title} - Cantidad: {item.cantidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
