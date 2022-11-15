import request from '@/utils/request'

// 获取轮播
export const getBanner = () => request({
  url: '/system/banner/web/list',
  method: 'get'
})

// 获取产品
export const getProductById = (catalogId) => request({
  url: `/system/product/web/catalog/${catalogId}`,
  method: 'get'
})

// 应用场景 
export const getSceneById = (catalogId) => request({
  url: `/system/scene/web/catalog/${catalogId}`,
  method: 'get'
})

// 动态新闻
export const getCurrentNews = () => request({
  url: '/system/news/web/list',
  method: 'post'
})

// 行业观察
export const getCurrentObserves = () => request({
  url: '/system/watch/web/list',
  method: 'post'
})