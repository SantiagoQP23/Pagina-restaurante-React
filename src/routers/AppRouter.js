import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Componente principal
import { App } from '../App';

// Páginas
import { Contacto } from '../pages/Contacto';
import { Error404 } from '../pages/Error404';
import { Inicio } from '../pages/Inicio';
import { Menu } from '../pages/Menu';
import { Nosotros } from '../pages/Nosotros';
import { Pedidos } from '../pages/Pedidos';
import { Reservacion } from '../pages/Reservacion';

export const AppRouter = () => {

  const navbar = document.querySelector(".menu");

  /* 
    navbar.addEventListener('scroll', (e) => {
      const y = window.scrollY;
  
      if (y > 10)
        navbar.classList.add("menu-oscuro");
  
      if (y <= 10)
        navbar.classList.remove("menu-oscuro");
  
    });
  
    const btnMenu = document.querySelector(".btn-menu");
  
    btnMenu.addEventListener('click', (e) => {
      navbar.classList.toggle("bg-black")
  
    });
  
   */

  return (
    <>
     
      <Router>
        <Routes>
          <Route path='/' element={<App />} >

            <Route index element={<Inicio />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='pedidos' element={<Pedidos />} />
            <Route path='reservacion' element={<Reservacion />} />
            <Route path='menu' element={<Menu />} />
            <Route path='nosotros' element={<Nosotros />} />
            <Route path='*' element={<Error404 /> } />

          </ Route>
        </Routes>

      </Router>
    </>
  )
}
