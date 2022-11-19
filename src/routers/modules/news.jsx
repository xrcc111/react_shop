import { lazy, Suspense } from "react"  // 引入懒加载
import { DotLoading } from 'antd-mobile'
const News = lazy(() => import('@/views/news/News'))
const Observe = lazy(() => import('@/views/news/Observe'))
const NewsDetail = lazy(() => import('@/views/news/NewsDetail'))

const lazyLoad = (children) => {
  return <Suspense fallback = {<DotLoading />}>{children}</Suspense>
}

export const newsRouter = [
  {
    title: '新闻中心',
    children: [
      {
        path: '/news',
        title: '动态新闻',
        element: lazyLoad(<News />)
      },
      {
        path: '/observe',
        title: '行业观察',
        element: lazyLoad(<Observe />)
      },
      {
        path: '/news-detail',
        title: '新闻详情',
        element: lazyLoad(<NewsDetail />)
      }
    ]
  }
]