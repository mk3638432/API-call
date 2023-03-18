import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./API.css"

const API = () => {
    const [fetchdata , setFetchData] = useState([])
   useEffect(() => {
    axios.get("https://dummyjson.com/posts")
    .then((res) => {
       setFetchData(res.data.posts)
       console.log(res.data.posts)
    })
   } , [])
  return (
    <div className='maindiv'>
        {fetchdata.map((res , i) => {
            const {id , title , body} = res
            return(
                <div key= {i} className="div">
                    <h1 className='id'>{id} </h1>
                    <h3 className='title'>{title.toUpperCase()} </h3>
                    <h3 className='body'>{body} </h3>
                </div>
            )
        })}
    </div>
  )
}

export default API

