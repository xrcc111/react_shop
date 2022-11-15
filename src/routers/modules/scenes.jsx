import { lazy, Suspense } from "react"  // 引入懒加载
import { DotLoading } from 'antd-mobile'
/**
 * 时间紧任务中,后期考虑优化，提升代码质量
 */
const Financial = lazy(() => import('@/views/scenes/financial'))
const Industrial = lazy(() => import('@/views/scenes/industrial'))
const Carbon = lazy(() => import('@/views/scenes/carbon'))
const Government = lazy(() => import('@/views/scenes/government'))
const Educational = lazy(() => import('@/views/scenes/educational'))
const Medicine = lazy(() => import('@/views/scenes/medicine'))
const Livelihood = lazy(() => import('@/views/scenes/livelihood'))
const Smartcity = lazy(() => import('@/views/scenes/smartCity'))
const Environmental = lazy(() => import('@/views/scenes/environmental'))
const Metagalaxy = lazy(() => import('@/views/scenes/metagalaxy'))


const lazyLoad = (children) => {
  return <Suspense fallback = {<DotLoading />}>{children}</Suspense>
}
export const scenesRouter =  [
    {
        title: '应用场景',
        children: [
        {
          path: '/financial',
          title: '金融服务',
          element: lazyLoad(<Financial />)
        },
        {
          path: '/industrial',
          title: '工业互联网',
          element: lazyLoad(<Industrial />)
        },
        {
          path: '/carbon',
          title: '双碳减排',
          element: lazyLoad(<Carbon />)
        },
        {
          path: '/government',
          title: '政务服务',
          element: lazyLoad(<Government />)
        },
        {
          path: '/educational',
          title: '教育文化',
          element: lazyLoad(<Educational />)
        },
        {
          path: '/medicine',
          title: '生活医疗',
          element: lazyLoad(<Medicine />)
        },
        {
          path: '/livelihood',
          title: '民生安全',
          element: lazyLoad(<Livelihood />)
        },
        {
          path: '/smartCity',
          title: '智慧城市',
          element: lazyLoad(<Smartcity />)
        },
        {
          path: '/environmental',
          title: '环境监测',
          element: lazyLoad(<Environmental />)
        },
        {
          path: '/metagalaxy',
          title: '元宇宙',
          element: lazyLoad(<Metagalaxy />)
        }
      ]
    }
]