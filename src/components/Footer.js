import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className=" bg-black text-white text-center p-5">

        <div className="row ">

          <div className="col-12 col-md-4 ">
            <h4>RESTAURANTE</h4>
            <p>© 2021 | Politica de privacidad</p>

          </div>
          <div className="col-12 col-md-4 ">
            <h4>DIRECCIÓN</h4>
            <p>San Pablo Ruta del Spondylus <br /> Santa Elena Ecuador, San Pablo</p>
            <p>Teléfono: 0928729381</p>

          </div>
          <div className="col-12 col-md-4 ">
            <h4>Redes Sociales</h4>
            
            <a href="# " id="share-wa " className="sharer button "><i className="fa fa-3x fa-whatsapp "></i></a>
            <a href="# " id="share-fb " className="sharer button "><i className="fa fa-3x fa-facebook-square "></i></a>
            <a href="# " id="share-tw " className="sharer button "><i className="fa fa-3x fa-twitter-square "></i></a>
            <a href="# " id="share-gp " className="sharer button "><i className="fa fa-3x fa-google-plus-square "></i></a>
          </div>

        </div>
      </footer>






    </>
  )
}
