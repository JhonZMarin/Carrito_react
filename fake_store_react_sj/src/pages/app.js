import React, { useState, useEffect } from 'react';
import Listado from './Listado';
import DetalleProducto from './DetalleProducto';
import Categorias from './Categorias';
import Carrito from './Carrito';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [mostrarProductos, setMostrarProductos] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data));

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategorias(data));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const savedItems = sessionStorage.getItem('carrito');
      if (savedItems) {
        setItemsCarrito(JSON.parse(savedItems));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('carrito', JSON.stringify(itemsCarrito));
    }
  }, [itemsCarrito]);

  const handleSeleccionarProducto = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProductoSeleccionado(data));
  };

  const handleAgregarAlCarrito = (producto, cantidad) => {
    const updatedCarrito = [...itemsCarrito];
    const existingProductIndex = updatedCarrito.findIndex(item => item.producto.id === producto.id);

    if (existingProductIndex !== -1) {
      updatedCarrito[existingProductIndex].cantidad += parseInt(cantidad);
    } else {
      updatedCarrito.push({ producto, cantidad: parseInt(cantidad) });
    }

    setItemsCarrito(updatedCarrito);
  };

  const handleSeleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    if (categoria === 'all') {
      setProductosFiltrados(productos);
    } else {
      setProductosFiltrados(productos.filter(producto => producto.category === categoria));
    }
    setMostrarProductos(true);
  };

  return (
    <div>
      <h1>Fake Store API</h1>
      <div>
        <label htmlFor="categoria-select">Filtrar Productos:</label>
        <select id="categoria-select" onChange={(e) => handleSeleccionarCategoria(e.target.value)} defaultValue="">
          <option value="" disabled>Selecciona una categoría</option>
          <option value="all">Todos</option>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>
      <Carrito itemsCarrito={itemsCarrito} />
      {mostrarProductos && (
        <Listado productos={productosFiltrados} onSelectProducto={handleSeleccionarProducto} onAgregarAlCarrito={handleAgregarAlCarrito} />
      )}
      {productoSeleccionado && <DetalleProducto producto={productoSeleccionado} />}
    </div>
  );
}

export default App;
