import { lazy, Suspense } from "react"  // 引入懒加载
import { DotLoading } from 'antd-mobile'
const Product = lazy(() => import('@/views/product'))
const lazyLoad = (children) => {
  return  <Suspense fallback = { <div style={{textAlign:'center', height: '300px', lineHeight: '300px'}}> <DotLoading /></div>}>{children}</Suspense>
}

export const productRouter = [
        {
        title: '产品',
        children: [
          {
            path: '/detail',
            title: '产品详情',
            element: lazyLoad(<Product />)
          }
      ]
    }
]