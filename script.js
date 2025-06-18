fetch('productos.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('lista-productos');
    data.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
      `;
      contenedor.appendChild(div);
    });
  });