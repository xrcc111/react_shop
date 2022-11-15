import { lazy, Suspense } from "react"  // 引入懒加载
import { DotLoading } from 'antd-mobile'
const CompanyDesc = lazy(() => import('@/views/about/CompanyDesc'))
const ContactUs = lazy(() => import('@/views/about/ContactUs'))
const Honor = lazy(() => import('@/views/about/Honor'))
const Team = lazy(() => import('@/views/about/Team'))

const lazyLoad = (children) => {
  return <Suspense fallback = {<DotLoading />}>{children}</Suspense>
}

export const aboutRouter = [
        {
        title: '关于达朴',
        children: [
        {
          path: '/about',
          title: '公司简介',
          element: lazyLoad(<CompanyDesc />)
        },
        {
          path: '/contact',
          title: '加入我们',
          element: lazyLoad(<ContactUs />)
        },
        {
          path: '/honor',
          title: '荣誉资质',
          element: lazyLoad(<Honor />)
        },
        {
          path: '/contact',
          title: '合作/联系',
          element: lazyLoad(<ContactUs />)
        },
        {
          path: '/team',
          title: '团队',
          element: lazyLoad(<Team />)
        }
      ]
    }
]