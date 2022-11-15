import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import { Image, ImageViewer } from 'antd-mobile'

import './index.less'

import bannerSrc from '@/assets/images/contact.png'
import mapSrc from '@/assets/images/map.png'

export default function Contact() {
  
  const title = '合作联系'
  // 
  const desc = ['以市场为导向', '以客户为中心']

  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>

      <div className='contact-msg'>
        <div className='title'>合作联系</div>
        
        <dl>
          <dt>商务咨询</dt>
          <dd>0551-65559232</dd>
        </dl>
        <dl>
          <dt>电子邮箱</dt>
          <dd>info@dappworks.cn</dd>
        </dl>
        <dl>
          <dt>人才招聘</dt>
          <dd>dai@dappworks.cn</dd>
        </dl>
      </div>

      <div>
        <Image src={mapSrc} 
          onClick={() => {
            setVisible(true)
          }}
        />
      </div>

      <ImageViewer
        image={mapSrc}
        visible={visible}
        maxZoom={5}
        onClose={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}
