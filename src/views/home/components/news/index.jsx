import React, { useState, useEffect } from 'react'
import { Card } from 'antd-mobile'
import { getCurrentNews } from '@/api/home'
import './index.less'

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    _getCurrentNews()
  },[])
  const _getCurrentNews = () => {
    getCurrentNews().then(res => {
      if(res.code === 200) {
        const { rows } = res
        // 截取前三条到页面渲染
        const value = rows.slice(0,3)
        setNews(value)
      }
    })
  }
  return (
    <div className='news'>
      <div className='flex'>
        <p className='title'>动态新闻</p>
        <p className='more'><span>查看更多</span> <i className='iconfont icon-arrow-o-right'></i> </p>
      </div>
      {
        news.map((i,index) => <Card className='card' key={ index } title = {i.newsTitle}>
          <span style={{color:'#B9B9B9'}}>{ i.createTime }</span>
        </Card>)
      }
    </div>
  )
}
