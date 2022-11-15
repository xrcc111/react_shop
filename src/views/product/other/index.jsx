import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProductById } from '@/api/home'
import PublicDetail from '@/components/PublicDetail'

export default function Other() {
  const [details, setdDtails] = useState([])
   const location = useLocation()
  const {state:{ id }} = location
  useEffect(() => {
    _getProductById()
  },[])
  const _getProductById = () => {
    getProductById(id).then(res => {
      if(res.code === 200) {
        const { rows } = res
        setdDtails(rows)
      }
    }).catch(err => {
      throw new Error(err)
    })
  }
  return (
    <div className='other'>
      <PublicDetail details ={ details } type= {'product'}></PublicDetail>
    </div>
  )
}
