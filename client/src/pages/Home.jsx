import React from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";



function Home() {
  return (
    <div className=" w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Navbar /> */}
      </div>
    </div>

    {/* <div className={`bg-slate-100 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> */}

    {/* <div className="dark-bg h-[100vh] w-screen flex justify-center items-center">
      <div className='bg-white p-5 md:max-w-[30%]'>
        <form action="">

        </form>
      </div>
    </div> */}

    <Hero />
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
    </div>
  </div>
  )
}

export default Home