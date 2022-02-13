import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detallePedidoSetActive, detallePedidoStartDeleted, detallePedidoStartUpdatedCantidad } from '../actions/detallesPedido';

import { productos } from '../data/productos';

import { useCounter } from '../hooks/useCounter';


export const DetallePedido = ({ detalle }) => {

  const dispatch = useDispatch();

  const { state: counter, increment, decrement } = useCounter(detalle.cantidad);

  const producto = productos.find(p => p.idProducto === detalle.idProducto);

  const cambiarCantidad = () => {


    dispatch(detallePedidoSetActive(detalle));

    const cantidad = Math.abs(counter - detalle.cantidad);
    const subtotal = cantidad * detalle.precioProducto;
    const aumentar = counter > detalle.cantidad;

    dispatch(detallePedidoStartUpdatedCantidad(detalle.idDetalle, counter, Number(subtotal), aumentar));
  }

  const eliminarDetalle = () => {
    dispatch( detallePedidoStartDeleted( detalle.idDetalle, detalle.subtotal) )


  }


  useEffect ( () => {
    cambiarCantidad();

  }, [counter]);


  return (
    <>
      <article className=" detalle row col-12 p-3 mb-1 detalle justify-content-end">
        <div className="col-12 col-lg-5 ">
          <h6>{detalle.nombreProducto}</h6>
          <p>{detalle.descripcionProducto}</p>
        </div>

        <div className=" col-6 col-lg-2 ">
          <h6>${detalle.precioProducto}</h6>
        </div>

        <div className="col-6 col-lg-2">

          <div className="input-group ">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder=""
              aria-label=""
              aria-describedby="basic-addon1"
              value={counter}
              onChange={() => cambiarCantidad()}
            />
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-2">
          <h6>$ {detalle.subtotal}</h6>
        </div>

        <div className="col-6 col-lg-1">
          <button className="btn btn-outline-dark" 
          type="button"
          onClick={() => eliminarDetalle()}
          >
            <i className="bi bi-trash"></i>
            
            </button>
        </div>




      </article>

    </>
  )
}
