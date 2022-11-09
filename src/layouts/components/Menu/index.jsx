import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { loadMenu } from '@/store/modules/menu'
import "./index.less"

export default function Menu() {
  const dispatch = useDispatch()
  const { menuArray, open } = useSelector(state => state.menu)
  console.log(open)
  
  useEffect(() => {
    dispatch(loadMenu({}))
  },[])
  return (
    <div className='top-navigation' style={{transform: open ? 'translateY(0)'  : 'translateY(-118%)'}}>{menuArray.map(i => <li key={i.catalogId}>{i.catalogName}</li>)}</div>
  )
}
