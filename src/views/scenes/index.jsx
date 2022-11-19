import React,  { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSceneById } from '@/api/home'
import { DotLoading } from 'antd-mobile'
import PublicDetail from '@/components/PublicDetail'

export default function Scenes() {
  const [details, setdDtails] = useState([])
  const [loading, setLoading] = useState(false)
  const [params] = useSearchParams()
  const id = params.get('id')

  useEffect(() => {
    _getSceneById()
  },[id])
  const _getSceneById = () => {
    setLoading(true)
    getSceneById(id).then(res => {
      if(res.code === 200) {
        const { rows } = res
        setdDtails(rows)
        setLoading(false)
      }
    }).catch(err => {
      throw new Error(err)
    })
  }
  return (
    <div className='scenes'>
        {
           loading ? 
            <div style={{textAlign:'center', height: '300px', lineHeight: '300px'}}>
              加载中
              <DotLoading color='primary' />
            </div>
         : <PublicDetail details ={ details } type= {'scenes'}></PublicDetail>
        }
    </div>
  )
}

