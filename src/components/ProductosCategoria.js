import React from 'react'
import { productos } from '../data/productos';



export const ProductosCategoria = ({ idCategoria }) => {

  const productosCategoria = productos.filter( p => p.idCategoria === idCategoria);




  return (
    <>

      {

        productosCategoria.map(p => (
          <div class="col-12 col-sm-6 col-md-4 mt-1">

            <div class="card" xs="width: 100%;" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="card-body producto" onclick="mostrarModal(${p.idProducto})">
                <h5 class="card-title">{p.nombreProducto}</h5>
                <h6 class="card-subtitle mb-2 text-muted">$ {p.precioProducto}</h6>
                <p class="card-text">{p.descripcionProducto}</p>

              </div>
            </div>

          </div>

        ))
      }



    </>
  )
}
