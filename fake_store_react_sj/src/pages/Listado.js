import React, { useState } from 'react';

function Listado({ productos, onSelectProducto, onAgregarAlCarrito }) {
  const [cantidad, setCantidad] = useState({});

  const handleCantidadChange = (id, value) => {
    setCantidad({
      ...cantidad,
      [id]: value,
    });
  };

  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <h3>{producto.title}</h3>
            <p>Precio: ${producto.price}</p>
            <button onClick={() => onSelectProducto(producto.id)}>Mostrar detalle</button>
            <input
              type="number"
              value={cantidad[producto.id] || 1}
              min="1"
              onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
            />
            <button onClick={() => onAgregarAlCarrito(producto, cantidad[producto.id] || 1)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listado;
