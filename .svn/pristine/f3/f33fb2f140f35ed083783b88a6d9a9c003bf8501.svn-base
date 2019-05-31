import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=masterDataService.listParam',
    // url: '/table/list',
    method: 'post',
    data: params
  })
}

export function saveParam(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.saveParam',
        method: 'post',
        data: params
    })
}

export function deleteParam(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.deleteParam',
        method: 'post',
        data: params
    })
}

export function updateParam(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.updateParam',
        method: 'post',
        data: params
    })
}

// 查找下拉框
export function listValues(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=cacheCustomService.listValues',
        method: 'post',
        data: params
    })
}

