import React, {useEffect, useRef} from 'react';


const useMountEffect = fun => useEffect(fun, []);

export const Reservacion = () => {


  const principal = useRef(null);


  const executeScroll = () => principal.current.scrollIntoView(false);


  useMountEffect(executeScroll);


  return (
   
    <main className='principal' ref={principal}>
    <h1 className="titulo text-center">Reservaciones</h1>
    <div className="container" >

      <h6>¡Reservaremos una mesa solo para ti! llámenos al 0984848459 o rellene el formulario de abajo, y le
        confirmaremos si la fecha y la hora están disponibles.</h6>


      <form className="p-3">
        <div className="form row">

          <div className="form-group col-12 col-md-7">
            <label htmlFor="nombre">Nombre completo</label>
            <input type="text" className="form-control" aria-describedby="nombreCompleto" placeholder="Ingrese su nombre" />
          </div>

          <div className="form-group col-12 col-md-5">
            <label htmlFor="invitados">Número de invitados</label>
            <input type="number" className="form-control" aria-describedby="Número de invitados "
              placeholder="Número de invitados" />
          </div>

          <div className="form-group col-12 col-md-6">
            <label htmlFor="Fecha">Fecha</label>
            <input type="date" className="form-control" aria-describedby="Fecha" placeholder="" />
          </div>

          <div className="form-group col-12 col-md-6">
            <label htmlFor="Hora">Hora</label>
            <input type="time" className="form-control" aria-describedby="Hora" placeholder="" />
          </div>

          <div className="form-group col-12 col-md-7">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email"/>
          </div>

          <div className="form-group col-12 ">
            <label htmlFor="exampleFormControlTextarea1">Comentarios</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
          </div>

        </div>
        <button type="submit" className="btn btn-primary ">Reservar</button>
      </form>

    </div>
  </main>
  )
}
