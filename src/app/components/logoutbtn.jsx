"use client"
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'

const Logoutbtn = () => {
    const {push} = useRouter()
    const logout = async()=>{
        try {
            const response = await axios.post("/api/logout")
            if(response.data.status===200){
                alert("logout")
                push("/pages/login")
            }
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
    <button type='button' className='bg-red-600 px-5 py-2 rounded text-white font-bold' onClick={logout}>Logout</button>
    </>
  )
}

export default Logoutbtn