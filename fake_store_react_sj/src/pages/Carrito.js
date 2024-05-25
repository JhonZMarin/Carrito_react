import React, { useState } from 'react';
import styles from '../styles/Carrito.module.css'; 
function Carrito({ itemsCarrito }) {
  const [mostrarProductos, setMostrarProductos] = useState(false);

  const totalElementos = itemsCarrito.reduce((total, item) => total + item.cantidad, 0);

  const toggleMostrarProductos = () => {
    setMostrarProductos(!mostrarProductos);
  };

  return (
    <div className={styles.carritoContainer}>
      <h2 className={styles.carritoTitle}>Carrito de Compras</h2>
      <p className={styles.totalElementos}>Total de elementos en el carrito: {totalElementos}</p>
      <button className={styles.toggleButton} onClick={toggleMostrarProductos}>
        {mostrarProductos ? 'Ocultar productos del carrito' : 'Mostrar productos del carrito'}
      </button>
      {mostrarProductos && (
        <ul className={styles.productosList}>
          {itemsCarrito.map((item, index) => (
            <li key={index} className={styles.productoItem}>
              <span>{item.producto.title}</span> - <span>Cantidad: {item.cantidad}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;