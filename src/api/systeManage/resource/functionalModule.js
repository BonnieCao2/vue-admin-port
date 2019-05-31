import request from '@/utils/request'

export function getTreeData(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=moduleService.getTreeData',
    method: 'post',
    data: params
  })
}

export function getList(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=moduleService.listModules',
    method: 'post',
    data: params
  })
}

export function saveModule(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=moduleService.saveModule',
        method: 'post',
        data: params
    })
}

export function deleteModule(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=moduleService.deleteModule',
        method: 'post',
        data: params
    })
}

export function updateModule(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=moduleService.updateModule',
        method: 'post',
        data: params
    })
}
