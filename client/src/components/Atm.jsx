import React from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";


function Atm({detail}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="shadow-lg shadow-blue-10 rounded-xl p-5 md:py-6 card-bg md:h-auto  mb-5">
      <p onClick={()=>handleOpen()}>eye</p>
      <div className="md:my-4">
        <p className="text-3xl text-center text-light">American Express</p>
        {/* <small>Card number</small> */}
      </div>

      <div className="flex justify-between ">
        <div className="">
          <p className="lg:text-3xl md:text-md text-3xl md:font-light">$ {detail?.cardLimit?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
          <small>Card balance</small>
        </div>
        <div className="my-3">
          <p className="text-xl">{detail?.expiryDate}</p>
          <small>Expiry Date</small>
        </div>

        <div className="my-3">
          <p className="text-xl">{detail?.cvv}</p>
          <small>CVV</small>
        </div>
      </div>
      <div className="my-3">
          <p className="text-xl">{detail?.cardHolderName}</p>
          <small>Card Holder Name</small>
      </div>

    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Card Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Placeholder.Paragraph />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="primary">
          Ok
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

    
    </div>


  );


  
}

export default Atm;
