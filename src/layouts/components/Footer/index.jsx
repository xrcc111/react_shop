import React from 'react'
import { Image } from 'antd-mobile'
import './index.less'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-top-info'>
        <div className='top-left'>
          <h5>联系我们</h5>
          <p className='phone-num'><i className='iconfont icon-dianhuahover'></i>&nbsp;  <span>0551-65559293</span></p>
          <p className='email'><i className='iconfont icon-email'></i>&nbsp;  <span>info@dappworks.cn</span></p>
          <p className='address'>
          <i className='iconfont icon-weizhi'></i>&nbsp;  
            <span>安徽省合肥市高新区创新产业园一期A3栋9楼</span>  
          </p>
        </div>
        <div className='top-right'>
          <h5>达朴公众号</h5>
          <div className='code'>
            <Image src='https://dappworks.cn/img/weixin.4613bcf4.png'></Image>
          </div>
          <p>关注我们</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright © 达朴汇联版权所有</p>
        <p>备案号：皖ICP备17024979号-1    皖公网安备 34019202000668</p>
      </div>
    </footer>
  )
}
