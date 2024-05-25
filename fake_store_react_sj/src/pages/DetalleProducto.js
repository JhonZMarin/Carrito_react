import React from 'react';
import styles from '../styles/DetalleProducto.module.css'; 

function DetalleProducto({ producto }) {
  return (
    <div className={styles.detalleProductoContainer}>
      <h2 className={styles.detalleProductoTitle}>Detalle del Producto</h2>
      <div className={styles.detalleProductoContent}>
        <div className={styles.detalleProductoInfo}>
          <p>{producto.title}</p>
          <p>{producto.price}</p>
          <p>{producto.description}</p>
        </div>
        <img className={styles.detalleProductoImg} src={producto.image} alt={producto.title} />
      </div>
    </div>
  );
}

export default DetalleProducto;
