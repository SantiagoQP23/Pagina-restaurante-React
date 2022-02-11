import React from 'react'

export const Reservacion = () => {
  return (
   
    <main className='p-5'>
    <h1 class="titulo text-center">Reservaciones</h1>
    <div class="container" >

      <h6>¡Reservaremos una mesa solo para ti! llámenos al 0984848459 o rellene el formulario de abajo, y le
        confirmaremos si la fecha y la hora están disponibles.</h6>


      <form class="p-5">
        <div class="form row">

          <div class="form-group col-12 col-md-7">
            <label for="nombre">Nombre completo</label>
            <input type="text" class="form-control" aria-describedby="nombreCompleto" placeholder="Ingrese su nombre" />
          </div>

          <div class="form-group col-12 col-md-5">
            <label for="invitados">Número de invitados</label>
            <input type="number" class="form-control" aria-describedby="Número de invitados "
              placeholder="Número de invitados" />
          </div>

          <div class="form-group col-12 col-md-6">
            <label for="Fecha">Fecha</label>
            <input type="date" class="form-control" aria-describedby="Fecha" placeholder="" />
          </div>

          <div class="form-group col-12 col-md-6">
            <label for="Hora">Hora</label>
            <input type="time" class="form-control" aria-describedby="Hora" placeholder="" />
          </div>

          <div class="form-group col-12 col-md-7">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email"/>
          </div>

          <div class="form-group col-12 ">
            <label for="exampleFormControlTextarea1">Comentarios</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
          </div>

        </div>
        <button type="submit" class="btn btn-primary ">Reservar</button>
      </form>

    </div>
  </main>
  )
}
