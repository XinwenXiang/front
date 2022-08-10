import service from '@/utils/request'

// @Tags LD_1
// @Summary 创建LD_1
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.LD_1 true "创建LD_1"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /LD_type_1/createLD_1 [post]
export const createLD_1 = (data) => {
  return service({
    url: '/LD_type_1/createLD_1',
    method: 'post',
    data
  })
}

// @Tags LD_1
// @Summary 删除LD_1
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.LD_1 true "删除LD_1"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /LD_type_1/deleteLD_1 [delete]
export const deleteLD_1 = (data) => {
  return service({
    url: '/LD_type_1/deleteLD_1',
    method: 'delete',
    data
  })
}

// @Tags LD_1
// @Summary 删除LD_1
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除LD_1"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /LD_type_1/deleteLD_1 [delete]
export const deleteLD_1ByIds = (data) => {
  return service({
    url: '/LD_type_1/deleteLD_1ByIds',
    method: 'delete',
    data
  })
}

// @Tags LD_1
// @Summary 更新LD_1
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.LD_1 true "更新LD_1"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /LD_type_1/updateLD_1 [put]
export const updateLD_1 = (data) => {
  return service({
    url: '/LD_type_1/updateLD_1',
    method: 'put',
    data
  })
}

// @Tags LD_1
// @Summary 用id查询LD_1
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.LD_1 true "用id查询LD_1"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /LD_type_1/findLD_1 [get]
export const findLD_1 = (params) => {
  return service({
    url: '/LD_type_1/findLD_1',
    method: 'get',
    params
  })
}

// @Tags LD_1
// @Summary 分页获取LD_1列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取LD_1列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /LD_type_1/getLD_1List [get]
export const getLD_1List = (params) => {
  return service({
    url: '/LD_type_1/getLD_1List',
    method: 'get',
    params
  })
}
