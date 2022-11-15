import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image } from 'antd-mobile'
import { getHonor } from '@/api/about'

import './index.less'

import bannerSrc from '@/assets/images/team.png'

export default function Honor() {
  
  const title = '荣誉资质'
  const desc = ['实力与水平的见证']
  const pageSize = 500

  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    loadMore()
  }, [])

  async function loadMore() {
    const res = await getHonor({
      pageNum,
      pageSize
    })
    const append = res.rows
    setData(append)
  }

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>
      <div className='honor-title'>
        <div className='title'>荣誉资质</div>
      </div>

      <div className='honor-cert'>
        {data.map((item, index) => {
          return (
            <div className='honor-item' key={index.toString()}>
              <Image src={import.meta.env.VITE_BASEURL + item.photo} height={100} fit="contain" />
              <div className='honor-desc'>{item.introduce}</div>
            </div>

          )
        })}
        
      </div>
    </div>
  )
}
