import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=masterDataService.listDic',
    method: 'post',
    data: params
  })
}

export function saveDic(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.saveDic',
        method: 'post',
        data: params
    })
}

export function deleteDic(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.deleteDic',
        method: 'post',
        data: params
    })
}

export function updateDic(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.updateDic',
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

