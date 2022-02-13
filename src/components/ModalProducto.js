import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter'



export const ModalProducto = (props) => {

  const { producto } = props;



  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">
            {producto.nombreProducto}
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="row">

            <div className="col-12 col-md-12  col-lg-6">

              <div className="img-producto-modal">
                <img src={producto.pathImg}
                  className="img-fluid img-producto" alt={"Imagen de " + producto.nombreProducto} />
              </div>


            </div>

            <div className="col-12 col-md-12  col-lg-6">
              <h5>{producto.nombreProducto}</h5>
              <span>Camarón</span>
              <br />
              <span>$ {producto.precioProducto}</span>
              <br />
              <p>{producto.descripcionProducto}</p>

              <div className="inf-producto">

               
              </div>




            </div>
            </div>

        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onHide}>Close</Button>
        </ModalFooter>
      </Modal>

    </>
  )
}
