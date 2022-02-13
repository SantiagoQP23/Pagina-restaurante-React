import React from 'react'
import { ReservacionPedido } from '../components/ReservacionPedido'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';

export const PagoPedido = () => {

  const state = useSelector(state => state);
  const { detallesPedido } = state.detalles;
  const { pedidoActivo } = state.pedidos;

  const navigate = useNavigate();



  return (
    <>

      <Container className='principal'   >
        <h2 className='text-center'>Pago de pedido</h2>
        <Row className='mt-5'>

          <section className=' col-12 col-lg-6 info-pedido bg-light p-3'>
            <h4>Información del pedido</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {
                  detallesPedido.map(d => (
                    <tr key={d.idDetalle}>
                      <th scope="row">{d.cantidad}</th>
                      <td>{d.nombreProducto}</td>
                      <td>$ {d.precioProducto}</td>
                      <td>$ {d.subtotal}</td>
                    </tr>

                  ))
                }

                <tr>

                  <td colSpan="3">Total</td>
                  <td>$ {pedidoActivo.total}</td>
                </tr>
              </tbody>
            </table>

            <button type='button' className='btn btn-primary' onClick={() => navigate('/pedidos')}> Editar Pedido</button>
          </section>
          <ReservacionPedido />
        </Row>

      </Container>

    </>

  )
}
