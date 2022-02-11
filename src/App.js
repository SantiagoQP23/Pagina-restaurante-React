import React from 'react';
import { Outlet } from 'react-router-dom'

// EStilos
import './styles/App.css'

// componentes
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {


  return (
    <>
        <Header />
        <Outlet />
        <Footer />
   


    </>

  )
}

