import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const {id}=useParams()
  console.log(id);
  const[data,setData]=useState('')
  useEffect(()=>{
    const fetchData=async ()=>{
      const response=await axios.get('https://firstflight-web.ipixsolutions.net/api/getRestaurants')
      const restaurant = response.data.restaurants.find((item)=>item.id==id)
      console.log(restaurant,'k');
      setData(restaurant)
    }
    fetchData()
  },[])
  console.log(data,'jjjjj');
  return (
    <div>
    
<a href="#" class="block max-w-sm m-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">{data.address}</p>
<p class="font-normal text-gray-700 dark:text-gray-400">{data.cuisine_type}</p>
<p class="font-normal text-gray-700 dark:text-gray-400">NeighbourHood:  {data.neighborhood}</p>
<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Operating Hours</h5>
<ul>
  <li>Monday:{data.operating_hours?.Monday}</li>
  <li>Tuesday:{data.operating_hours?.Tuesday}</li>
  <li>Wednesday:{data.operating_hours?.Wednesday}</li>
  <li>Thursday:{data.operating_hours?.Thursday}</li>
  <li>Friday:{data.operating_hours?.Friday}</li>
  <li>Saturday:{data.operating_hours?.Saturday}</li>
  <li>Sunday:{data.operating_hours?.Sunday}</li>
</ul>


</a>

    </div>
  )
}

export default DetailPage