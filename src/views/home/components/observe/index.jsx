import React, { useState, useEffect } from 'react'
import { getCurrentObserves } from '@/api/home'
import { useNavigate } from "react-router-dom"
import { Image, Ellipsis } from 'antd-mobile'
import './index.less'

export default function Observe() {
  const [observes, setObserves] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    _getCurrentObserves()
  },[])
  const  _getCurrentObserves = () => {
    getCurrentObserves().then(res => {
      if(res.code === 200) {
        const { rows } = res
        const value = rows.slice(0, 3)
        setObserves(value)
      }
    }).catch(err => {
      throw new Error(err)
    })
  }
  function goObserve () {
    navigate('/observe')
  }
  function goObserveDetail (item) {
    navigate(`/news-detail?id=${item.watchId}&type=watch`)
  }
  return (
    <div className='observe'>
      <div className='flex'>
        <p className='title'>行业观察</p>
        <p className='more' onClick={() => {goObserve()}}><span>查看更多</span> <i className='iconfont icon-arrow-o-right'></i> </p>
      </div>
      <div className='content'>
       {
         observes.map((i, index) => <div className='card' key={ index }>
           <Image src={ import.meta.env.VITE_BASEURL + i.photo }></Image>
           <div className='desc' onClick={() => {goObserveDetail(i)}}>
             <Ellipsis className='title' direction='end' rows={2} content={ i.watchTitle } />
             <p className='time'>{ i.createTime }</p>
           </div>
         </div>)
       }
      </div>
    </div>
  )
}
