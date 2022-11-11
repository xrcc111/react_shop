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
