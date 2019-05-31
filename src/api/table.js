import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=masterDataService.listParam',
    method: 'post',
    data: params
  })
}
