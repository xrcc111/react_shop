import { lazy, Suspense } from "react"  // 引入懒加载
import { DotLoading } from 'antd-mobile'
const DigitalIdentity = lazy(() => import('@/views/product/digitalIdentity'))
const Blockchain = lazy(() => import('@/views/product/blockchain'))
const Calculation = lazy(() => import('@/views/product/calculation'))
const Other = lazy(() => import('@/views/product/other'))
const lazyLoad = (children) => {
  return <Suspense fallback = {<DotLoading />}>{children}</Suspense>
}

export const productRouter = [
        {
        title: '产品',
        children: [
        {
          path: '/digitalIdentity',
          title: 'DID数字身份',
          element: lazyLoad(<DigitalIdentity />)
        },
        {
          path: '/blockchain',
          title: '区块链',
          element: lazyLoad(<Blockchain />)
        },
        {
          path: '/calculation',
          title: '机密计算',
          element: lazyLoad(<Calculation />)
        },
        {
          path: '/other',
          title: '其他产品',
          element: lazyLoad(<Other />)
        }
      ]
    }
]