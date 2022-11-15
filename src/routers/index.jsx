import { lazy, Suspense } from "react"  // 引入懒加载
import { productRouter } from "./modules/product"
import { aboutRouter } from "./modules/about"
import { newsRouter } from "./modules/news"
import { scenesRouter } from "./modules/scenes"
import { DotLoading } from 'antd-mobile'
import Layouts from "@/layouts"
const Home = lazy(()=> import('@/views/home'))
const lazyLoad = (children) => {
  return <Suspense fallback = {<DotLoading />}>{children}</Suspense>
}

export const rootRouter = [
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        index: true,
        title: '首页',
        path:'/',
        element: lazyLoad(<Home />)
      },
      ...productRouter,
      ...aboutRouter,
      ...scenesRouter,
      ...newsRouter
    ]
  }
]