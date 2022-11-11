import React, { useState, useEffect } from 'react'
import Product from './components/product'
import { Swiper, Image } from 'antd-mobile'
import { getBanner } from '@/api/home'
import './index.less'

export default function Home() {
  const [ banner, setBanner ] = useState([])
  // 获取 banner
  const _getBanner = () => {
    getBanner().then(res => {
      if(res.code === 200) {
        const {rows} = res
        setBanner(rows)
      }
    }).catch(err => {
       throw new Error(err)
    }) 
  }
  useEffect(() => {
    _getBanner()
  }, [])

  return (
    <div className='home'>
      {
        banner.length !== 0 &&(
          <Swiper autoplay>
            {
              banner.map(i => (
                <Swiper.Item key={ i.bannerUuid }>
                  <Image src={ import.meta.env.VITE_BASEURL + i.photo }></Image>
                  <div className='banner-info'>
                    <p className='main-title'>{ i.mainTitle }</p>
                    <p className='sub-title'>{ i.subTitle }</p>
                  </div>
                </Swiper.Item>
             ))
           }
         </Swiper>
        ) 
      }
      <Product></Product>
    </div>
  )
}
