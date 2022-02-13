
import { createStore, combineReducers } from "redux";
import { applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import { pedidosReducer } from "../reducers/pedidosReducer";
import { detallesPedido } from "../reducers/detallesPedidoReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
  pedidos: pedidosReducer,
  detalles: detallesPedido
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),

);

