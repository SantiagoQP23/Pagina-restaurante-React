import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { detallePedidoStartAdded } from '../actions/detallesPedido';
import { ModalProducto } from './ModalProducto';

export const ProductosPedido = ({ productos }) => {
  const dispatch = useDispatch();

  const [productoActivo, setProductoActivo] = useState({});
  const [modalShow, setModalShow] = useState(false);




  const state = useSelector(state => state);
  const { detallesPedido } = state.detalles;


  const aniadirDetalle = (idProducto) => {


    const detalle = detallesPedido.find( d => d.idProducto === idProducto);

    if( detalle ){
      Swal.fire('El producto ya se encuentra en el carrito')
      return;

    }


    const producto = productos.find( p => p.idProducto === idProducto);


    const newDetalle = {
      idDetalle: Date.now(),
      idProducto,
      cantidad: 1,
      nombreProducto: producto.nombreProducto,
      descripcionProducto: producto.descripcionProducto, 
      subtotal: Number(producto.precioProducto),
      precioProducto: Number(producto.precioProducto)

    }

    dispatch( detallePedidoStartAdded( newDetalle, Number(producto.precioProducto) ));



  }



  return (
    <>


<ModalProducto show={modalShow} onHide={() => setModalShow(false)} producto={productoActivo}/>
      {

        productos.map(p => (
          <div key={p.idProducto} className="col-12 col-sm-6 col-md-4 mt-1">

            <div className="card" xs="width: 100%;" >
              <div className="card-body producto">
                <h5 className="card-title">{p.nombreProducto}</h5>
                <h6 className="card-subtitle mb-2 text-muted">$ {p.precioProducto}</h6>
                <p className="card-text">{p.descripcionProducto}</p>


                <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => aniadirDetalle(p.idProducto)}>
                  <i className="bi bi-cart4" ></i>Añadir
                </button>
                <button 
                type="button" 
                className="btn btn-outline-dark btn-sm" 
                onClick={() => {setProductoActivo(p); setModalShow(true)}}
                
                >
                  <i className="bi bi-eye-fill"></i>Ver
                </button>

              </div>
            </div>

          </div>

        ))}
    </>
  )
}
