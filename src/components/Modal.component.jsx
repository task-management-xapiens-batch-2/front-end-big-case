import React, { useState } from 'react'
import ButtonComponent from './Button.component'

const Modal = ({newData}) => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(newData)

    return (
        <>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // key={id}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>{title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <form>
            <p className="font-weight-bold">Notes for planner: </p>
            <textarea type="text" style={{width: "100%", resize: "none", height: "200px"}} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonComponent
            title="Close"
            variant="secondary"
            onClick={handleClose}
          />
          <ButtonComponent title="Submit" />
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default Modal
