import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { openTopMenu, closeTopMenu } from '@/store/modules/menu'
import { Image } from 'antd-mobile'
import logo from '@/assets/images/logo.png'
import open from '@/assets/images/open.svg'
import close from '@/assets/images/close.svg'
import './index.less'

export default function Header() {
  const [iconControl, setIconControl ] = useState(true)
  const dispatch = useDispatch()
  const handleClick = () => {
    setIconControl(iconControl => !iconControl)
    if(iconControl) {
      dispatch(openTopMenu())
    }else{
      dispatch(closeTopMenu())
    }
  }
  return (
    <div className='header'>
      <div className='logo'>
        <Image src={logo}></Image>
      </div>
      <div className='menu-btn' onClick={handleClick}> 
        <Image style={{display: iconControl ? 'block': 'none'}} src={open}></Image>
        <Image style={{display: iconControl ? 'none': 'block'}} src={close}></Image>
      </div>
    </div>
  )
}
