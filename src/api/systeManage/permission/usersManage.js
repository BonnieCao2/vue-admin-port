import request from '@/utils/request'

export function getTreeData(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=userService.getTreeData',
    method: 'post',
    data: params
  })
}

export function getList(params) {
  return request({
    url: '/management-web/http/do.jhtml?router=userService.listUsers',
    method: 'post',
    data: params
  })
}

export function saveUser(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.saveUser',
        method: 'post',
        data: params
    })
}

export function deleteUser(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.deleteUser',
        method: 'post',
        data: params
    })
}

export function updateUser(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.updateUser',
        method: 'post',
        data: params
    })
}

export function listValues(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=cacheCustomService.listValues',
        method: 'post',
        data: params
    })
}

export function resetPassword(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.resetPassword',
        method: 'post',
        data: params
    })
}

//穿梭框未选中数据
export function listRoles(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.listRoles',
        method: 'post',
        data: params
    })
}

//穿梭框选中数据
export function listSelectedRoles(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.listSelectedRoles',
        method: 'post',
        data: params
    })
}

//穿梭框选中数据保存
export function saveUserRoleGrantInfo(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.saveUserRoleGrantInfo',
        method: 'post',
        data: params
    })
}

//穿梭框选中数据删除
export function delUserRoleGrantInfo(params) {
    return request({
        url: '/management-web/http/do.jhtml?router=userService.delUserRoleGrantInfo',
        method: 'post',
        data: params
    })
}

