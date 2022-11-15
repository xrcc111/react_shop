import React, { useState, useEffect } from 'react'
import Product from './components/product'
import Scenario from './components/scenario'
import News from './components/news'
import { Swiper, Image } from 'antd-mobile'
import { getBanner } from '@/api/home'
import './index.less'
import Observe from './components/observe'

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
  
  // 动态引入静态资源
  const getAssetsFile = (url) => {
    if(url <= 9) return new URL(`/src/assets/images/partner_0${url}.png`, import.meta.url).href;
    return new URL(`/src/assets/images/partner_${url}.png`, import.meta.url).href;
  };
  
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
      <Scenario></Scenario>
      <News></News>
      <Observe></Observe>
      <div className='partner'>
        <h1 className='title'>合作伙伴</h1>
        <div className='info'> 多年的行业积累和开拓创新，已具备一站式、全链条产品 </div>
        <div className='all-partents'>
          {
            Array(18).fill('1').map((i, index) =>
            <Image 
              key={ index } 
              src={ getAssetsFile(index + 1) }>
            </Image>)
          }
        </div>
      </div>
    </div>
  )
}
