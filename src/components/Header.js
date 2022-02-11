
import React from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/header.css';

import imgAncla  from '../recursos/ancla.png';

export const Header = () => {

  const navigate = useNavigate();


  return (
    <>
      <section id="call-to-action">
        <header>
          <nav className="navbar navbar-expand-md menu fixed-top menu-items ">
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

            <a className="btn btn-light" href="subpaginas/realizarPedido.html" role="button">Realizar Pedido</a>
            <a className="btn btn-light" href="subpaginas/Reserva" role="button">Reserva</a>

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
