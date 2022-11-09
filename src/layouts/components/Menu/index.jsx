import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { loadMenu } from '@/store/modules/menu'
import Navbar from '@/components/Navbar'
import "./index.less"

export default function Menu() {
  const dispatch = useDispatch()
  const { menuArray, open } = useSelector(state => state.menu)
  console.log(menuArray)
  
  useEffect(() => {
    dispatch(loadMenu({}))
  },[])
  return (
    <div className='top-navigation' style={{transform: open ? 'translateY(0)'  : 'translateY(-118%)'}}>
      {
        menuArray.map(i => 
          <Navbar key={ i.catalogId } menuArray = { i || []}> 
          </Navbar>)
      }
      {/* <Navbar menuArray = {menuArray}></Navbar> */}
    </div>
  )
}
