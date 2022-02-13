import Swal from 'sweetalert2';
import { types } from '../types/types';





export const pedidoUpdatedTotalSub = (subtotal) => ({
  type: types.pedidoUpdatedTotalSub,
  payload: subtotal
})

export const pedidoUpdatedTotalAdd = (subtotal) => ({
  type: types.pedidoUpdatedTotalAdd,
  payload: subtotal
})
