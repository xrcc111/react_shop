import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image } from 'antd-mobile'
import { getNews } from '@/api/news'

import './index.less'

import bannerSrc from '@/assets/images/xinwen.jpg'

export default function News() {
  
  const title = '动态新闻'
  const desc = ['获取最新动态、关注企业要闻']
  const pageSize = 10

  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    loadMore()
  }, [])

  async function loadMore() {
    const res = await getNews({
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
          <div className='news-item' key={index.toString()}>
            <div className='news-img'>
              <Image src={import.meta.env.VITE_BASEURL + item.photo} width={120} fit="contain" />
            </div>
            <div className='news-content'>
              <div className='news-title'>{item.newsTitle}</div>
              <div className='news-time'>{item.createTime}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
