import React, { useState } from 'react'
import './index.less'
import { rootRouter } from '@/routers'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux/es/exports'
import { closeTopMenu } from '@/store/modules/menu'

export default function Navbar(props) {
  const { menuArray } = props

  const dispatch = useDispatch()

  // 路由导航
  const navigate = useNavigate();

  // 控制子集展开
  const [active, setActive] = useState(false)
  // 递归菜单
  const recursionMenus = (menuArray.children || []).map((el, i) => {
    return (
      menuArray.catalogLevel === 2 ? '' :  <Navbar key = {i}  menuArray = { el }></Navbar>
    )
  })

  // 把树变成list
  const treeToList = (list = rootRouter[0].children || [] , arr=[]) => {
    for(const item of list) {
      const {children, ...i } = item
      if(children && children.length > 0) {
        arr = arr.concat(treeToList(children))
      }
      arr.push(i)
    }
    return arr
  }

  // 从list筛选自己需要的数据
  const filterCurrentMenu = (currentName) => {
    const listMenu =  treeToList(rootRouter[0].children)
    return listMenu.filter(i => i.title === currentName)
  }

  // 点击事件
  const handelClick = (i) => {
    if(i.children && i.children.length > 0 && i.catalogLevel === 1) {
      setActive(!active)
    }else{
     const currentPath  = filterCurrentMenu(i.catalogName).length !== 0 ? filterCurrentMenu(i.catalogName)[0].path : i.parentId === 60 ? '/detail' : '/scene'
      dispatch(closeTopMenu())
      const detailArray = ['/news-detail','/detail','/scene']
      if(detailArray.includes(currentPath)) {
        navigate(`${currentPath}?id=${i.catalogId}`)
      }else{
        navigate(currentPath)
      }
    }
  }
  return (
    <div className='nav'>
      <div onClick={() => handelClick(menuArray)} className="current">
      <span> {menuArray.catalogName} </span>
      {
        menuArray.children && menuArray.children.length > 0 && menuArray.catalogLevel === 1 ?  active ? <i className='iconfont icon-minus'></i> : <i className='iconfont icon-add'></i> : ''
      }
      </div>
      <div style={{marginLeft: '20px', display: active ? 'block' : 'none'}}>{ recursionMenus }</div>
    </div>
  )
}