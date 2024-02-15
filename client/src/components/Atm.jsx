import React from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";


function ShowTable({detail,name}){
  return (
    <tr>
      <td class="border px-4 py-2 ">{name}</td>
      <td class="border px-4 py-2">{detail}</td>
    </tr>
  )
}


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
          <p className="lg:text-3xl md:text-md text-xl md:font-light">$ {detail?.cardLimit?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
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
          <p className="text-md">{detail?.cardHolderName}</p>
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
          <table class="w-full">
            <thead>
              {/* <tr>
                <th class="px-4 py-2">Key</th>
                <th class="px-4 py-2">Value</th>
              </tr> */}
            </thead>
            <tbody>
              <ShowTable detail={detail?.cardNumber} name={'Card Number'} />
              <ShowTable detail={detail.cardHolderName} name={'Card Holders Name'} />
              <ShowTable detail={detail.cardNumber} name={'Card Expiration'} />
              <ShowTable detail={detail.cardType} name={'Card Type'} />
              <ShowTable detail={detail.bankeName} name={'Issuing Bank'} />
              <ShowTable detail={detail.ISOCountryA1} name={'ISO Country A1 Code'} />
              <ShowTable detail={detail.ISOCountryA2} name={'ISO Country A2 Code'} />
              <ShowTable detail={detail.ISOCountryA3} name={'ISO Country A3 Code'} />
              <ShowTable detail={detail.ISOCountryA3} name={'ISO Country No.'} />
              <ShowTable detail={detail.cardLimit} name={'Amount'} />
              <ShowTable detail={detail.approcalCode} name={'Approval Code'} />
              <ShowTable detail={detail.status} name={'Status'} />
              <ShowTable detail={detail.time} name={'Global Time Transfer'} />
              <ShowTable detail={detail.date} name={'Date'} />
              <ShowTable detail={detail.startTime} name={'Start Time'} />
              <ShowTable detail={detail.finishTime} name={'Finish Time'} />
            </tbody>
          </table>
          <div className="flex bg-white gap-3 justify-between p-2">
            <small>LOGIN</small>
            <small>ISSUE TO NEW CARD</small>
            <small>ADD TO EXTERNAL ACCOUNT</small>
            <small>PRINT DATA STATEMENT</small>
          </div>
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
