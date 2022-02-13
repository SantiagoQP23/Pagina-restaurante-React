import { types } from "../types/types";
/* 
{
  idPedido: 1234,
  nombreUsuario: "Quirumbay",
  total: 23,
  fecha: new Date(),
  nombreCliente: "Son Goku",
  estado: false
} */



const initialState = {
  pedidoActivo: {
    idPedido: 83254,
  
    total: 0,
   
  },

}


export const pedidosReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.pedidoSetActive:
      return {
        ...state,
        pedidoActivo: action.payload,
      }



    case types.pedidoLoaded:
      return {
        ...state,
        pedidos: [...action.payload]
      }


    case types.pedidoUpdatedTotalAdd:
      return {
        ...state,
        pedidoActivo: { ...state.pedidoActivo, total: state.pedidoActivo.total + action.payload }

      }

    case types.pedidoUpdatedTotalSub:
      return {
        ...state,
    
        pedidoActivo: { ...state.pedidoActivo, total: state.pedidoActivo.total - action.payload }
      }

    case types.pedidoUpdatedNombre:
      return {
        ...state,
        pedidos: state.pedidos.map(
          p => (p.idPedido === state.pedidoActivo.idPedido) ? { ...p, nombreCliente: action.payload } : p
        ),
        pedidoActivo: { ...state.pedidoActivo, nombre: action.payload }
      }


    case types.pedidoDeleted:
      return {
        ...state,
        pedidos: state.pedidos.filter(
          p => p.idPedido !== action.payload
        )

      }


    default:
      return state;
  }




}