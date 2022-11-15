import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner'
import History from './components/History'
import './index.less'

import bannerSrc from '@/assets/images/about-banner.png'

export default function Company() {
  
  const title = '公司简介'
  const desc = ['行业领先的数据流通安全解决方案供应商']

  return (
    <div>
      <Banner bannerSrc={bannerSrc} title={title} desc={desc}></Banner>
      <div className='desc-dapp'>
        <div className='title'>达朴汇联介绍</div>
        <div className='desc'>
          达朴汇联海外团队自2015年开始研发数据防伪溯源和隐私保护技术。公司2017年正式落户安徽合肥，是一家国家高新技术创新型应用研发与服务公司。专注于物联网领域中区块链底层技术和数据可用不可见技术的突破及相关应用研究。精研于可定制、可重构的基于区块链技术的物联网网络产品，为建立及推动多行业物联网在分布式信任机制下的产业转型及业务升级，提供最优质的技术支持和专业服务。 达朴汇联创始人员由海归人员及合肥本地的行业资深人士共同组成。核心人员平均拥有15-20年的产业经验。跨越物联网、金融、电信、信息系统、大数据等行业。同时拥有50+固定科研人员。主要研发人员来自清华大学、上海交大、浙江大学、中科大及安徽各高校。团队技术背景涵盖物联网硬件开发、云平台/边缘计算平台开发、网络安全、分布式数据库和基础算法等。
        </div>
      </div>
      <History></History>
    </div>
  )
}
