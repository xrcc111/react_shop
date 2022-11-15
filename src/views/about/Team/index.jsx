import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image } from 'antd-mobile'
import { getTeam } from '@/api/about'

import './index.less'

import bannerSrc from '@/assets/images/team.png'

export default function Team() {
  
  const title = '核心团队'
  const desc = ['海外归国创业、深耕行业多年']
  const pageSize = 500

  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    loadMore()
  }, [])

  async function loadMore() {
    const res = await getTeam({
      pageNum,
      pageSize
    })
    const append = res.rows
    setData(append)
  }

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>
      <div className='team-title'>
        <div className='title'>核心团队</div>
      </div>

      <div className='team-cert'>
        {data.map((item, index) => {
          return (
            <div className='team-item' key={index.toString()}>
              <Image src={import.meta.env.VITE_BASEURL + item.photo} height={100} fit="contain" />
              <div className='team-name'>{item.staffName}</div>
              <div className='team-desc'>{item.profile}</div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}
