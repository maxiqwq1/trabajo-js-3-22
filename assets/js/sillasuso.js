import listaProductos2 from './sillas.js';

const renderHTML2 = () => {
    const contenedor = document.querySelector('#contenedor2');
    for (const producto of listaProductos2) {
        if (producto.nombre === 'Silla de madera' || producto.nombre === 'Silla oficina' || producto.nombre === 'Silla Gamer'  || producto.nombre === 'Silla reclinable' || producto.nombre === 'Silla mecedora'|| producto.nombre === 'Silla plegable'|| producto.nombre === 'Silla de bar' )  {
            contenedor.innerHTML += `
                <div class="producto">  
                    <img class="imagen" src="${producto.url}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p>Precio: USD. ${producto.precio}</p>
                    <p>Stock: ${producto.stock}</p>
                    ${producto.new === true ? `<p class="green">Este producto es nuevo</p>` : `<p class="red">Este producto es de 2da mano</p>`}
                    <button class="mrboton">Comprar</button>
                </div>
            `;
        }
    }
}

renderHTML2();