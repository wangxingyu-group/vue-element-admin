import request from '@/utils/request'

export function fetchList1(filter, pagination) {
  return request({
    url: '/demo/base-settings/noticeManagement/list',
    method: 'get',
    params: { 'filter': filter, 'pagination': pagination }
  })
}
