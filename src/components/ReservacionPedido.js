import React from 'react'
import { InformacionPedido } from './InformacionPedido'

export const ReservacionPedido = () => {
  return (
    <>
       <form className="row col-12 col-lg-6 bg-white p-3">
            <h5>Reservación</h5>


            <div className="form-group col-12 col-lg-12">
              <label htmlFor="exampleFormControlInput1">Nombre completo</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre del producto" />
            </div>

            <div className="form-group col-12 col-lg-7">
              <label htmlFor="exampleFormControlInput1">Email</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>

            <div className="form-group col-12 col-lg-5">
              <label htmlFor="exampleFormControlInput1">Telefono</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Telefono" />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="Fecha">Fecha</label>
              <input type="date" className="form-control" aria-describedby="Fecha" placeholder="" />
            </div>

            <div className="form-group col-12 col-md-3">
              <label htmlFor="Hora">Hora</label>
              <input type="time" className="form-control" aria-describedby="Hora" placeholder="" />
            </div>

            <div className="form-group col-12 col-md-3">
              <label htmlFor="invitados">Invitados</label>
              <input type="number" className="form-control" aria-describedby="Número de invitados" placeholder="Cantidad" />
            </div>

            <div className="form-group col-12 ">
              <label htmlFor="exampleFormControlTextarea1">Comentarios</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            

            <div className="form-group col-12 col-lg-8">
              <label htmlFor="exampleFormControlSelect1">Forma de pago</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Efectivo</option>
                <option>Tarjeta de crédito</option>
              </select>
            </div>


            <button className="btn btn-primary">Hacer pedido</button>

        
          </form>



    </>
  )
}
