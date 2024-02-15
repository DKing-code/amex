import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Topbar from "../components/Topbar";
import LineChart from "../components/Chart";
import BalanceCard from "../components/BalanceCard";
import Atm from "../components/Atm";
import axios from 'axios'
import APIURL from "../apiUrl";

import CurrencyConverter from "../components/CurrencyConverter";
import Table from "../components/Table";

// f836299eef-1f2824aa53-rz0ylq
import TransferModal from "../components/TransferModal";
import DepositModal from "../components/DepositModal";
import LoaderComp from "../components/Loader";

function Dashbaord() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [cards, setCards] = useState([])
  // modals
  const [openTrasnfer, setOpenTransfer] = React.useState(false);
  const handleTransferOpen = () => setOpenTransfer(true);
  const handleTransferClose = () => setOpenTransfer(false);
  const date = new Date().toDateString()
  var currentTime = new Date();

  // Get the current hour, minute, and second
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();

  useEffect(() => {
    //get token from localstorage
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location = "/") : ''


    // GETTING ACCOUNT DATA
    const getAcc = async () => {
      let getData = await axios.post(`${APIURL}/account/getById`, { clientid })
      setLoader(false)
      setData(getData.data)
    }

    // GETTING CARD DATA
    const getCards = async () => {
      let getData = await axios.post(`${APIURL}/card/usercards`, { clientid })
      if (getData) {
        setLoader(false)
        setCards(getData.data)

      }
    }
    getAcc()
    getCards()
  }, [])


  return (
    <div>
      {loader ? <LoaderComp /> : ''}

      <div className="bg-black w-screen h-screen text-green-500 overflow-auto">
        <div className="container mx-auto p-10">
          <p className="text-xl text-center">American Express.------access control panel***********secure admin login protocol.
            Master key access domain@785********* VPX191006 SECURE SEVER ****** ADMIN CTRL. http:Americanexpress.com _ WED. 14 Feb, 2024 7:27:00_am +0900**********</p>
          {/*  */}

          <div className="my-5">
            {
              cards && cards?.map((detail, index) => {
                return cards.length >= 1 && (
                  <div key={index} className="my-2 border p-2">
                    <p>Receiver / Card Number : {detail?.cardNumber}</p>
                    <p>Receiver / Card Holder Name : {detail.cardHolderName}</p>
                    <p>Receiver / Card Expiration : {detail.expiryDate}</p>
                    <p>Receiver / Card Type : {detail.cardType}</p>
                    <p>Receiver / Card Issuing Bank : {detail.bankeName}</p>
                    <p>Receiver / ISO Country A1 Code :{detail.ISOCountryA1}</p>
                    <p>Receiver / ISO Country A2 Code : {detail.ISOCountryA2}</p>
                    <p>Receiver / ISO Country A3 Code    :   {detail.ISOCountryA3}</p>
                    <p>Receiver / ISO Country Number : {detail.cardLimit}</p>
                    <p>Receiver / Amount : {detail.cardLimit}</p>
                    <p>Receiver / Approval Code : {detail.approcalCode}</p>
                    <p>Receiver / Global Time Transfer : {'123'}</p>
                    <p>Receiver / Status Transaction :{detail.time}</p>
                    <p>Receiver / Date : {detail.date}</p>
                    <p>Start Time : {detail.startTime}    |  Finish Time : {detail.finishTime} </p>
                    <div className="flex gap-5 bg-green-600 text-white text-center">
                      <p className="p-2 flex-1 border-e-2">Log In</p>
                      <p className="p-2 flex-1  border-e-2">ISSUE TO NEW CARD</p>
                      <p className="p-2 flex-1  border-e-2">ADD TO EXTERNAL ACCOUNT</p>
                      <p className="p-2 flex-1  ">REQUEST CARD CVV</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbaord;
