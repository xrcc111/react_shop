import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image, DotLoading } from 'antd-mobile'
import { getNewsDetail, getWatchDetail } from '@/api/news'
import { useSearchParams } from 'react-router-dom'

import './index.less'

import bannerSrc from '@/assets/images/xinwen.jpg'

export default function NewsDetail() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState([])
  const [detail, setDetail] = useState('')

  const [params] = useSearchParams()
  const id = params.get('id')
  const type = params.get('type')


  useEffect(() => {
    getDetail()
  }, [])

  function createEvent() {
    return {__html: detail};
  }

  async function getDetail() {
    if(type === 'watch') {
      setTitle('行业观察')
      setDesc(['把握时代脉搏、聚焦行业前沿'])
      const res = await getWatchDetail(id)
      console.log(res, 'zzz')
      setDetail(decodeURIComponent(res.data.detail))
    }
    if(type === 'news') {
      setTitle('动态新闻')
      setDesc(['获取最新动态、关注企业要闻'])
      const res = await getNewsDetail(id)
      console.log(res, 'rrr')
      setDetail(decodeURIComponent(res.data.detail))
    }
  }

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>
      <div className='detail-content'>
        {
          !detail && 
            <div style={{textAlign:'center', height: '300px', lineHeight: '300px'}}>
              加载中
              <DotLoading color='primary' />
            </div>
        }
        
        <div dangerouslySetInnerHTML={createEvent()}></div>
      </div>
    </div>
  )
}
