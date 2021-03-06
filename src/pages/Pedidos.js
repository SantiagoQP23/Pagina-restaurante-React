import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Data
import { categorias } from '../data/categorias';
import { productos } from '../data/productos';


// Componentes
import { FiltrosPedido } from '../components/FiltrosPedido';

// Estilos
import '../styles/pedidos.css';
import { ProductosPedido } from '../components/ProductosPedido';
import { DetallePedido } from '../components/DetallePedido';

const useMountEffect = fun => useEffect(fun, );


export const Pedidos = () => {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState(1);
  const [productosCategoria, setProductosCategoria] = useState([]);


  const state = useSelector(state => state);
  const { detallesPedido } = state.detalles;
  const { pedidoActivo } = state.pedidos;


  const cambiarCategoria = (id) => {
    setCategoria(id);

  }

  const obtenerProductos = (idCategoria) => {

    const products = productos.filter(p => p.idCategoria === Number(idCategoria));

    setProductosCategoria(products);


  }

  useEffect(() => {

   
    obtenerProductos(categoria);

  }, [categoria]);

  useEffect(() => {
    obtenerProductos(categoria);

  }, []);

  const principal = useRef(null);


  const executeScroll = () => principal.current.scrollIntoView(false);


  useMountEffect(executeScroll);

  return (
    <>
      <main className="container justify-content-center bg-white " id="pedido" ref={principal}>
        <h2 className='text-center'> Realizar Pedido</h2>
        <section className="row edicion-pedido ">
          {/*   <!-- Filtros de productos --> */}
          <FiltrosPedido
            categoria={categoria}
            categorias={categorias}
            cambiarCategoria={cambiarCategoria}
          />


          {/*         <!-- Productos de la categoria -->*/}
          <section className=" row productos col-12 m-1 mb-3">
            <ProductosPedido productos={productosCategoria} />
          </section>

          {/*         <!-- Detalles del pedido -->*/}
          <section className="row justify-content-center  detalles " id="detalles-tabla">
            <h5>Carrito de compras</h5>

            {
              detallesPedido.length === 0 && (
                <span>A??n no has a??adido productos al carrito</span>
              )

            }
            {
              detallesPedido.length > 0 && detallesPedido.map(detalle => (
                <DetallePedido key={detalle.idDetalle} detalle={detalle} />

              ))
            }

          </section>



        </section>
        <section className='text-right m-5'>

          <h2 >Resumen del pedido</h2>
          <h5 >Total: $ {pedidoActivo.total}</h5>

          <button
            type='button'
            className='btn btn-primary'
            onClick={() => navigate('/pedidos/pagar')}
          >
            Realizar pedido
          </button>

        </section>

      </main>



    </>
  )
}
