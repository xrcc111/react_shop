import React, { useEffect, useState } from 'react'
import { Image } from 'antd-mobile'
import './banner.less'


export default function About(props) {

  const descItems = props.desc.map((item, index) => {
    return (
      <div key={item}>{item}</div>
    )
  })

  return (
    <div className='banner-content'>
      <Image src={props.bannerSrc} height={180} fit='cover' />
      <div className='desc-banner'>
        <div className='title'>{props.title}</div>
        {descItems}
      </div>
    </div>
  )
}
