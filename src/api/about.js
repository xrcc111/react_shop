import request from '@/utils/request'

// 获取荣誉证书
export const getHonor = (query) => request({
  url: `/system/qualification/web/list?pageSize=${query.pageSize}&pageNum=${query.pageNum}`,
  method: 'post'
})

// 获取团队
export const getTeam = (query) => request({
  url: `/system/staff/web/list?pageSize=${query.pageSize}&pageNum=${query.pageNum}`,
  method: 'post'
})
