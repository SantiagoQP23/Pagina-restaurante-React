import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from '../store/store';

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
import { PagoPedido } from '../pages/PagoPedido';


export const AppRouter = () => {
  

  return (
    <>
    

      <Router>
        <Routes>
          <Route path='/' element={<App />} >

            <Route index element={<Inicio />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='pedidos/:idPedido' element={<PagoPedido />}/>
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
