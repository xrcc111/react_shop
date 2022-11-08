import request from '@/utils/request'

export const getMenuTree = (data) => request({
  url: '/system/catalog/web/list',
  method: 'post',
  data
})