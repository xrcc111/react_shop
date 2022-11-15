import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image } from 'antd-mobile'
import { getObserve } from '@/api/news'

import './index.less'

import bannerSrc from '@/assets/images/observe.png'

export default function Observe() {
  
  const title = '行业观察'
  const desc = ['把握时代脉搏、聚焦行业前沿']
  const pageSize = 10

  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    loadMore()
  }, [])

  async function loadMore() {
    const res = await getObserve({
      pageNum,
      pageSize
    })
    console.log(res, '***')
    const append = res.rows
    setData(append)
  }

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>
      {data.map((item,index) => {
        return (
          <div className='watch-item' key={index.toString()}>
            <div className='watch-img'>
              <Image src={import.meta.env.VITE_BASEURL + item.photo} width={150} fit="contain" />
            </div>
            <div className='watch-content'>
              <div className='watch-title'>{item.watchTitle}</div>
              <div className='watch-desc'>{item.content}</div>
              <div className='watch-time'>{item.createTime}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
