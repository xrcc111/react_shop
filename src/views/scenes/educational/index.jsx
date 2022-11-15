import React,  { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSceneById } from '@/api/home'
import PublicDetail from '@/components/PublicDetail'

export default function Educational() {
  const [details, setdDtails] = useState([])
   const location = useLocation()
  const {state:{ id }} = location
  useEffect(() => {
    _getSceneById()
  },[])
  const _getSceneById = () => {
    getSceneById(id).then(res => {
      if(res.code === 200) {
        const { rows } = res
        setdDtails(rows)
      }
    }).catch(err => {
      throw new Error(err)
    })
  }
  return (
    <div className='educational'>
      <PublicDetail details ={ details } type= {'scene'}></PublicDetail>
    </div>
  )
}

