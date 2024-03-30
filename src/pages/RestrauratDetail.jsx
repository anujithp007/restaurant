import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ResCards } from '../components/ResCards'
import img1 from '../assets/pexels-jang-_s-_-699953-removebg-preview.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../redux/slice.js'


const RestrauratDetail = () => {
    const [data,setData]=useState([ ])
    let carts=useSelector((state)=>state.datafetch.cart)
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchData= async ()=>{
            let response= await axios.get('https://firstflight-web.ipixsolutions.net/api/getRestaurants')
            console.log(response,'kk');
            setData(response.data.restaurants)
        }
        fetchData()
    },[])
    console.log(data,'ki');
    const handleAddCart = (id) => {
        const newItem = data.find(item => item.id === id);
        if (newItem) {
            dispatch(addCart(newItem));
        }
    };

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
    };

    const isItemInCart = (id) => {
        return carts.some(item => item.id === id);
    };
    
  return (
    
    <div className='flex flex-wrap gap-4 justify-center'>
        {data.map((item) => (
  <div key={item.id}>
    <ResCards
      key={item.id}
      image={item.photograph || img1}
      name={item.name}
      type={item.cuisine_type}
      place={item.neighborhood}
      hours={item.address}
    />
    {isItemInCart(item.id) ? (
      <button
        onClick={() => handleRemoveCart(item.id)} // Pass item.id to handleRemoveCart
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        type="button"
      >
        Remove cart
      </button>
    ) : (
      <button
        onClick={() => handleAddCart(item.id)} // Pass item.id to handleAddCart
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        type="button"
      >
        Add cart
      </button>
    )}
  </div>
))}

            
                
      
    </div>
  )
}

export default RestrauratDetail