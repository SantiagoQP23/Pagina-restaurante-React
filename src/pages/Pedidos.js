import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import '../styles/pedidos.css';

export const Pedidos = () => {

  const navigate = useNavigate();

  useEffect( () => {

  navigate('#pedido');

    


  }, []);

  return (
    <>
      <main class="container-fluid bg-white " id="pedido">
        <section class="row edicion-pedido col-12">
          {/*   <!-- Filtros de productos --> */}
          <form class="row col-12 mb-3 p-3">

            <div class="form-group col-12 col-lg-4">
              <label for="exampleFormControlSelect1">Seleccione una categoria</label>
              <select class="form-control select-categorias" onchange="cambiarCategoria()" id="exampleFormControlSelect1">
                <option>1</option>

              </select>
            </div>

            <div class="form-group col-12 col-lg-4">
              <label for="exampleFormControlInput1">Buscar producto</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre del producto" />
            </div>

          </form>
          {/*         <!-- Productos de la categoria -->
 */}        <section class=" row productos col-12 mb-3">

          </section>

          {/*         <!-- Detalles del pedido -->
 */}        <section class="row col-12  detalles mb-3" id="detalles-tabla">
            <h5 class="mb-3">Carrito de compras</h5>

            <article class=" detalle row col-12 p-3 mb-1 ">
              <div class="col-12 col-lg-5 ">
                <h6>Camarones apanados</h6>
                <p>Descripcion</p>
              </div>

              <div class=" col-6 col-lg-2 ">
                <h6>$10.00</h6>
              </div>

              <div class="col-6 col-lg-2">

                <div class="input-group ">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">+</button>
                  </div>
                  <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" sx="max-width: 50px !important;" />
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">-</button>
                  </div>
                </div>
              </div>


              <div class="col-6 col-lg-2">
                <h6>$10.00</h6>
              </div>

              <div class="col-6 col-lg-1">
                <button class="btn btn-outline-dark" type="button"><i class="bi bi-trash"></i></button>
              </div>




            </article>



          </section>

          {/*         <!-- Información de la reserva -->
 */}        <form class="row col-12 col-lg-6">
            <h5>Reservación</h5>


            <div class="form-group col-12 col-md-6">
              <label for="Fecha">Fecha</label>
              <input type="date" class="form-control" aria-describedby="Fecha" placeholder="" />
            </div>

            <div class="form-group col-12 col-md-3">
              <label for="Hora">Hora</label>
              <input type="time" class="form-control" aria-describedby="Hora" placeholder="" />
            </div>

            <div class="form-group col-12 col-md-3">
              <label for="invitados">Invitados</label>
              <input type="number" class="form-control" aria-describedby="Número de invitados" placeholder="Cantidad" />
            </div>

            <div class="form-group col-12 ">
              <label for="exampleFormControlTextarea1">Comentarios</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value=" "></textarea>
            </div>

          </form>


          {/*         <!-- Información del cliente -->
 */}        <form class="row col-12 col-lg-6">
            <h5>Información personal</h5>

            <div class="form-group col-12 col-lg-12">
              <label for="exampleFormControlInput1">Nombre completo</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre del producto" />
            </div>

            <div class="form-group col-12 col-lg-7">
              <label for="exampleFormControlInput1">Email</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>

            <div class="form-group col-12 col-lg-5">
              <label for="exampleFormControlInput1">Telefono</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefono" />
            </div>

            <div class="form-group col-12 col-lg-8">
              <label for="exampleFormControlSelect1">Forma de pago</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Efectivo</option>
                <option>Tarjeta de crédito</option>
              </select>
            </div>


            <button class="btn btn-primary">Hacer pedido</button>




          </form>

        </section>
    </main>

    </>
  )
}
