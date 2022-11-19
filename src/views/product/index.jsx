import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProductById } from '@/api/home'
import { DotLoading } from 'antd-mobile'
import PublicDetail from '@/components/PublicDetail'

export default function Product() {
  const [details, setdDtails] = useState([])
  const [loading, setLoading] = useState(false)
  const [params] = useSearchParams()
  const id = params.get('id')

  useEffect(() => {
    _getProductById()
  },[id])
  const _getProductById = () => {
    getProductById(id).then(res => {
      setLoading(true)
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
    <div className='product'>
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
