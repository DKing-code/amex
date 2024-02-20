import React, { useState } from "react";
import styles from "../style";
import { discount, robot, family, imac, cardAtm } from "../assets";
import { GetStarted } from "./index";
import axios from "axios";
import APIURL from "../apiUrl";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const [logins, setLogins] = useState({})
  const [err, setError] = useState(false)
  const [errMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = (e) => {
    setLoading(true)
    e.preventDefault()
    const login = async () => {
      await axios.post(`${APIURL}/user/login`, { ...logins })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem("token", res?.data);
            navigate('/dashboard', { replace: true })
            setLoading(false)
            console.log(logins)
          }
        }).catch(err => {
          setErrorMsg(err.message)
          setError(true)
          setErrorMsg('Invalid Credentials')
          setLoading(false)
        })
    }

    login()

  }
  return (
    <section
      className="w-screen h-screen bg-black flex justify-center items-center"
    >

      <div className='bg-white dark:bg-black p-5 md:max-w-[30%] container md:mx-auto rounded-lg'>
        <h1 className="text-xl font-bold my-5 text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to Web Terminal
        </h1>
        <form className="space-y-4 md:space-y-6 " onSubmit={handleLogin}>
          {err ? <p className="text-red-600 text-center">{errMsg}</p> : ''}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border w-[100%] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
              onChange={e => setLogins({ ...logins, email: e.target.value })}
              onFocus={() => setError(false)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Server ID
            </label>
            <input
              type="text"
              name="id"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="AV5HR690VJUIR"
              required
              onChange={e => setLogins({ ...logins, ServerID: e.target.value })}
              onFocus={() => setError(false)}
            />
          </div>
          <div>
            <label
              htmlFor="ip"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Server IP
            </label>
            <input
              type="text"
              name="ip"
              id="ip"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
              onChange={e => setLogins({ ...logins, ServerIP: e.target.value })}
              onFocus={() => setError(false)}
            />
          </div>
          <div>
            <label
              htmlFor="servercode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Security Code
            </label>
            <input
              type="text"
              name="code"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FBHYTUSO"
              required
              onChange={e => setLogins({ ...logins, SecurityCode: e.target.value })}
              onFocus={() => setError(false)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={e => setLogins({ ...logins, password: e.target.value })}
              onFocus={() => setError(false)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {loading ? 'Verifying.....' : 'Sign In'}
          </button>
        </form>

      </div>
      <div
      // className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}
      >
        {/* <img
          src={imac}
          className="w-[100%] h-[100%] relative z-[5]"
          alt=""
        /> */}
        {/* <div classNameName="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div classNameName="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div classNameName="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
    </section>
  );
};

export default Hero;
