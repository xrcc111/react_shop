import request from '@/utils/request'

// 获取新闻
export const getNews = (query) => request({
  url: `/system/news/web/list?pageSize=${query.pageSize}&pageNum=${query.pageNum}`,
  method: 'post'
})

// 获取行业观察
export const getObserve = (data) => request({
  url: '/system/watch/web/list',
  method: 'post',
  data
})

// 获取新闻详情
export const getNewsDetail = (id) => request({
  url: `/system/news/web/${id}`,
  method: 'get'
})

// 获取观察详情
export const getWatchDetail = (id) => request({
  url: `/system/watch/web/${id}`,
  method: 'get'
})
