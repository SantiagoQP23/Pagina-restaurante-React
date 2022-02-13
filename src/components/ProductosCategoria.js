import React , {useState} from 'react';
import { productos } from '../data/productos';
import {ModalProducto} from './ModalProducto';



export const ProductosCategoria = ({ idCategoria }) => {

  const productosCategoria = productos.filter( p => p.idCategoria === idCategoria);

  const [modalShow, setModalShow] = useState(false);

  const [productoActivo, setProductoActivo] = useState({});



  return (
    <>

      <ModalProducto show={modalShow} onHide={() => setModalShow(false)} producto={productoActivo}/>

      {

        productosCategoria.map(p => (
          <div key={p.idProducto} className="col-12 col-sm-6 col-md-4 mt-1" onClick={() => {setProductoActivo(p); setModalShow(true)}}>

            <div className="card">
              <div className="card-body producto">
                <h5 className="card-title">{p.nombreProducto}</h5>
                <h6 className="card-subtitle mb-2 text-muted">$ {p.precioProducto}</h6>
                <p className="card-text">{p.descripcionProducto}</p>

              </div>
            </div>

          </div>



        ))
      }



    </>
  )
}
