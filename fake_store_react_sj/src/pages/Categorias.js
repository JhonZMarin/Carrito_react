import React from 'react';
function Categorias({ categorias, onSelectCategoria }) {
  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        <li onClick={() => onSelectCategoria('all')}>Todos</li>
        {categorias.map(categoria => (
          <li key={categoria} onClick={() => onSelectCategoria(categoria)}>
            {categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
