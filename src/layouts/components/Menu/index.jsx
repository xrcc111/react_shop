import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { loadMenu } from '@/store/modules/menu'
import Navbar from '@/components/Navbar'
import "./index.less"

export default function Menu() {
  const dispatch = useDispatch()
  const { menuArray, block } = useSelector(state => state.menu)
  
  useEffect(() => {
    dispatch(loadMenu({}))
  },[])
  return (
    <div className='top-navigation' style={{transform: block ? 'translateY(0)'  : 'translateY(-118%)'}}>
      {
        menuArray.map(i => 
          <Navbar key={ i.catalogId } menuArray = { i || []}> 
          </Navbar>)
      }
    </div>
  )
}
