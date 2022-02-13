
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import '../styles/header.css';

import imgAncla from '../recursos/ancla.png';

export const Header = () => {



  const navigate = useNavigate();

  
  return (
    <>
      <section id="call-to-action">
        <header>
          <nav className={"navbar navbar-expand-md menu fixed-top menu-items bg-dark bg-gradient" }>
            <a className="navbar-brand text-white d-md-none d-block" href="#">Restaurante</a>
           
            <button className="navbar-toggler btn-menu" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="bi bi-menu-button text-white"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ">

                <li className="nav-item menu-items">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}
                    to="/"


                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}

                    to="menu"

                  >
                    Menú
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}

                    to='servicios'
                  >
                    Servicios
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}

                    to='pedidos'
                  >
                    Pedidos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}

                    to='reservacion'
                  >
                    Reservación
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}

                    to='nosotros'
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " link-activo" : "")}

                    to='contacto'
                  >
                    Contáctenos
                  </NavLink>
                </li>
              </ul>

            </div>
          </nav>


        </header>


        <section>
          <h1 className="display-1">RESTAURANTE</h1>
          <p>Realiza tu pedido o reservación y degustalo en nuestro establecimiento</p>
          <img src={imgAncla} alt="Imagen de ancla" /><br />

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
