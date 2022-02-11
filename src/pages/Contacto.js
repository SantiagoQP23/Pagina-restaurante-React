import React from 'react'

export const Contacto = () => {
  return (
    <>
      <main>
        <h1 className="text-center">FORMULARIO DE CONTACTO</h1>
        <div className="container">

          <form className="p-2 m-5">
            <div className="form row">

              <div className="form-group col-12">
                <label for="nombre">Nombre completo</label>
                <input type="text" className="form-control" aria-describedby="nombreCompleto" placeholder="Ingrese su nombre" />
              </div>


              <div className="form-group col-12 ">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>

              <div className="form-group col-12 ">
                <label for="exampleFormControlTextarea1">Comentarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value=" "></textarea>
              </div>

            </div>
            <button type="submit" className="btn btn-primary ">Enviar mensaje</button>
          </form>



        </div>
        <section className='row bg-black text-white p-5 ' >
            <p className="mb-5">Nosotros siempre estamos listos para ayudarte. Hay muchas formas de contactarnos. Puedes escribirnos en línea, llámenos o envíe un correo electrónico. Elija la forma más cómoda para usted</p>

            <div className="col-12 col-md-6 col-lg-4">
              <h6>Dirección: San Pablo</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h6>Teléfono: 0992629516</h6>

            </div>
            <div className="col-12 col-md-6 col-lg-4">

              <h6>Email: santiagoquirumbay10@gmail.com</h6>
            </div>



        </section>

      </main>





    </>
  )
}
