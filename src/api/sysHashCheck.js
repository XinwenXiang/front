import service from '@/utils/request'

// @Tags CheckHash
// @Summary 创建CheckHash
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CheckHash true "创建CheckHash"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /HashCheck/createCheckHash [post]
export const createCheckHash = (data) => {
  return service({
    url: '/HashCheck/createCheckHash',
    method: 'post',
    data
  })
}

// @Tags CheckHash
// @Summary 删除CheckHash
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CheckHash true "删除CheckHash"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /HashCheck/deleteCheckHash [delete]
export const deleteCheckHash = (data) => {
  return service({
    url: '/HashCheck/deleteCheckHash',
    method: 'delete',
    data
  })
}

// @Tags CheckHash
// @Summary 删除CheckHash
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除CheckHash"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /HashCheck/deleteCheckHash [delete]
export const deleteCheckHashByIds = (data) => {
  return service({
    url: '/HashCheck/deleteCheckHashByIds',
    method: 'delete',
    data
  })
}

// @Tags CheckHash
// @Summary 更新CheckHash
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CheckHash true "更新CheckHash"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /HashCheck/updateCheckHash [put]
export const updateCheckHash = (data) => {
  return service({
    url: '/HashCheck/updateCheckHash',
    method: 'put',
    data
  })
}

// @Tags CheckHash
// @Summary 用id查询CheckHash
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CheckHash true "用id查询CheckHash"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /HashCheck/findCheckHash [get]
export const findCheckHash = (params) => {
  return service({
    url: '/HashCheck/findCheckHash',
    method: 'get',
    params
  })
}

// @Tags CheckHash
// @Summary 分页获取CheckHash列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取CheckHash列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /HashCheck/getCheckHashList [get]
export const getCheckHashList = (params) => {
  return service({
    url: '/HashCheck/getCheckHashList',
    method: 'get',
    params
  })
}
