import React, { useEffect } from 'react';
import { ProductosCategoria } from '../components/ProductosCategoria';


import { categorias } from '../data/categorias';

export const Menu = () => {

  let productosCategoria = [];

  useEffect(() => {




  }, [])





  return (
    <>
      <main>
          {/*  Modal*/}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-producto">
              {/*     <!-- Aquí va el contenido del modal -->*/}

            </div>
          </div>

          <div class="container categorias">
            <h1 class="text-center">MENÚ</h1>

            {/*   Aqui van a ir todas las categorias y sus productos */}

            {categorias.map(c => (

              <section >
                <h4 class="text-center">{c.nombreCategoria.toUpperCase()}</h4>

                <div class="row mt-5 mb-5">
                  <ProductosCategoria idCategoria={c.idCategoria}/>


                </div>

              </section>




            ))}
            </div>
      </main>


        </>
        )
}
