import React from 'react'

export const FiltrosPedido = ({categorias, cambiarCategoria, categoria}) => {
  return (
    <>
      <form className="row col-12 m-1 p-3">
        <h5>Filtrar productos</h5>
        <div className="form-group col-12 col-lg-4">
          <label htmlFor="exampleFormControlSelect1">Seleccione una categoria</label>
          <select className="form-control select-categorias" defaultValue={categoria} onChange={(e) => {cambiarCategoria(e.target.value)}} id="exampleFormControlSelect1">
            {
              categorias.map( c => (
                <option key={c.idCategoria} value={c.idCategoria}>{c.nombreCategoria}</option>

              ))
            }

          </select>
        </div>

        <div className="form-group col-12 col-lg-4">
          <label htmlFor="exampleFormControlInput1">Buscar producto</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre del producto" />
        </div>

      </form>


    </>
  )
}
