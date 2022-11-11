import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { openTopMenu, closeTopMenu } from '@/store/modules/menu'
import { Image } from 'antd-mobile'
import logo from '@/assets/images/logo.png'
import open from '@/assets/images/open.svg'
import close from '@/assets/images/close.svg'
import './index.less'

export default function Header() {
  const { block } = useSelector(state => state.menu)
  const dispatch = useDispatch()
  const handleClick = () => {
    if(!block) {
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
        <Image src={ block ? close : open }></Image>
      </div>
    </div>
  )
}
