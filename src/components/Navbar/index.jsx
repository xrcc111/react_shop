import React, { useState } from 'react'

export default function Navbar(props) {
  const { menuArray } = props
  // 控制字迹展开
  const [active, setActive] = useState(false)
  // 递归菜单
  const recursionMenus = (menuArray.children || []).map((el, i) => {
    return (
      <Navbar key = {i}  menuArray = { el }></Navbar>
    )
  })

  // 点击事件
  const handelClick = (i) => {
    if(i.children && i.children.length > 0) {
      setActive(!active)
    }else{
      console.log('======')
    }
  }
  return (
    <div className='nav'>
      <span onClick={() => handelClick(menuArray)}>{menuArray.catalogName}</span>
      <div style={{marginLeft: '20px', display: active ? 'block' : 'none'}}>{ recursionMenus }</div>
    </div>
  )
}
