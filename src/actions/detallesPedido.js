import Swal from 'sweetalert2';
import { types } from '../types/types';

import { pedidoSetActive, pedidoUpdatedTotalAdd } from './pedidos';
import { pedidoUpdatedTotalSub } from './pedidos';

/* {
  idDetallePedido
  idProducto:
  cantidad:
  subtotal:
  idPedido
  hora
  estado
} */

const detallePedidoAdded = (detallePedido) => ({
  type: types.detallePedidoAdded,
  payload: detallePedido
});

// Se debe recibir 
/* {
  idProducto
  cantidad > 0
  descripcion: opcional
} */

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



      console.log("La nueva cantidad es" + cantidad)

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





const detallePedidoLoaded = (detallesPedido) => ({

  type: types.detallePedidoLoaded,
  payload: detallesPedido
});

// Deberia recibir el pedido tambieen o trabajar con el pedido actual de redux

/* 
export const detallePedidoStartLoaded = (idPedido) => {

  return async (dispatch) => {
    try {


        dispatch(detallePedidoLoaded(body.detallesPedido));
    
    

    } catch (e) {
      console.log(e);
    }

  }

}

 */

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