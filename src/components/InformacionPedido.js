import React from 'react'

export const InformacionPedido = () => {
  return (
    <>
     
            <h5>Información personal</h5>

            <div className="form-group col-12 col-lg-12">
              <label htmlFor="exampleFormControlInput1">Nombre completo</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre del producto" />
            </div>

            <div className="form-group col-12 col-lg-7">
              <label htmlFor="exampleFormControlInput1">Email</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>

            <div className="form-group col-12 col-lg-5">
              <label htmlFor="exampleFormControlInput1">Telefono</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Telefono" />
            </div>

            <div className="form-group col-12 col-lg-8">
              <label htmlFor="exampleFormControlSelect1">Forma de pago</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Efectivo</option>
                <option>Tarjeta de crédito</option>
              </select>
            </div>


            <button className="btn btn-primary">Hacer pedido</button>




        
        


    
    </>
  )
}
