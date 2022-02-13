import { types } from '../types/types';

import {  pedidoUpdatedTotalAdd } from './pedidos';
import { pedidoUpdatedTotalSub } from './pedidos';


const detallePedidoAdded = (detallePedido) => ({
  type: types.detallePedidoAdded,
  payload: detallePedido
});



export const detallePedidoStartAdded = (detallePedido, subtotal) => {
  return async (dispatch) => {
    try {

      dispatch(detallePedidoAdded(detallePedido));
      dispatch(pedidoUpdatedTotalAdd(subtotal));

    } catch (error) {
      console.log(error);

    }



  }
}


const detallePedidoUpdatedCantidad = (cantidad) => ({
  type: types.detallePedidoUpdatedCantidad,
  payload: cantidad
})

export const detallePedidoStartUpdatedCantidad = (idDetalle, cantidad, subtotal, aumentar, descripcion = '') => {
  return async (dispatch) => {
    try {




      dispatch(detallePedidoUpdatedCantidad(cantidad));

      if (aumentar) {
        dispatch(pedidoUpdatedTotalAdd(subtotal));
      } else {
        dispatch(pedidoUpdatedTotalSub(subtotal));
      }


    } catch (error) {
      console.log(error);

    }



  }
}

export const detallePedidoSetActive = (detallePedido) => ({
  type: types.detallePedidoSetActive,
  payload: detallePedido
})

const detallePedidoDeleted = (idDetalle) => ({
  type: types.detallePedidoDeleted,
  payload: idDetalle
})



export const detallePedidoStartDeleted = (idDetalle, subtotal) => {

  return async (dispatch) => {


    dispatch(detallePedidoDeleted(idDetalle));
    dispatch(pedidoUpdatedTotalSub(subtotal));

  }

}