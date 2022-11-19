import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image, Button, DotLoading } from 'antd-mobile'
import { getObserve } from '@/api/news'
import { useNavigate } from "react-router-dom"

import './index.less'

import bannerSrc from '@/assets/images/observe.png'

export default function Observe() {
  
  const title = '行业观察'
  const desc = ['把握时代脉搏、聚焦行业前沿']
  const pageSize = 10

  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    loadMore(pageNum, pageSize)
  }, [])

  const goDetail = (item) => {
    navigate(`/news-detail?id=${item.watchId}&type=watch`)
  }

  async function loadMore(pageNum, pageSize) {
    setIsLoading(true)
    const res = await getObserve({
      pageNum,
      pageSize
    })
    setIsLoading(false)
    const append = res.rows
    setData(append)
    setTotal(res.total)
  }

  function calcTotal () {
    const totalPage = total % pageSize === 0 ? (total / pageSize) : (Math.floor(total / pageSize) + 1)
    return totalPage
  }

  function plus() {
    const num = pageNum + 1
    setPageNum(num)
    loadMore(num, pageSize)
  }
  function minus() {
    const num = pageNum - 1
    setPageNum(num)
    loadMore(num, pageSize)
  }

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>
      {
      isLoading ? 
      <div style={{textAlign:'center', height: '300px', lineHeight: '300px'}}>
        加载中
        <DotLoading color='primary' />
      </div> :
      data.map((item,index) => {
        return (
          <div className='watch-item' key={index.toString()} onClick={() => {goDetail(item)}}>
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
      })
      }
      <div className='pagination'>
        {
          pageNum > 1 && 
          <div className='btn minus'>
            <Button color='primary' fill='none' onClick={() => {minus()}}>
              <i className='iconfont icon-arrowup'></i>
            </Button>
          </div>
        }
        <span>{pageNum}</span> of <span>{calcTotal()}</span>
        {
          pageNum < calcTotal() && 
          <div className='btn plus'>
            <Button color='primary' fill='none' onClick={() => {plus()}}>
              <i className='iconfont icon-arrowup'></i>
            </Button>
          </div>
          
        }
      </div>
    </div>
  )
}
