import React, {  useEffect, useRef, useState  } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import BackTop from '@/components/BackTop'

export default function Layouts() {
  // 控制回到顶部组件显示的状态
  const [backVisible, setBackVisible] = useState(false)

  useEffect(() => {
    // 在 React 中使用 addEventListener 监听事件
    document.addEventListener('scroll', handleScroll, true);
    // 组件卸载时移除事件监听
    return () => document.removeEventListener('scroll', handleScroll)
  }, [backVisible])

    // 滚动事件监听函数
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop  || 0
      // scrollTop 为距离滚动条顶部高度
      // scrollHeight 为整个文档高度
          
      // 我们设定当滚动的距离大于 200 时，显示 【返回顶部】按钮
      if (scrollTop > 800) {
        setBackVisible(true)
      } else {
        setBackVisible(false)
      }
    }
    // 回到顶部
    const backToTopHandle = () => {
      console.log('-----')
      document.body.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })
    }
  return (
    <section>
      <Header/>
      <main>
        <Menu/>
        <Outlet />
      </main>
      <Footer/>
      <BackTop         
        visible ={ backVisible }
        back ={ backToTopHandle  }
      />
    </section>
  )
}
