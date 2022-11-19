import React, { useState, useEffect } from 'react'
import { Card } from 'antd-mobile'
import { getCurrentNews } from '@/api/home'
import { useNavigate } from "react-router-dom"
import './index.less'

export default function News() {
  const [news, setNews] = useState([])
  const navigate = useNavigate();

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
  function goNews () {
    navigate('/news')
  }
  function goNewsDetail (item) {
    navigate(`/news-detail?id=${item.newsId}&type=news`)
  }
  return (
    <div className='news'>
      <div className='flex'>
        <p className='title'>动态新闻</p>
        <p className='more' onClick={() => {goNews()}}><span>查看更多</span> <i className='iconfont icon-arrow-o-right'></i> </p>
      </div>
      {
        news.map((i,index) => <Card className='card' key={ index } title = {i.newsTitle} onClick={() => {goNewsDetail(i)}}>
          <span style={{color:'#B9B9B9'}}>{ i.createTime }</span>
        </Card>)
      }
    </div>
  )
}
