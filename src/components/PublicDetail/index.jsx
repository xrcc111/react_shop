/**
 * 仅用于产品和应用场景详情页
 */
import React, { useState } from 'react'
import { Image, CapsuleTabs } from 'antd-mobile'
import './index.less'
import product from '@/assets/images/product_bg.png'
import scene from '@/assets/images/scene_bg.jpg'
import news from '@/assets/images/news_bg.jpg'

export default function PublicDetail(props) {
  const { details, type } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  // tabs切换
  const handleChange = (current) => {
    setCurrentIndex(current)
  }
  return (
    <div className='public-detail'>
      <div className='detail-top'>
          {
            details.length !== 0 && (
              <>
                <p className='title'>{ details[currentIndex].mainTitle }</p>
                <p className='info'>{ details[currentIndex].subTitle }</p>
              </>
            )
          }
        </div>
        <Image src= {type === 'product' ? product : type === 'scene' ? scene  : news }></Image>
        {
          details.length !== 0 &&(
            details.length > 1 ?
            <CapsuleTabs onChange= { handleChange }>
              {
                details.map( (i, index) => 
                <CapsuleTabs.Tab title= { i.mainTitle } key={ index }>
                <div className='detail-content' dangerouslySetInnerHTML={{__html: decodeURIComponent(i.detail)}}></div>
                </CapsuleTabs.Tab>
                )
              }
            </CapsuleTabs>
            : <div>
                {
                  details.map( (i,index) => 
                  <div key={index}>
                     <p className='main-title'>{i.mainTitle}</p>
                     <div className='detail-custom' dangerouslySetInnerHTML={{__html: decodeURIComponent(i.detail)}}></div>
                  </div>
                  )
                }
              </div>
          ) 
        }
    </div>
  )
}
