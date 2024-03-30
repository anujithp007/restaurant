import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img1 from '../assets/pexels-jang-_s-_-699953-removebg-preview.png'

const Home = () => {
   
  
  return (
    <div>
        <div className='flex flex-wrap justify-around  items-center'>
            <img className='w-[35rem]' src={img1} alt="" />
            <div className='text-center font-serif text-[4rem]'>
                Nurture Your <br />
                Passion For Food <br /> And Life
            </div>
        </div>
        <p className='text-center text-[3rem] text-blue-300'>Find your Favourite food spots</p>
        <button type="button" class="text-white float-end bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore Restraurants</button>
    </div>
  )
}

export default Home