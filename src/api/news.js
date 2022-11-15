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
