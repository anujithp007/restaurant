import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setData]=useState('')
    useEffect(()=>{
        const fetchdata=()=>{
            let response=axios.get(`https://firstflight-web.ipixsolutions.net/api/getRestaurants/${id}`)
            setData(response.data)
        }
        fetchdata()
    },[id])
    console.log(data,'ji');
  return (
    <div>

    </div>
  )
}

export default DetailPage