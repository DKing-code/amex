import React from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";


function Atm({ detail }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="shadow-lg shadow-blue-10 rounded-xl p-5 md:py-6 card-bg md:h-auto  mb-5">

      <div className="md:my-4 my-2 ">
        <p className="text-2xl text-center text-light">American Express</p>

      </div>

      <div className="flex justify-between ">
        <div className="my-3">
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
      <div className="my-3 flex justify-between items-end">
        <div>
          <p className="text-xl">{detail?.cardHolderName}</p>
          <small>Card Holder Name</small>
        </div>
        <div className=" bg-white px-2 py-1 text-center shadow-md rounded text-black" onClick={() => handleOpen()}>Details</div>

      </div>

      <Modal open={open} onClose={handleClose} className="bg-black text-green-600">
        <Modal.Header>
          <Modal.Title>Card Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black text-green-600 p-1">
          {/* <Placeholder.Paragraph /> */}
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">Key</th>
                <th class="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2 ">Intro to CSS</td>
                <td class="border px-4 py-2">Adam</td>
              </tr>
            
            </tbody>
          </table>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>


  );



}

export default Atm;
