import { lazy, Suspense } from "react"  // 引入懒加载
import { DotLoading } from 'antd-mobile'
const Scenes = lazy(() => import('@/views/scenes'))
const lazyLoad = (children) => {
  return  <Suspense fallback = { <div style={{textAlign:'center', height: '300px', lineHeight: '300px'}}> <DotLoading /></div>}>{children}</Suspense>
}

export const scenesRouter = [
        {
        title: '应用场景',
        children: [
          {
            path: '/scene',
            title: '应用场景详情',
            element: lazyLoad(<Scenes />)
          }
      ]
    }
]