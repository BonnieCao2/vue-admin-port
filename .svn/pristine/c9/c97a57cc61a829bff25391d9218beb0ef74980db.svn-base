import request from '@/utils/request'

export function getList(options) {
    return request({
    url: '/management-web/http/do.jhtml?router=preOrderService.listOrder',
    method: 'post',
    data: options
    })
}

/*order_id  明细*/ 
export function queryOrderDetail(options) {
    return request({
        url: '/management-web/http/do.jhtml?router=preOrderService.queryOrderDetail',
        method: 'post',
        data: options
    })
}

/*获取页面中下拉菜单的数据，预约单状态dic_key:order_status，业务类型dic_key:order_type*/ 
export function listDic(options) {
    return request({
        url: '/management-web/http/do.jhtml?router=masterDataService.listDic',
        method: 'post',
        data: options
    })
}


/*order_id  log
startPage:1
limit:10
booking_nos:0*/ 
export function queryOrderLog(options) {
    return request({
        url: '/management-web/http/do.jhtml?router=preOrderService.queryOrderLog',
        method: 'post',
        data: options
    })
}


// 完成预约单
export function overOrder(options) {
    return request({
        url: '/management-web/http/do.jhtml?router=preOrderService.overOrder',
        method: 'post',
        data: options
    })
}


// 关闭预约单
export function closeOrder(options) {
    return request({
        url: '/management-web/http/do.jhtml?router=preOrderService.closeOrder',
        method: 'post',
        data: options
    })
}