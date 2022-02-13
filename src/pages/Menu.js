import React, { useEffect, useRef } from 'react';
import { ProductosCategoria } from '../components/ProductosCategoria';


import { categorias } from '../data/categorias';


const useMountEffect = fun => useEffect(fun, []);


export const Menu = () => {

  const principal = useRef(null);


  const executeScroll = () => principal.current.scrollIntoView();


  useMountEffect(executeScroll);



  return (
    <>
      <main >
        {/*  Modal*/}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-producto">
            {/*     <!-- Aquí va el contenido del modal -->*/}

          </div>
        </div>

        <div className="container categorias " ref={principal}>
          <h1 className="text-center">MENÚ</h1>

          {/*   Aqui van a ir todas las categorias y sus productos */}

          {categorias.map(c => (

            <section key={c.idCategoria} className='categoria p-2'>
              <h4 className="text-center">{c.nombreCategoria.toUpperCase()}</h4>

              <div className="row mt-5 mb-5">
                <ProductosCategoria idCategoria={c.idCategoria} />


              </div>

            </section>




          ))}
        </div>
      </main>


    </>
  )
}
