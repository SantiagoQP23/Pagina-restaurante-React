
import React , {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/header.css';

import imgAncla  from '../recursos/ancla.png';

export const Header = () => {

  

  const navigate = useNavigate();

  const [offset, setOffset] = useState(1);

/*   useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []); */

  
  


  return (
    <>
      <section id="call-to-action">
        <header>
          <nav className={"navbar navbar-expand-md menu fixed-top menu-items bg-dark bg-gradient" + (offset ? "menu-oscuro": "")}>
            <a className="navbar-brand text-white d-md-none d-block" href="#">Restaurante</a>
            <button className="navbar-toggler btn-menu" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="bi bi-menu-button text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto justify-content-center">

                <li className="nav-item">
                  <a className="nav-link active" onClick={ () => navigate('/')}>Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={ () => navigate('/menu')}>Menú</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={ () => navigate('servicios') }>Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={ () => navigate('/pedidos') }>Pedidos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " onClick={ () => navigate('reservacion') }>Reservación</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " onClick={ () => navigate('nosotros') }>Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " onClick={ () => navigate('contacto') }>Contáctenos</a>
                </li>
              </ul>

            </div>
          </nav>


        </header>


        <section>
          <h1 className="display-1">RESTAURANTE</h1>
          <p>Realiza tu pedido o reservación y degustalo en nuestro establecimiento</p>
          <img src={imgAncla} alt="Imagen de ancla"/><br />

            <button className="btn btn-light" type="button" onClick={() => navigate('/pedidos')}>Realizar Pedido</button>
            <button className="btn btn-light" type="button" onClick={() => navigate('/reservacion')}>Reserva</button>

            <p className="lead">
              Disfruta la mejor comida y el mejor ambiente junto al mar.<br /> Podras degustar de los mas variado y exquisitos
              platos de comida nacional. <br /> Buscamos activamente los mariscos y productos regionales mas frescos.
            </p>
            <br />


        </section>

      </section>




    </>
  )
}
