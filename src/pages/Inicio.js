import React from 'react';

import '../styles/inicio.css';

export const Inicio = () => {
  return (
    <>
      <main className="container">
        <hr />


        {/*     <!-- Menu mejores platos -->
 */}
        <section>
          <h3 className="display-3 text-center" id="Menu-tit">MENÚ </h3>
          <div className="row mejores-platos">

            {/*         <!-- Aquí deben ir los productos -->
 */}
          </div>

        </section>

        <hr />

        <section className="categorias">
          <div className="row categoria">
            <div className="col-12 col-sm-6 col-md-7">


              <div className="caja-img-categoria">
                <img src="https://images-gmi-pmc.edge-generalmills.com/2e80349f-8df5-4903-a8ec-7ed47c590761.jpg"
                  className="img-fluid img-categoria" alt="..." />
              </div>

            </div>

            <div className="col-12 col-sm-6 col-md-5 text-center">
              <h3 className="align-middle "><b className="desayunos">Desayunos</b></h3>
              <p>Encuentra una gran variedad de desayunos, todos incluyen una taza de café.</p>
              <p id="precio-plato">Desde $2.50</p>


            </div>
          </div>

          <div className="row categoria">
            <div className="col-12 col-sm-6 col-md-5 text-center ">

              <h3 className="align-middle "><b className="piqueos">Piqueos</b></h3>
              <p>Camarones reventados, calamar reventado, chicharrón de pescado, banderazo de mariscos.</p>
              <p id="precio-plato">Desde $8</p>

            </div>

            <div className="col-12 col-sm-6 col-md-7 ">
              <div className="caja-img-categoria">
                <img className="img-fluid img-categoria" src="recursos/51248830_cioppino_1x1.jpg" />
              </div>


            </div>
          </div>

          <div className="row categoria text-center ">

            <div className="col-12 col-sm-6 col-md-7">

              <div className="caja-img-categoria">
                <img src="https://www.cocina-ecuatoriana.com/base/stock/Recipe/334-image/334-image_web.jpg"
                  className="img-fluid img-categoria" />
              </div>


            </div>


            <div className="col-12 col-sm-6 col-md-5 ">

              <h3 className="align-middle "><b className="piqueos">Piqueos</b></h3>
              <p>Camarones reventados, calamar reventado, chicharrón de pescado, banderazo de mariscos.</p>
              <p id="precio-plato">Desde $8</p>


            </div>

          </div>



        </section>

        <hr />

        <section className="beneficios ">
          <h3 className="text-center" id="beneficios-tit">Descubre más beneficios</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <img className="img-ben" src="recursos/Restaurante.jpg"  />

            </div>

            <div className="col-12 col-md-6">
              <p><b>Contamos con los mejores meseros</b><br />Nuestros meseros se destacan por su agradable y excelente
                atención.
              </p>
              <p><b>Locales seguros</b><br />Contamos con un sistema de cámaras para la seguridad de nuestros clientes.</p>


            </div>
          </div>
        </section>

        <hr />

        <section className="reservaciones text-center" >
          <h2 id="reservaciones-tit">Reservaciones</h2>
          <p >Para reservaciones por favor llame al: <a href=" tel:+593982326842 ">0982326842</a><br /> O <a
            href="paginas/reservacion.html ">Rellene el formulario</a></p>
        </section>
        <hr />

        {/*     <!-- Nosotros -->
 */}    <section>
          <h2 className="tit-nosostros text-center">Nosotros</h2>
          <div className="row ">
            <div className="col-12 col-md-6 ">
              <video className="video-res " src="recursos/Restaurante.mp4 " muted loop controls ></video>

            </div>

            <div className="col-12 col-md-6 text-center ">
              <h3>Video</h3>
              <p>Nuestro restaurante</p>

            </div>

          </div>
        </section>


        <hr />

        <section className="horario text-center">

          <p id="horario "><b>Nuestro restaurante está abierto los 7 dias de la semana</b><br /> lunes a viernes: 8:00 a 17:00
            <br /> Sabado y domingo: 7:00 a 18:30
          </p>
        </section>

        <hr />

        <h3 className="text-center ">Ubicación</h3>
        <iframe className="mapa "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.045700238089!2d-80.77429435026932!3d-2.13614833773701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902de0675aeaaac9%3A0x52eba1cf0d5493ab!2sCaba%C3%B1a%20Los%20Manabas!5e0!3m2!1ses!2sec!4v1644252030703!5m2!1ses!2sec "></iframe>

    </main>



    
    </>
  )

}
