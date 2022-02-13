import { types } from "../types/types";
/* {
  idDetallePedido
  idProducto:
  cantidad:
  subtotal:
} */

const initialState = {
  detallesPedido: [],
  detalleActivo: null
}


export const detallesPedido = (state = initialState, action) => {

  switch (action.type) {

    case types.detallePedidoSetActive:
      return {
        ...state,
        detalleActivo: action.payload,
      }

    case types.detallePedidoLoaded:
      return {
        ...state,
        detallesPedido: [...action.payload]
      }

    case types.detallePedidoAdded:
      return {
        ...state,
        detallesPedido: [...state.detallesPedido, action.payload]
      }


    case types.detallePedidoUpdatedCantidad:
      return {
        ...state,
        detallesPedido: state.detallesPedido.map(d =>
          d.idDetalle === state.detalleActivo.idDetalle
            ? { ...d, cantidad: action.payload, subtotal: d.precioProducto * action.payload }
            : d

        ),
        detalleActivo: {
          ...state.detalleActivo,
          cantidad: action.payload,
          subtotal: state.detalleActivo.precioProducto * action.payload
        }
      }

    case types.detallePedidoDeleted:
      return {
        ...state,
        detallesPedido: state.detallesPedido.filter(
          d => d.idDetalle !== action.payload
        )
      }





    default:
      return state;
  }




}