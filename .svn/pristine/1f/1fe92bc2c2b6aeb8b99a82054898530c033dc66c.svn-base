import request from '@/utils/request'

/*@params:
  router:"homeService.login",
  account:"root",
  password:111111
*/
export function login(options) {
  return request({
    url: '/management-web/http/do.jhtml?router=homeService.login',
    method: 'post',
    data: options
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
