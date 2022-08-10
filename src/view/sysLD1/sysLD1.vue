<template>
  <div>
    <div class="gva-search-box">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
        <div class="gva-btn-list">
            <el-button size="small" type="primary" icon="plus" @click="openDialog">新增</el-button>
            <el-popover v-model:visible="deleteVisible" placement="top" width="160">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
                <el-button size="small" type="primary" link @click="deleteVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="onDelete">确定</el-button>
            </div>
            <template #reference>
                <el-button icon="delete" size="small" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="deleteVisible = true">删除</el-button>
            </template>
            </el-popover>
        </div>
        <el-table
        ref="multipleTable"
        style="width: 100%"
        tooltip-effect="dark"
        :data="tableData"
        row-key="ID"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55" />
        <el-table-column align="left" label="日期" width="180">
            <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>
        <el-table-column align="left" label="装置参数_定值区号" prop="zzcs_dzqh" width="120" />
        <el-table-column align="left" label="装置参数_厂站名称" prop="zzcsczmc" width="120" />
        <el-table-column align="left" label="装置参数_一次设备名称" prop="zzcs_ycsbmc" width="120" />
        <el-table-column align="left" label="装置参数_主变高中压侧额定容量" prop="zzcs_zbgzycedrl" width="120" />
        <el-table-column align="left" label="装置参数_主变低压侧额定容量" prop="zzcs_zbdycedrl" width="120" />
        <el-table-column align="left" label="装置参数_高压侧接线方式" prop="zzcs_gycjxfs" width="120" />
        <el-table-column align="left" label="装置参数_中压侧接线方式钟点数" prop="zzcs_zycjxfszds" width="120" />
        <el-table-column align="left" label="装置参数_低压侧接线方式钟点数" prop="zzcs_dycjxfszds" width="120" />
        <el-table-column align="left" label="装置参数_高压侧额定电压" prop="zzcs_gyceddy" width="120" />
        <el-table-column align="left" label="装置参数_中压侧额定电压" prop="zzcs_zyceddy" width="120" />
        <el-table-column align="left" label="装置参数_低压侧额定电压" prop="zzcs_dyceddy" width="120" />
        <el-table-column align="left" label="装置参数_高压侧PT一次值" prop="zzcs_gycptycz" width="120" />
        <el-table-column align="left" label="装置参数_中压侧PT一次值" prop="zzcs_zycptcyz" width="120" />
        <el-table-column align="left" label="装置参数_低压侧PT一次值" prop="zzcs_dycptycz" width="120" />
        <el-table-column align="left" label="装置参数_高压侧CT一次值" prop="zzcs_gycctycz" width="120" />
        <el-table-column align="left" label="装置参数_高压侧CT二次值" prop="zzcs_gycctecz" width="120" />
        <el-table-column align="left" label="装置参数_高压桥CT一次值" prop="zzcs_gyqctycz" width="120" />
        <el-table-column align="left" label="装置参数_高压桥CT二次值" prop="zzcs_gyqctecz" width="120" />
        <el-table-column align="left" label="装置参数_高压侧零序CT一次值" prop="zzcs_gyclxctycz" width="120" />
        <el-table-column align="left" label="装置参数_高压侧零序CT二次值" prop="zzcs_gyclxctecz" width="120" />
        <el-table-column align="left" label="装置参数_高压侧间隙CT一次值" prop="zzcs_gycjxctycz" width="120" />
        <el-table-column align="left" label="装置参数_高压侧间隙CT二次值" prop="zzcs_gycjxctecz" width="120" />
        <el-table-column align="left" label="装置参数_中压侧CT一次值" prop="zzcs_zycctycz" width="120" />
        <el-table-column align="left" label="装置参数_中压侧CT二次值" prop="zzcs_zycctecz" width="120" />
        <el-table-column align="left" label="装置参数_低压1分支CT一次值" prop="zzcs_dy1fzctycz" width="120" />
        <el-table-column align="left" label="装置参数_低压1分支CT二次值" prop="zzcs_dy1fzctecz" width="120" />
        <el-table-column align="left" label="装置参数_低压2分支CT一次值" prop="zzcs_dy2fzctycz" width="120" />
        <el-table-column align="left" label="装置参数_低压2分支CT二次值" prop="zzcs_dy2fzctecz" width="120" />
        <el-table-column align="left" label="装置参数_低压侧零序CT一次值" prop="zzcs_dyclxctycz" width="120" />
        <el-table-column align="left" label="装置参数_低压侧零序CT二次值" prop="zzcs_dyclxctecz" width="120" />
        <el-table-column align="left" label="跳闸矩阵_差动保护" prop="tzjz_cdbh" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高复压过流Ⅰ段" prop="tzjz_gfygl1d" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高复压过流Ⅱ段" prop="tzjz_gyfgl2d" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高零序过流Ⅰ段1时限" prop="tzjz_glxgl1d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高零序过流Ⅰ段2时限" prop="tzjz_glxgl1d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高零序过流Ⅱ段1时限" prop="tzjz_glxgl2d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高零序过流Ⅱ段2时限" prop="tzjz_glxgl2d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高间隙过流1时限" prop="tzjz_gjxgl1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高间隙过流2时限" prop="tzjz_gjxgl2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高零序过压1时限" prop="tzjz_glxgy1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高零序过压2时限" prop="tzjz_glxgy2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_高压侧失灵经主变跳闸" prop="tzjz_gycsljzbtz" width="120" />
        <el-table-column align="left" label="跳闸矩阵_中复压过流Ⅰ段1时限" prop="tzjz_zfygl1d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_中复压过流Ⅰ段2时限" prop="tzjz_zfygl1d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_中复压过流Ⅰ段3时限" prop="tzjz_zfygl1d3sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_中复压过流Ⅱ段1时限" prop="tzjz_zfygl2d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_中复压过流Ⅱ段2时限" prop="tzjz_zfygl2d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_中复压过流Ⅱ段3时限" prop="tzjz_zfygl2d3sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低1复压过流Ⅰ段1时限" prop="tzjz_d1fygl1d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低1复压过流Ⅰ段2时限" prop="tzjz_d1fygl1d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低1复压过流Ⅰ段3时限" prop="tzjz_d1fygl1d3sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低1复压过流Ⅱ段1时限" prop="tzjz_d1fygl2d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低1复压过流Ⅱ段2时限" prop="tzjz_d1fygl2d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低1复压过流Ⅱ段3时限" prop="tzjz_d1fygl2d3sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低2复压过流Ⅰ段1时限" prop="tzjz_d2fygl1d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低2复压过流Ⅰ段2时限" prop="tzjz_d2fygl1d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低2复压过流Ⅰ段3时限" prop="tzjz_d2fygl1d3sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低2复压过流Ⅱ段1时限" prop="tzjz_d2fygl2d1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低2复压过流Ⅱ段2时限" prop="tzjz_d2fygl2d2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低2复压过流Ⅱ段3时限" prop="tzjz_d2fygl2d3sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低中性点零序过流1时限" prop="tzjz_dzxdlxgl1sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低中性点零序过流2时限" prop="tzjz_dzxdlxgl2sx" width="120" />
        <el-table-column align="left" label="跳闸矩阵_低中性点零序过流3时限" prop="tzjz_dzxdlxgl3sx" width="120" />
        <el-table-column align="left" label="差动保护定值_纵差差动速断电流定值" prop="czbhdz_zccdsddldz" width="120" />
        <el-table-column align="left" label="差动保护定值_纵差保护启动电流定值" prop="cdbhdz_zcbhqddldz" width="120" />
        <el-table-column align="left" label="差动保护定值_二次谐波制动系数" prop="cdbhdz_ecxbzdxs" width="120" />
        <el-table-column align="left" label="差动保护控制字定值_纵差差动速断" prop="cdbhkzzdz_zccdsd" width="120" />
        <el-table-column align="left" label="差动保护控制字定值_纵差差动保护" prop="cdbhkzzdz_zccdbh" width="120" />
        <el-table-column align="left" label="差动保护控制字定值_CT断线闭锁差动保护" prop="cdbhkzzdz_ctdxbscdbh" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高低电压闭锁定值" prop="gychbbhdz_gddybsdz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高负序电压闭锁定值" prop="gychbbhdz_gfxdybsdz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高复压过流Ⅰ段定值" prop="gychbbhdz_gfygl1ddz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高复压过流Ⅰ段时间" prop="gychbbhdz_gfygl1ddz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高复压过流Ⅱ段定值" prop="gychbbhdz_gfygl2ddz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高复压过流Ⅱ段时间" prop="gychbbhdz_gfygl2dsj" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过流Ⅰ段定值" prop="gychbbhdz_glxgl1ddz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过流Ⅰ段1时限" prop="gychbbhdz_glxgl1d1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过流Ⅰ段2时限" prop="gychbbhdz_glxgl1d2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过流Ⅱ段定值" prop="gychbbhdz_glxgl2ddz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过流Ⅱ段1时限" prop="gychbbhdz_glxgl2d1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过流Ⅱ段2时限" prop="gychbbhdz_glxgl2d2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高间隙过流定值" prop="gychbbhdz_gjxgldz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高间隙过流1时限" prop="gychbbhdz_gjxgl1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高间隙过流2时限" prop="gychbbhdz_gjxgl2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过压定值" prop="gychbbhdz_glxgydz" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过压1时限" prop="gychbbhdz_glxgy1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高零序过压2时限" prop="gychbbhdz_glxgy2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护定值_高过负荷定值" prop="gychbbhdz_ggfhdz" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅰ段" prop="gychbbhkzzdz_gfygl1d" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅱ段" prop="gychbbhkzzdz_gfygl2d" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅰ段带方向" prop="gychbbhkzzdz_gfygl1ddfx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅰ段指向母线" prop="gychbbhkzzdz_gfygl1dzxmx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅰ段经复压闭锁" prop="gychbbhkzzdz_gfygl1djfybs" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅱ段带方向" prop="gychbbhkzzdz_gfygl2ddfx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅱ段指向母线" prop="gychbbhkzzdz_gfygl2dzxmx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高复压过流Ⅱ段经复压闭锁" prop="gychbbhkzzdz_gfygl2djfybs" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高经其它侧复压闭锁" prop="gychbbhkzzdz_gjqtcfybs" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅰ段1时限" prop="gychbbhkzzdz_glxgl1d1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅰ段2时限" prop="gychbbhkzzdz_glxgl1d2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅱ段1时限" prop="gychbbhkzzdz_glxgl2d1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅱ段2时限" prop="gychbbhkzzdz_glxgl2d2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅰ段带方向" prop="gychbbhkzzdz_glxgl1ddfx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅰ段指向母线" prop="gychbbhkzzdz_glxgl1dzxmx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅰ段采用自产零流" prop="gychbbhkzzdz_glxgy1dcyzcll" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅱ段带方向" prop="gychbbhkzzdz_glxgl2ddfx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅱ段指向母线" prop="gychbbhkzzdz_glxgl2dzxmx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过流Ⅱ段采用自产零流" prop="gychbbhkzzdz_glxgl2dcyzcll" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高间隙过流1时限" prop="gychbbhkzzdz_gjxgl1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高间隙过流2时限" prop="gychbbhkzzdz_gjxgl2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过压1时限" prop="gychbbhkzzdz_glxgy1sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高零序过压2时限" prop="gychbbhkzzdz_glxgy2sx" width="120" />
        <el-table-column align="left" label="高压侧后备保护控制字定值_高压侧失灵经主变跳闸" prop="gychbbhkzzdz_gycsljzbtz" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中低电压闭锁定值" prop="zychbbhdz_zddybsdz" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中负序电压闭锁定值" prop="zychbbhdz_zfxdybsdz" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅰ段定值" prop="zychbbhdz_zfygl1ddz" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅰ段1时限" prop="zychbbhdz_zfygl1d1sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅰ段2时限" prop="zychbbhdz_zfygl1d2sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅰ段3时限" prop="zychbbhdz_zfygl1d3sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅱ段定值" prop="zychbbhdz_zfygl2ddz" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅱ段1时限" prop="zychbbhdz_zfygl2d1sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅱ段2时限" prop="zychbbhdz_zfygl2d2sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中复压过流Ⅱ段3时限" prop="zychbbhdz_zfygl2d3sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中零序过压告警定值" prop="zychbbhdz_zlxgygjdz" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中零序过压告警时间" prop="zychbbhdz_zlxgygjsj" width="120" />
        <el-table-column align="left" label="中压侧后备保护定值_中过负荷定值" prop="zychbbhdz_zgfhdz" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅰ段1时限" prop="zychbbhkzzdz_zfygl1d1sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅰ段2时限" prop="zychbbhkzzdz_zfygl1d2sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅰ段3时限" prop="zychbbhkzzdz_zfygl1d3sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅱ段1时限" prop="zychbbhkzzdz_zfygl2d1sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅱ段2时限" prop="zychbbhkzzdz_zfygl2d2sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅱ段3时限" prop="zychbbhkzzdz_zfygl2d3sx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅰ段带方向" prop="zychbbhkzzdz_zfygl1ddfx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅰ段指向母线" prop="zychbbhkzzdz_zfygl1dzxmx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅰ段经复压闭锁" prop="zychbbhkzzdz_zfygl1djfybs" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅱ段带方向" prop="zychbbhkzzdz_zfygl2ddfx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅱ段指向母线" prop="zychbbhkzzdz_zfygl2dzxmx" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中复压过流Ⅱ段经复压闭锁" prop="zychbbhkzzdz_zfygl2djfybs" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中经其它侧复压闭锁" prop="zychbbhkzzdz_zjqtcfybs" width="120" />
        <el-table-column align="left" label="中压侧后备保护控制字定值_中零序过压告警" prop="zychbbhkzzdz_zlxgygj" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1低电压闭锁定值" prop="dy1fzhbbhdz_d1ddybsdz" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1负序电压闭锁定值" prop="dy1fzhbbhdz_d1fxdybsdz" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅰ段定值" prop="dy1fzhbbhdz_d1fygl1ddz" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅰ段1时限" prop="dy1fzhbbhdz_d1fygl1d1sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅰ段2时限" prop="dy1fzhbbhdz_d1fygl1d2sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅰ段3时限" prop="dy1fzhbbhdz_d1fygl1d3sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅱ段定值" prop="dy1fzhbbhdz_d1fygl2ddz" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅱ段1时限" prop="dy1fzhbbhdz_d1fygl2d1sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅱ段2时限" prop="dy1fzhbbhdz_d1fygl2d2sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1复压过流Ⅱ段3时限" prop="dy1fzhbbhdz_d1fygl2d3sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1零序过压告警定值" prop="dy1fzhbbhdz_d1lxgygjdz" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低1零序过压告警时间" prop="dy1fzhbbhdz_d1lxgygjsj" width="120" />
        <el-table-column align="left" label="低压1分支后备保护定值_低过负荷定值" prop="dy1fzhbbhdz_dgfhdz" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段1时限" prop="dy1fqhbbhkzzdz_d1fygl1d1sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段2时限" prop="dy1fqhbbhkzzdz_d1fygl1d2sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段3时限" prop="dy1fqhbbhkzzdz_d1fygl1d3sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段1时限" prop="dy1fqhbbhkzzdz_d1fygl2d1sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段2时限" prop="dy1fqhbbhkzzdz_d1fygl2d2sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段3时限" prop="dy1fqhbbhkzzdz_d1fygl2d3sx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段带方向" prop="dy1fqhbbhkzzdz_d1fygl1ddfx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段指向母线" prop="dy1fqhbbhkzzdz_d1fygl1dzxmx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段经复压闭锁" prop="dy1fqhbbhkzzdz_d1fygl1djfybs" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段带方向" prop="dy1fqhbbhkzzdz_d1fygl2ddfx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段指向母线" prop="dy1fqhbbhkzzdz_d1fygl2dzxmx" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段经复压闭锁" prop="dy1fqhbbhkzzdz_d1fygl2djfybs" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1经其它侧复压闭锁" prop="dy1fqhbbhkzzdz_d1jqtcfybs" width="120" />
        <el-table-column align="left" label="低压1分支后备保护控制字定值_低1零序过压告警" prop="dy1fqhbbhkzzdz_d1lxgygj" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2低电压闭锁定值" prop="dy2fzhbbhdz_d2ddybsdz" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2负序电压闭锁定值" prop="dy2fzhbbhdz_d2fxdybsdz" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅰ段定值" prop="dy2fzhbbhdz_d2fygl1ddz" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅰ段1时限" prop="dy2fzhbbhdz_d2fygl1d1sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅰ段2时限" prop="dy2fzhbbhdz_d2fygl1d2sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅰ段3时限" prop="dy2fzhbbhdz_d2fygl1d3sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅱ段定值" prop="dy2fzhbbhdz_d2fygl2ddz" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅱ段1时限" prop="dy2fzhbbhdz_d2fygl2d1sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅱ段2时限" prop="dy2fzhbbhdz_d2fygl2d2sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2复压过流Ⅱ段3时限" prop="dy2fzhbbhdz_d2fygl2d3sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2零序过压告警定值" prop="dy2fzhbbhdz_d2lxgygjdz" width="120" />
        <el-table-column align="left" label="低压2分支后备保护定值_低2零序过压告警时间" prop="dy2fzhbbhdz_d2lxgygjsj" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段1时限" prop="dy2fzhbbhkzzdz_d2fygl1d1sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段2时限" prop="dy2fzhbbhkzzdz_d2fygl1d2sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段3时限" prop="dy2fzhbbhkzzdz_d2fygl1d3sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段1时限" prop="dy2fzhbbhkzzdz_d2fygl2d1sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段2时限" prop="dy2fzhbbhkzzdz_d2fygl2d2sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段3时限" prop="dy2fzhbbhkzzdz_d2fygl2d3sx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段带方向" prop="dy2fzhbbhkzzdz_d2fygl1ddfx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段指向母线" prop="dy2fzhbbhkzzdz_d2fygl1dzxmx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段经复压闭锁" prop="dy2fzhbbhkzzdz_d2fygl1djfybs" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段带方向" prop="dy2fzhbbhkzzdz_d2fygl2ddfx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段指向母线" prop="dy2fzhbbhkzzdz_d2fugl2dzxmx" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段经复压闭锁" prop="dy2fzhbbhkzzdz_d2fygl2djfybs" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2经其它侧复压闭锁" prop="dy2fzhbbhkzzdz_d2jqtcfybs" width="120" />
        <el-table-column align="left" label="低压2分支后备保护控制字定值_低2零序过压告警" prop="dy2fzhbbhkzzdz_d2lxgygj" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护定值_低零序过流定值" prop="dyczxdlxglbhdz_dlxgldz" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护定值_低零序过流1时限" prop="dyczxdlxglbhdz_dlxgl1sx" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护定值_低零序过流2时限" prop="dyczxdlxglbhdz_dlxgl2sx" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护定值_低零序过流3时限" prop="dyczxdlxglbhdz_dlxgl3sx" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护控制字定值_低零序过流1时限" prop="dyczxdlxglbhkzzdz_dlxgl1sx" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护控制字定值_低零序过流2时限" prop="dyczxdlxglbhkzzdz_dlxgl2sx" width="120" />
        <el-table-column align="left" label="低压侧中性点零序过流保护控制字定值_低零序过流3时限" prop="dyczxdlxglbhkzzdz_dlxgl3sx" width="120" />
        <el-table-column align="left" label="自定义定值_启动风冷电流定值" prop="zdydz_qdfldldz" width="120" />
        <el-table-column align="left" label="自定义定值_闭锁调压电流定值" prop="zdydz_bstydldz" width="120" />
        <el-table-column align="left" label="自定义控制字定值_纵差工频变化量差动保护" prop="zdykzzdz_zcgpbhlcdbh" width="120" />
        <el-table-column align="left" label="自定义控制字定值_启动风冷" prop="zdykzzdz_qdfl" width="120" />
        <el-table-column align="left" label="自定义控制字定值_闭锁调压" prop="zdykzzdz_bstj" width="120" />
        <el-table-column align="left" label="按钮组">
            <template #default="scope">
            <el-button type="primary" link icon="edit" size="small" class="table-button" @click="updateLD_1Func(scope.row)">变更</el-button>
            <el-button type="primary" link icon="delete" size="small" @click="deleteRow(scope.row)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        <div class="gva-pagination">
            <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            />
        </div>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="弹窗操作">
      <el-form :model="formData" label-position="right" ref="elFormRef" :rules="rule" label-width="80px">
        <el-form-item label="装置参数_定值区号:"  prop="zzcs_dzqh" >
          <el-input v-model="formData.zzcs_dzqh" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_厂站名称:"  prop="zzcsczmc" >
          <el-input v-model="formData.zzcsczmc" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_一次设备名称:"  prop="zzcs_ycsbmc" >
          <el-input v-model="formData.zzcs_ycsbmc" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_主变高中压侧额定容量:"  prop="zzcs_zbgzycedrl" >
          <el-input-number v-model="formData.zzcs_zbgzycedrl"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_主变低压侧额定容量:"  prop="zzcs_zbdycedrl" >
          <el-input-number v-model="formData.zzcs_zbdycedrl"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_高压侧接线方式:"  prop="zzcs_gycjxfs" >
          <el-input v-model.number="formData.zzcs_gycjxfs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_中压侧接线方式钟点数:"  prop="zzcs_zycjxfszds" >
          <el-input v-model.number="formData.zzcs_zycjxfszds" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压侧接线方式钟点数:"  prop="zzcs_dycjxfszds" >
          <el-input v-model.number="formData.zzcs_dycjxfszds" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧额定电压:"  prop="zzcs_gyceddy" >
          <el-input-number v-model="formData.zzcs_gyceddy"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_中压侧额定电压:"  prop="zzcs_zyceddy" >
          <el-input-number v-model="formData.zzcs_zyceddy"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_低压侧额定电压:"  prop="zzcs_dyceddy" >
          <el-input-number v-model="formData.zzcs_dyceddy"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_高压侧PT一次值:"  prop="zzcs_gycptycz" >
          <el-input-number v-model="formData.zzcs_gycptycz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_中压侧PT一次值:"  prop="zzcs_zycptcyz" >
          <el-input-number v-model="formData.zzcs_zycptcyz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_低压侧PT一次值:"  prop="zzcs_dycptycz" >
          <el-input-number v-model="formData.zzcs_dycptycz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_高压侧CT一次值:"  prop="zzcs_gycctycz" >
          <el-input-number v-model="formData.zzcs_gycctycz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="装置参数_高压侧CT二次值:"  prop="zzcs_gycctecz" >
          <el-input v-model.number="formData.zzcs_gycctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压桥CT一次值:"  prop="zzcs_gyqctycz" >
          <el-input v-model.number="formData.zzcs_gyqctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压桥CT二次值:"  prop="zzcs_gyqctecz" >
          <el-input v-model.number="formData.zzcs_gyqctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧零序CT一次值:"  prop="zzcs_gyclxctycz" >
          <el-input v-model.number="formData.zzcs_gyclxctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧零序CT二次值:"  prop="zzcs_gyclxctecz" >
          <el-input v-model.number="formData.zzcs_gyclxctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧间隙CT一次值:"  prop="zzcs_gycjxctycz" >
          <el-input v-model.number="formData.zzcs_gycjxctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧间隙CT二次值:"  prop="zzcs_gycjxctecz" >
          <el-input v-model.number="formData.zzcs_gycjxctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_中压侧CT一次值:"  prop="zzcs_zycctycz" >
          <el-input v-model.number="formData.zzcs_zycctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_中压侧CT二次值:"  prop="zzcs_zycctecz" >
          <el-input v-model.number="formData.zzcs_zycctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压1分支CT一次值:"  prop="zzcs_dy1fzctycz" >
          <el-input v-model.number="formData.zzcs_dy1fzctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压1分支CT二次值:"  prop="zzcs_dy1fzctecz" >
          <el-input v-model.number="formData.zzcs_dy1fzctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压2分支CT一次值:"  prop="zzcs_dy2fzctycz" >
          <el-input v-model.number="formData.zzcs_dy2fzctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压2分支CT二次值:"  prop="zzcs_dy2fzctecz" >
          <el-input v-model.number="formData.zzcs_dy2fzctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压侧零序CT一次值:"  prop="zzcs_dyclxctycz" >
          <el-input v-model.number="formData.zzcs_dyclxctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压侧零序CT二次值:"  prop="zzcs_dyclxctecz" >
          <el-input v-model.number="formData.zzcs_dyclxctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_差动保护:"  prop="tzjz_cdbh" >
          <el-input v-model="formData.tzjz_cdbh" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高复压过流Ⅰ段:"  prop="tzjz_gfygl1d" >
          <el-input v-model="formData.tzjz_gfygl1d" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高复压过流Ⅱ段:"  prop="tzjz_gyfgl2d" >
          <el-input v-model="formData.tzjz_gyfgl2d" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅰ段1时限:"  prop="tzjz_glxgl1d1sx" >
          <el-input v-model="formData.tzjz_glxgl1d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅰ段2时限:"  prop="tzjz_glxgl1d2sx" >
          <el-input v-model="formData.tzjz_glxgl1d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅱ段1时限:"  prop="tzjz_glxgl2d1sx" >
          <el-input v-model="formData.tzjz_glxgl2d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅱ段2时限:"  prop="tzjz_glxgl2d2sx" >
          <el-input v-model="formData.tzjz_glxgl2d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高间隙过流1时限:"  prop="tzjz_gjxgl1sx" >
          <el-input v-model="formData.tzjz_gjxgl1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高间隙过流2时限:"  prop="tzjz_gjxgl2sx" >
          <el-input v-model="formData.tzjz_gjxgl2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过压1时限:"  prop="tzjz_glxgy1sx" >
          <el-input v-model="formData.tzjz_glxgy1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过压2时限:"  prop="tzjz_glxgy2sx" >
          <el-input v-model="formData.tzjz_glxgy2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高压侧失灵经主变跳闸:"  prop="tzjz_gycsljzbtz" >
          <el-input v-model="formData.tzjz_gycsljzbtz" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅰ段1时限:"  prop="tzjz_zfygl1d1sx" >
          <el-input v-model="formData.tzjz_zfygl1d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅰ段2时限:"  prop="tzjz_zfygl1d2sx" >
          <el-input v-model="formData.tzjz_zfygl1d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅰ段3时限:"  prop="tzjz_zfygl1d3sx" >
          <el-input v-model="formData.tzjz_zfygl1d3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅱ段1时限:"  prop="tzjz_zfygl2d1sx" >
          <el-input v-model="formData.tzjz_zfygl2d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅱ段2时限:"  prop="tzjz_zfygl2d2sx" >
          <el-input v-model="formData.tzjz_zfygl2d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅱ段3时限:"  prop="tzjz_zfygl2d3sx" >
          <el-input v-model="formData.tzjz_zfygl2d3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅰ段1时限:"  prop="tzjz_d1fygl1d1sx" >
          <el-input v-model="formData.tzjz_d1fygl1d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅰ段2时限:"  prop="tzjz_d1fygl1d2sx" >
          <el-input v-model="formData.tzjz_d1fygl1d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅰ段3时限:"  prop="tzjz_d1fygl1d3sx" >
          <el-input v-model="formData.tzjz_d1fygl1d3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅱ段1时限:"  prop="tzjz_d1fygl2d1sx" >
          <el-input v-model="formData.tzjz_d1fygl2d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅱ段2时限:"  prop="tzjz_d1fygl2d2sx" >
          <el-input v-model="formData.tzjz_d1fygl2d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅱ段3时限:"  prop="tzjz_d1fygl2d3sx" >
          <el-input v-model="formData.tzjz_d1fygl2d3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅰ段1时限:"  prop="tzjz_d2fygl1d1sx" >
          <el-input v-model="formData.tzjz_d2fygl1d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅰ段2时限:"  prop="tzjz_d2fygl1d2sx" >
          <el-input v-model="formData.tzjz_d2fygl1d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅰ段3时限:"  prop="tzjz_d2fygl1d3sx" >
          <el-input v-model="formData.tzjz_d2fygl1d3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅱ段1时限:"  prop="tzjz_d2fygl2d1sx" >
          <el-input v-model="formData.tzjz_d2fygl2d1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅱ段2时限:"  prop="tzjz_d2fygl2d2sx" >
          <el-input v-model="formData.tzjz_d2fygl2d2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅱ段3时限:"  prop="tzjz_d2fygl2d3sx" >
          <el-input v-model="formData.tzjz_d2fygl2d3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低中性点零序过流1时限:"  prop="tzjz_dzxdlxgl1sx" >
          <el-input v-model="formData.tzjz_dzxdlxgl1sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低中性点零序过流2时限:"  prop="tzjz_dzxdlxgl2sx" >
          <el-input v-model="formData.tzjz_dzxdlxgl2sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低中性点零序过流3时限:"  prop="tzjz_dzxdlxgl3sx" >
          <el-input v-model="formData.tzjz_dzxdlxgl3sx" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="差动保护定值_纵差差动速断电流定值:"  prop="czbhdz_zccdsddldz" >
          <el-input-number v-model="formData.czbhdz_zccdsddldz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="差动保护定值_纵差保护启动电流定值:"  prop="cdbhdz_zcbhqddldz" >
          <el-input-number v-model="formData.cdbhdz_zcbhqddldz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="差动保护定值_二次谐波制动系数:"  prop="cdbhdz_ecxbzdxs" >
          <el-input-number v-model="formData.cdbhdz_ecxbzdxs"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="差动保护控制字定值_纵差差动速断:"  prop="cdbhkzzdz_zccdsd" >
          <el-input v-model.number="formData.cdbhkzzdz_zccdsd" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="差动保护控制字定值_纵差差动保护:"  prop="cdbhkzzdz_zccdbh" >
          <el-input v-model.number="formData.cdbhkzzdz_zccdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="差动保护控制字定值_CT断线闭锁差动保护:"  prop="cdbhkzzdz_ctdxbscdbh" >
          <el-input v-model.number="formData.cdbhkzzdz_ctdxbscdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高低电压闭锁定值:"  prop="gychbbhdz_gddybsdz" >
          <el-input-number v-model="formData.gychbbhdz_gddybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高负序电压闭锁定值:"  prop="gychbbhdz_gfxdybsdz" >
          <el-input-number v-model="formData.gychbbhdz_gfxdybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅰ段定值:"  prop="gychbbhdz_gfygl1ddz" >
          <el-input-number v-model="formData.gychbbhdz_gfygl1ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅰ段时间:"  prop="gychbbhdz_gfygl1ddz" >
          <el-input-number v-model="formData.gychbbhdz_gfygl1ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅱ段定值:"  prop="gychbbhdz_gfygl2ddz" >
          <el-input-number v-model="formData.gychbbhdz_gfygl2ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅱ段时间:"  prop="gychbbhdz_gfygl2dsj" >
          <el-input-number v-model="formData.gychbbhdz_gfygl2dsj"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅰ段定值:"  prop="gychbbhdz_glxgl1ddz" >
          <el-input-number v-model="formData.gychbbhdz_glxgl1ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅰ段1时限:"  prop="gychbbhdz_glxgl1d1sx" >
          <el-input-number v-model="formData.gychbbhdz_glxgl1d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅰ段2时限:"  prop="gychbbhdz_glxgl1d2sx" >
          <el-input-number v-model="formData.gychbbhdz_glxgl1d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅱ段定值:"  prop="gychbbhdz_glxgl2ddz" >
          <el-input-number v-model="formData.gychbbhdz_glxgl2ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅱ段1时限:"  prop="gychbbhdz_glxgl2d1sx" >
          <el-input-number v-model="formData.gychbbhdz_glxgl2d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅱ段2时限:"  prop="gychbbhdz_glxgl2d2sx" >
          <el-input-number v-model="formData.gychbbhdz_glxgl2d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高间隙过流定值:"  prop="gychbbhdz_gjxgldz" >
          <el-input-number v-model="formData.gychbbhdz_gjxgldz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高间隙过流1时限:"  prop="gychbbhdz_gjxgl1sx" >
          <el-input-number v-model="formData.gychbbhdz_gjxgl1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高间隙过流2时限:"  prop="gychbbhdz_gjxgl2sx" >
          <el-input-number v-model="formData.gychbbhdz_gjxgl2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过压定值:"  prop="gychbbhdz_glxgydz" >
          <el-input-number v-model="formData.gychbbhdz_glxgydz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过压1时限:"  prop="gychbbhdz_glxgy1sx" >
          <el-input-number v-model="formData.gychbbhdz_glxgy1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过压2时限:"  prop="gychbbhdz_glxgy2sx" >
          <el-input-number v-model="formData.gychbbhdz_glxgy2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高过负荷定值:"  prop="gychbbhdz_ggfhdz" >
          <el-input-number v-model="formData.gychbbhdz_ggfhdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段:"  prop="gychbbhkzzdz_gfygl1d" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1d" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段:"  prop="gychbbhkzzdz_gfygl2d" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2d" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段带方向:"  prop="gychbbhkzzdz_gfygl1ddfx" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段指向母线:"  prop="gychbbhkzzdz_gfygl1dzxmx" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段经复压闭锁:"  prop="gychbbhkzzdz_gfygl1djfybs" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段带方向:"  prop="gychbbhkzzdz_gfygl2ddfx" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段指向母线:"  prop="gychbbhkzzdz_gfygl2dzxmx" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段经复压闭锁:"  prop="gychbbhkzzdz_gfygl2djfybs" >
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高经其它侧复压闭锁:"  prop="gychbbhkzzdz_gjqtcfybs" >
          <el-input v-model.number="formData.gychbbhkzzdz_gjqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段1时限:"  prop="gychbbhkzzdz_glxgl1d1sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段2时限:"  prop="gychbbhkzzdz_glxgl1d2sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段1时限:"  prop="gychbbhkzzdz_glxgl2d1sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段2时限:"  prop="gychbbhkzzdz_glxgl2d2sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段带方向:"  prop="gychbbhkzzdz_glxgl1ddfx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段指向母线:"  prop="gychbbhkzzdz_glxgl1dzxmx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段采用自产零流:"  prop="gychbbhkzzdz_glxgy1dcyzcll" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgy1dcyzcll" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段带方向:"  prop="gychbbhkzzdz_glxgl2ddfx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段指向母线:"  prop="gychbbhkzzdz_glxgl2dzxmx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段采用自产零流:"  prop="gychbbhkzzdz_glxgl2dcyzcll" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2dcyzcll" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高间隙过流1时限:"  prop="gychbbhkzzdz_gjxgl1sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_gjxgl1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高间隙过流2时限:"  prop="gychbbhkzzdz_gjxgl2sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_gjxgl2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过压1时限:"  prop="gychbbhkzzdz_glxgy1sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgy1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过压2时限:"  prop="gychbbhkzzdz_glxgy2sx" >
          <el-input v-model.number="formData.gychbbhkzzdz_glxgy2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高压侧失灵经主变跳闸:"  prop="gychbbhkzzdz_gycsljzbtz" >
          <el-input v-model.number="formData.gychbbhkzzdz_gycsljzbtz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中低电压闭锁定值:"  prop="zychbbhdz_zddybsdz" >
          <el-input-number v-model="formData.zychbbhdz_zddybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中负序电压闭锁定值:"  prop="zychbbhdz_zfxdybsdz" >
          <el-input-number v-model="formData.zychbbhdz_zfxdybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段定值:"  prop="zychbbhdz_zfygl1ddz" >
          <el-input-number v-model="formData.zychbbhdz_zfygl1ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段1时限:"  prop="zychbbhdz_zfygl1d1sx" >
          <el-input-number v-model="formData.zychbbhdz_zfygl1d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段2时限:"  prop="zychbbhdz_zfygl1d2sx" >
          <el-input-number v-model="formData.zychbbhdz_zfygl1d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段3时限:"  prop="zychbbhdz_zfygl1d3sx" >
          <el-input-number v-model="formData.zychbbhdz_zfygl1d3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段定值:"  prop="zychbbhdz_zfygl2ddz" >
          <el-input-number v-model="formData.zychbbhdz_zfygl2ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段1时限:"  prop="zychbbhdz_zfygl2d1sx" >
          <el-input-number v-model="formData.zychbbhdz_zfygl2d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段2时限:"  prop="zychbbhdz_zfygl2d2sx" >
          <el-input-number v-model="formData.zychbbhdz_zfygl2d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段3时限:"  prop="zychbbhdz_zfygl2d3sx" >
          <el-input-number v-model="formData.zychbbhdz_zfygl2d3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中零序过压告警定值:"  prop="zychbbhdz_zlxgygjdz" >
          <el-input-number v-model="formData.zychbbhdz_zlxgygjdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中零序过压告警时间:"  prop="zychbbhdz_zlxgygjsj" >
          <el-input-number v-model="formData.zychbbhdz_zlxgygjsj"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中过负荷定值:"  prop="zychbbhdz_zgfhdz" >
          <el-input-number v-model="formData.zychbbhdz_zgfhdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段1时限:"  prop="zychbbhkzzdz_zfygl1d1sx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段2时限:"  prop="zychbbhkzzdz_zfygl1d2sx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段3时限:"  prop="zychbbhkzzdz_zfygl1d3sx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段1时限:"  prop="zychbbhkzzdz_zfygl2d1sx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段2时限:"  prop="zychbbhkzzdz_zfygl2d2sx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段3时限:"  prop="zychbbhkzzdz_zfygl2d3sx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段带方向:"  prop="zychbbhkzzdz_zfygl1ddfx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段指向母线:"  prop="zychbbhkzzdz_zfygl1dzxmx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段经复压闭锁:"  prop="zychbbhkzzdz_zfygl1djfybs" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段带方向:"  prop="zychbbhkzzdz_zfygl2ddfx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段指向母线:"  prop="zychbbhkzzdz_zfygl2dzxmx" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段经复压闭锁:"  prop="zychbbhkzzdz_zfygl2djfybs" >
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中经其它侧复压闭锁:"  prop="zychbbhkzzdz_zjqtcfybs" >
          <el-input v-model.number="formData.zychbbhkzzdz_zjqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中零序过压告警:"  prop="zychbbhkzzdz_zlxgygj" >
          <el-input v-model.number="formData.zychbbhkzzdz_zlxgygj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1低电压闭锁定值:"  prop="dy1fzhbbhdz_d1ddybsdz" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1ddybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1负序电压闭锁定值:"  prop="dy1fzhbbhdz_d1fxdybsdz" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fxdybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段定值:"  prop="dy1fzhbbhdz_d1fygl1ddz" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段1时限:"  prop="dy1fzhbbhdz_d1fygl1d1sx" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段2时限:"  prop="dy1fzhbbhdz_d1fygl1d2sx" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段3时限:"  prop="dy1fzhbbhdz_d1fygl1d3sx" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1d3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段定值:"  prop="dy1fzhbbhdz_d1fygl2ddz" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段1时限:"  prop="dy1fzhbbhdz_d1fygl2d1sx" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段2时限:"  prop="dy1fzhbbhdz_d1fygl2d2sx" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段3时限:"  prop="dy1fzhbbhdz_d1fygl2d3sx" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2d3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1零序过压告警定值:"  prop="dy1fzhbbhdz_d1lxgygjdz" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1lxgygjdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1零序过压告警时间:"  prop="dy1fzhbbhdz_d1lxgygjsj" >
          <el-input-number v-model="formData.dy1fzhbbhdz_d1lxgygjsj"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低过负荷定值:"  prop="dy1fzhbbhdz_dgfhdz" >
          <el-input-number v-model="formData.dy1fzhbbhdz_dgfhdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段1时限:"  prop="dy1fqhbbhkzzdz_d1fygl1d1sx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段2时限:"  prop="dy1fqhbbhkzzdz_d1fygl1d2sx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段3时限:"  prop="dy1fqhbbhkzzdz_d1fygl1d3sx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段1时限:"  prop="dy1fqhbbhkzzdz_d1fygl2d1sx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段2时限:"  prop="dy1fqhbbhkzzdz_d1fygl2d2sx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段3时限:"  prop="dy1fqhbbhkzzdz_d1fygl2d3sx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段带方向:"  prop="dy1fqhbbhkzzdz_d1fygl1ddfx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段指向母线:"  prop="dy1fqhbbhkzzdz_d1fygl1dzxmx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段经复压闭锁:"  prop="dy1fqhbbhkzzdz_d1fygl1djfybs" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段带方向:"  prop="dy1fqhbbhkzzdz_d1fygl2ddfx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段指向母线:"  prop="dy1fqhbbhkzzdz_d1fygl2dzxmx" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段经复压闭锁:"  prop="dy1fqhbbhkzzdz_d1fygl2djfybs" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1经其它侧复压闭锁:"  prop="dy1fqhbbhkzzdz_d1jqtcfybs" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1jqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1零序过压告警:"  prop="dy1fqhbbhkzzdz_d1lxgygj" >
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1lxgygj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2低电压闭锁定值:"  prop="dy2fzhbbhdz_d2ddybsdz" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2ddybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2负序电压闭锁定值:"  prop="dy2fzhbbhdz_d2fxdybsdz" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fxdybsdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段定值:"  prop="dy2fzhbbhdz_d2fygl1ddz" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段1时限:"  prop="dy2fzhbbhdz_d2fygl1d1sx" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段2时限:"  prop="dy2fzhbbhdz_d2fygl1d2sx" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段3时限:"  prop="dy2fzhbbhdz_d2fygl1d3sx" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1d3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段定值:"  prop="dy2fzhbbhdz_d2fygl2ddz" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2ddz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段1时限:"  prop="dy2fzhbbhdz_d2fygl2d1sx" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2d1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段2时限:"  prop="dy2fzhbbhdz_d2fygl2d2sx" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2d2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段3时限:"  prop="dy2fzhbbhdz_d2fygl2d3sx" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2d3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2零序过压告警定值:"  prop="dy2fzhbbhdz_d2lxgygjdz" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2lxgygjdz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2零序过压告警时间:"  prop="dy2fzhbbhdz_d2lxgygjsj" >
          <el-input-number v-model="formData.dy2fzhbbhdz_d2lxgygjsj"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段1时限:"  prop="dy2fzhbbhkzzdz_d2fygl1d1sx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段2时限:"  prop="dy2fzhbbhkzzdz_d2fygl1d2sx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段3时限:"  prop="dy2fzhbbhkzzdz_d2fygl1d3sx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段1时限:"  prop="dy2fzhbbhkzzdz_d2fygl2d1sx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段2时限:"  prop="dy2fzhbbhkzzdz_d2fygl2d2sx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段3时限:"  prop="dy2fzhbbhkzzdz_d2fygl2d3sx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段带方向:"  prop="dy2fzhbbhkzzdz_d2fygl1ddfx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段指向母线:"  prop="dy2fzhbbhkzzdz_d2fygl1dzxmx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段经复压闭锁:"  prop="dy2fzhbbhkzzdz_d2fygl1djfybs" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段带方向:"  prop="dy2fzhbbhkzzdz_d2fygl2ddfx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段指向母线:"  prop="dy2fzhbbhkzzdz_d2fugl2dzxmx" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fugl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段经复压闭锁:"  prop="dy2fzhbbhkzzdz_d2fygl2djfybs" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2经其它侧复压闭锁:"  prop="dy2fzhbbhkzzdz_d2jqtcfybs" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2jqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2零序过压告警:"  prop="dy2fzhbbhkzzdz_d2lxgygj" >
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2lxgygj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流定值:"  prop="dyczxdlxglbhdz_dlxgldz" >
          <el-input v-model="formData.dyczxdlxglbhdz_dlxgldz" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流1时限:"  prop="dyczxdlxglbhdz_dlxgl1sx" >
          <el-input-number v-model="formData.dyczxdlxglbhdz_dlxgl1sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流2时限:"  prop="dyczxdlxglbhdz_dlxgl2sx" >
          <el-input-number v-model="formData.dyczxdlxglbhdz_dlxgl2sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流3时限:"  prop="dyczxdlxglbhdz_dlxgl3sx" >
          <el-input-number v-model="formData.dyczxdlxglbhdz_dlxgl3sx"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护控制字定值_低零序过流1时限:"  prop="dyczxdlxglbhkzzdz_dlxgl1sx" >
          <el-input v-model.number="formData.dyczxdlxglbhkzzdz_dlxgl1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护控制字定值_低零序过流2时限:"  prop="dyczxdlxglbhkzzdz_dlxgl2sx" >
          <el-input v-model.number="formData.dyczxdlxglbhkzzdz_dlxgl2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护控制字定值_低零序过流3时限:"  prop="dyczxdlxglbhkzzdz_dlxgl3sx" >
          <el-input v-model.number="formData.dyczxdlxglbhkzzdz_dlxgl3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义定值_启动风冷电流定值:"  prop="zdydz_qdfldldz" >
          <el-input v-model="formData.zdydz_qdfldldz" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义定值_闭锁调压电流定值:"  prop="zdydz_bstydldz" >
          <el-input-number v-model="formData.zdydz_bstydldz"  style="width:100%" :precision="2" :clearable="true"  />
        </el-form-item>
        <el-form-item label="自定义控制字定值_纵差工频变化量差动保护:"  prop="zdykzzdz_zcgpbhlcdbh" >
          <el-input v-model.number="formData.zdykzzdz_zcgpbhlcdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义控制字定值_启动风冷:"  prop="zdykzzdz_qdfl" >
          <el-input v-model="formData.zdykzzdz_qdfl" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义控制字定值_闭锁调压:"  prop="zdykzzdz_bstj" >
          <el-input v-model.number="formData.zdykzzdz_bstj" :clearable="true" placeholder="请输入" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LD_1'
}
</script>

<script setup>
import {
  createLD_1,
  deleteLD_1,
  deleteLD_1ByIds,
  updateLD_1,
  findLD_1,
  getLD_1List
} from '@/api/sysLD1'

// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

// 自动化生成的字典（可能为空）以及字段
const formData = ref({
        zzcs_dzqh: '',
        zzcsczmc: '',
        zzcs_ycsbmc: '',
        zzcs_zbgzycedrl: 0,
        zzcs_zbdycedrl: 0,
        zzcs_gycjxfs: 0,
        zzcs_zycjxfszds: 0,
        zzcs_dycjxfszds: 0,
        zzcs_gyceddy: 0,
        zzcs_zyceddy: 0,
        zzcs_dyceddy: 0,
        zzcs_gycptycz: 0,
        zzcs_zycptcyz: 0,
        zzcs_dycptycz: 0,
        zzcs_gycctycz: 0,
        zzcs_gycctecz: 0,
        zzcs_gyqctycz: 0,
        zzcs_gyqctecz: 0,
        zzcs_gyclxctycz: 0,
        zzcs_gyclxctecz: 0,
        zzcs_gycjxctycz: 0,
        zzcs_gycjxctecz: 0,
        zzcs_zycctycz: 0,
        zzcs_zycctecz: 0,
        zzcs_dy1fzctycz: 0,
        zzcs_dy1fzctecz: 0,
        zzcs_dy2fzctycz: 0,
        zzcs_dy2fzctecz: 0,
        zzcs_dyclxctycz: 0,
        zzcs_dyclxctecz: 0,
        tzjz_cdbh: '',
        tzjz_gfygl1d: '',
        tzjz_gyfgl2d: '',
        tzjz_glxgl1d1sx: '',
        tzjz_glxgl1d2sx: '',
        tzjz_glxgl2d1sx: '',
        tzjz_glxgl2d2sx: '',
        tzjz_gjxgl1sx: '',
        tzjz_gjxgl2sx: '',
        tzjz_glxgy1sx: '',
        tzjz_glxgy2sx: '',
        tzjz_gycsljzbtz: '',
        tzjz_zfygl1d1sx: '',
        tzjz_zfygl1d2sx: '',
        tzjz_zfygl1d3sx: '',
        tzjz_zfygl2d1sx: '',
        tzjz_zfygl2d2sx: '',
        tzjz_zfygl2d3sx: '',
        tzjz_d1fygl1d1sx: '',
        tzjz_d1fygl1d2sx: '',
        tzjz_d1fygl1d3sx: '',
        tzjz_d1fygl2d1sx: '',
        tzjz_d1fygl2d2sx: '',
        tzjz_d1fygl2d3sx: '',
        tzjz_d2fygl1d1sx: '',
        tzjz_d2fygl1d2sx: '',
        tzjz_d2fygl1d3sx: '',
        tzjz_d2fygl2d1sx: '',
        tzjz_d2fygl2d2sx: '',
        tzjz_d2fygl2d3sx: '',
        tzjz_dzxdlxgl1sx: '',
        tzjz_dzxdlxgl2sx: '',
        tzjz_dzxdlxgl3sx: '',
        czbhdz_zccdsddldz: 0,
        cdbhdz_zcbhqddldz: 0,
        cdbhdz_ecxbzdxs: 0,
        cdbhkzzdz_zccdsd: 0,
        cdbhkzzdz_zccdbh: 0,
        cdbhkzzdz_ctdxbscdbh: 0,
        gychbbhdz_gddybsdz: 0,
        gychbbhdz_gfxdybsdz: 0,
        gychbbhdz_gfygl1ddz: 0,
        gychbbhdz_gfygl1ddz: 0,
        gychbbhdz_gfygl2ddz: 0,
        gychbbhdz_gfygl2dsj: 0,
        gychbbhdz_glxgl1ddz: 0,
        gychbbhdz_glxgl1d1sx: 0,
        gychbbhdz_glxgl1d2sx: 0,
        gychbbhdz_glxgl2ddz: 0,
        gychbbhdz_glxgl2d1sx: 0,
        gychbbhdz_glxgl2d2sx: 0,
        gychbbhdz_gjxgldz: 0,
        gychbbhdz_gjxgl1sx: 0,
        gychbbhdz_gjxgl2sx: 0,
        gychbbhdz_glxgydz: 0,
        gychbbhdz_glxgy1sx: 0,
        gychbbhdz_glxgy2sx: 0,
        gychbbhdz_ggfhdz: 0,
        gychbbhkzzdz_gfygl1d: 0,
        gychbbhkzzdz_gfygl2d: 0,
        gychbbhkzzdz_gfygl1ddfx: 0,
        gychbbhkzzdz_gfygl1dzxmx: 0,
        gychbbhkzzdz_gfygl1djfybs: 0,
        gychbbhkzzdz_gfygl2ddfx: 0,
        gychbbhkzzdz_gfygl2dzxmx: 0,
        gychbbhkzzdz_gfygl2djfybs: 0,
        gychbbhkzzdz_gjqtcfybs: 0,
        gychbbhkzzdz_glxgl1d1sx: 0,
        gychbbhkzzdz_glxgl1d2sx: 0,
        gychbbhkzzdz_glxgl2d1sx: 0,
        gychbbhkzzdz_glxgl2d2sx: 0,
        gychbbhkzzdz_glxgl1ddfx: 0,
        gychbbhkzzdz_glxgl1dzxmx: 0,
        gychbbhkzzdz_glxgy1dcyzcll: 0,
        gychbbhkzzdz_glxgl2ddfx: 0,
        gychbbhkzzdz_glxgl2dzxmx: 0,
        gychbbhkzzdz_glxgl2dcyzcll: 0,
        gychbbhkzzdz_gjxgl1sx: 0,
        gychbbhkzzdz_gjxgl2sx: 0,
        gychbbhkzzdz_glxgy1sx: 0,
        gychbbhkzzdz_glxgy2sx: 0,
        gychbbhkzzdz_gycsljzbtz: 0,
        zychbbhdz_zddybsdz: 0,
        zychbbhdz_zfxdybsdz: 0,
        zychbbhdz_zfygl1ddz: 0,
        zychbbhdz_zfygl1d1sx: 0,
        zychbbhdz_zfygl1d2sx: 0,
        zychbbhdz_zfygl1d3sx: 0,
        zychbbhdz_zfygl2ddz: 0,
        zychbbhdz_zfygl2d1sx: 0,
        zychbbhdz_zfygl2d2sx: 0,
        zychbbhdz_zfygl2d3sx: 0,
        zychbbhdz_zlxgygjdz: 0,
        zychbbhdz_zlxgygjsj: 0,
        zychbbhdz_zgfhdz: 0,
        zychbbhkzzdz_zfygl1d1sx: 0,
        zychbbhkzzdz_zfygl1d2sx: 0,
        zychbbhkzzdz_zfygl1d3sx: 0,
        zychbbhkzzdz_zfygl2d1sx: 0,
        zychbbhkzzdz_zfygl2d2sx: 0,
        zychbbhkzzdz_zfygl2d3sx: 0,
        zychbbhkzzdz_zfygl1ddfx: 0,
        zychbbhkzzdz_zfygl1dzxmx: 0,
        zychbbhkzzdz_zfygl1djfybs: 0,
        zychbbhkzzdz_zfygl2ddfx: 0,
        zychbbhkzzdz_zfygl2dzxmx: 0,
        zychbbhkzzdz_zfygl2djfybs: 0,
        zychbbhkzzdz_zjqtcfybs: 0,
        zychbbhkzzdz_zlxgygj: 0,
        dy1fzhbbhdz_d1ddybsdz: 0,
        dy1fzhbbhdz_d1fxdybsdz: 0,
        dy1fzhbbhdz_d1fygl1ddz: 0,
        dy1fzhbbhdz_d1fygl1d1sx: 0,
        dy1fzhbbhdz_d1fygl1d2sx: 0,
        dy1fzhbbhdz_d1fygl1d3sx: 0,
        dy1fzhbbhdz_d1fygl2ddz: 0,
        dy1fzhbbhdz_d1fygl2d1sx: 0,
        dy1fzhbbhdz_d1fygl2d2sx: 0,
        dy1fzhbbhdz_d1fygl2d3sx: 0,
        dy1fzhbbhdz_d1lxgygjdz: 0,
        dy1fzhbbhdz_d1lxgygjsj: 0,
        dy1fzhbbhdz_dgfhdz: 0,
        dy1fqhbbhkzzdz_d1fygl1d1sx: 0,
        dy1fqhbbhkzzdz_d1fygl1d2sx: 0,
        dy1fqhbbhkzzdz_d1fygl1d3sx: 0,
        dy1fqhbbhkzzdz_d1fygl2d1sx: 0,
        dy1fqhbbhkzzdz_d1fygl2d2sx: 0,
        dy1fqhbbhkzzdz_d1fygl2d3sx: 0,
        dy1fqhbbhkzzdz_d1fygl1ddfx: 0,
        dy1fqhbbhkzzdz_d1fygl1dzxmx: 0,
        dy1fqhbbhkzzdz_d1fygl1djfybs: 0,
        dy1fqhbbhkzzdz_d1fygl2ddfx: 0,
        dy1fqhbbhkzzdz_d1fygl2dzxmx: 0,
        dy1fqhbbhkzzdz_d1fygl2djfybs: 0,
        dy1fqhbbhkzzdz_d1jqtcfybs: 0,
        dy1fqhbbhkzzdz_d1lxgygj: 0,
        dy2fzhbbhdz_d2ddybsdz: 0,
        dy2fzhbbhdz_d2fxdybsdz: 0,
        dy2fzhbbhdz_d2fygl1ddz: 0,
        dy2fzhbbhdz_d2fygl1d1sx: 0,
        dy2fzhbbhdz_d2fygl1d2sx: 0,
        dy2fzhbbhdz_d2fygl1d3sx: 0,
        dy2fzhbbhdz_d2fygl2ddz: 0,
        dy2fzhbbhdz_d2fygl2d1sx: 0,
        dy2fzhbbhdz_d2fygl2d2sx: 0,
        dy2fzhbbhdz_d2fygl2d3sx: 0,
        dy2fzhbbhdz_d2lxgygjdz: 0,
        dy2fzhbbhdz_d2lxgygjsj: 0,
        dy2fzhbbhkzzdz_d2fygl1d1sx: 0,
        dy2fzhbbhkzzdz_d2fygl1d2sx: 0,
        dy2fzhbbhkzzdz_d2fygl1d3sx: 0,
        dy2fzhbbhkzzdz_d2fygl2d1sx: 0,
        dy2fzhbbhkzzdz_d2fygl2d2sx: 0,
        dy2fzhbbhkzzdz_d2fygl2d3sx: 0,
        dy2fzhbbhkzzdz_d2fygl1ddfx: 0,
        dy2fzhbbhkzzdz_d2fygl1dzxmx: 0,
        dy2fzhbbhkzzdz_d2fygl1djfybs: 0,
        dy2fzhbbhkzzdz_d2fygl2ddfx: 0,
        dy2fzhbbhkzzdz_d2fugl2dzxmx: 0,
        dy2fzhbbhkzzdz_d2fygl2djfybs: 0,
        dy2fzhbbhkzzdz_d2jqtcfybs: 0,
        dy2fzhbbhkzzdz_d2lxgygj: 0,
        dyczxdlxglbhdz_dlxgldz: '',
        dyczxdlxglbhdz_dlxgl1sx: 0,
        dyczxdlxglbhdz_dlxgl2sx: 0,
        dyczxdlxglbhdz_dlxgl3sx: 0,
        dyczxdlxglbhkzzdz_dlxgl1sx: 0,
        dyczxdlxglbhkzzdz_dlxgl2sx: 0,
        dyczxdlxglbhkzzdz_dlxgl3sx: 0,
        zdydz_qdfldldz: '',
        zdydz_bstydldz: 0,
        zdykzzdz_zcgpbhlcdbh: 0,
        zdykzzdz_qdfl: '',
        zdykzzdz_bstj: 0,
        })

// 验证规则
const rule = reactive({
})

const elFormRef = ref()


// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})

// 重置
const onReset = () => {
  searchInfo.value = {}
}

// 搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getLD_1List({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async () =>{
}

// 获取需要的字典 可能为空 按需保留
setOptions()


// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
    ElMessageBox.confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            deleteLD_1Func(row)
        })
    }


// 批量删除控制标记
const deleteVisible = ref(false)

// 多选删除
const onDelete = async() => {
      const ids = []
      if (multipleSelection.value.length === 0) {
        ElMessage({
          type: 'warning',
          message: '请选择要删除的数据'
        })
        return
      }
      multipleSelection.value &&
        multipleSelection.value.map(item => {
          ids.push(item.ID)
        })
      const res = await deleteLD_1ByIds({ ids })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        if (tableData.value.length === ids.length && page.value > 1) {
          page.value--
        }
        deleteVisible.value = false
        getTableData()
      }
    }

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updateLD_1Func = async(row) => {
    const res = await findLD_1({ ID: row.ID })
    type.value = 'update'
    if (res.code === 0) {
        formData.value = res.data.reLD_type_1
        dialogFormVisible.value = true
    }
}


// 删除行
const deleteLD_1Func = async (row) => {
    const res = await deleteLD_1({ ID: row.ID })
    if (res.code === 0) {
        ElMessage({
                type: 'success',
                message: '删除成功'
            })
            if (tableData.value.length === 1 && page.value > 1) {
            page.value--
        }
        getTableData()
    }
}

// 弹窗控制标记
const dialogFormVisible = ref(false)

// 打开弹窗
const openDialog = () => {
    type.value = 'create'
    dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
    dialogFormVisible.value = false
    formData.value = {
        zzcs_dzqh: '',
        zzcsczmc: '',
        zzcs_ycsbmc: '',
        zzcs_zbgzycedrl: 0,
        zzcs_zbdycedrl: 0,
        zzcs_gycjxfs: 0,
        zzcs_zycjxfszds: 0,
        zzcs_dycjxfszds: 0,
        zzcs_gyceddy: 0,
        zzcs_zyceddy: 0,
        zzcs_dyceddy: 0,
        zzcs_gycptycz: 0,
        zzcs_zycptcyz: 0,
        zzcs_dycptycz: 0,
        zzcs_gycctycz: 0,
        zzcs_gycctecz: 0,
        zzcs_gyqctycz: 0,
        zzcs_gyqctecz: 0,
        zzcs_gyclxctycz: 0,
        zzcs_gyclxctecz: 0,
        zzcs_gycjxctycz: 0,
        zzcs_gycjxctecz: 0,
        zzcs_zycctycz: 0,
        zzcs_zycctecz: 0,
        zzcs_dy1fzctycz: 0,
        zzcs_dy1fzctecz: 0,
        zzcs_dy2fzctycz: 0,
        zzcs_dy2fzctecz: 0,
        zzcs_dyclxctycz: 0,
        zzcs_dyclxctecz: 0,
        tzjz_cdbh: '',
        tzjz_gfygl1d: '',
        tzjz_gyfgl2d: '',
        tzjz_glxgl1d1sx: '',
        tzjz_glxgl1d2sx: '',
        tzjz_glxgl2d1sx: '',
        tzjz_glxgl2d2sx: '',
        tzjz_gjxgl1sx: '',
        tzjz_gjxgl2sx: '',
        tzjz_glxgy1sx: '',
        tzjz_glxgy2sx: '',
        tzjz_gycsljzbtz: '',
        tzjz_zfygl1d1sx: '',
        tzjz_zfygl1d2sx: '',
        tzjz_zfygl1d3sx: '',
        tzjz_zfygl2d1sx: '',
        tzjz_zfygl2d2sx: '',
        tzjz_zfygl2d3sx: '',
        tzjz_d1fygl1d1sx: '',
        tzjz_d1fygl1d2sx: '',
        tzjz_d1fygl1d3sx: '',
        tzjz_d1fygl2d1sx: '',
        tzjz_d1fygl2d2sx: '',
        tzjz_d1fygl2d3sx: '',
        tzjz_d2fygl1d1sx: '',
        tzjz_d2fygl1d2sx: '',
        tzjz_d2fygl1d3sx: '',
        tzjz_d2fygl2d1sx: '',
        tzjz_d2fygl2d2sx: '',
        tzjz_d2fygl2d3sx: '',
        tzjz_dzxdlxgl1sx: '',
        tzjz_dzxdlxgl2sx: '',
        tzjz_dzxdlxgl3sx: '',
        czbhdz_zccdsddldz: 0,
        cdbhdz_zcbhqddldz: 0,
        cdbhdz_ecxbzdxs: 0,
        cdbhkzzdz_zccdsd: 0,
        cdbhkzzdz_zccdbh: 0,
        cdbhkzzdz_ctdxbscdbh: 0,
        gychbbhdz_gddybsdz: 0,
        gychbbhdz_gfxdybsdz: 0,
        gychbbhdz_gfygl1ddz: 0,
        gychbbhdz_gfygl1ddz: 0,
        gychbbhdz_gfygl2ddz: 0,
        gychbbhdz_gfygl2dsj: 0,
        gychbbhdz_glxgl1ddz: 0,
        gychbbhdz_glxgl1d1sx: 0,
        gychbbhdz_glxgl1d2sx: 0,
        gychbbhdz_glxgl2ddz: 0,
        gychbbhdz_glxgl2d1sx: 0,
        gychbbhdz_glxgl2d2sx: 0,
        gychbbhdz_gjxgldz: 0,
        gychbbhdz_gjxgl1sx: 0,
        gychbbhdz_gjxgl2sx: 0,
        gychbbhdz_glxgydz: 0,
        gychbbhdz_glxgy1sx: 0,
        gychbbhdz_glxgy2sx: 0,
        gychbbhdz_ggfhdz: 0,
        gychbbhkzzdz_gfygl1d: 0,
        gychbbhkzzdz_gfygl2d: 0,
        gychbbhkzzdz_gfygl1ddfx: 0,
        gychbbhkzzdz_gfygl1dzxmx: 0,
        gychbbhkzzdz_gfygl1djfybs: 0,
        gychbbhkzzdz_gfygl2ddfx: 0,
        gychbbhkzzdz_gfygl2dzxmx: 0,
        gychbbhkzzdz_gfygl2djfybs: 0,
        gychbbhkzzdz_gjqtcfybs: 0,
        gychbbhkzzdz_glxgl1d1sx: 0,
        gychbbhkzzdz_glxgl1d2sx: 0,
        gychbbhkzzdz_glxgl2d1sx: 0,
        gychbbhkzzdz_glxgl2d2sx: 0,
        gychbbhkzzdz_glxgl1ddfx: 0,
        gychbbhkzzdz_glxgl1dzxmx: 0,
        gychbbhkzzdz_glxgy1dcyzcll: 0,
        gychbbhkzzdz_glxgl2ddfx: 0,
        gychbbhkzzdz_glxgl2dzxmx: 0,
        gychbbhkzzdz_glxgl2dcyzcll: 0,
        gychbbhkzzdz_gjxgl1sx: 0,
        gychbbhkzzdz_gjxgl2sx: 0,
        gychbbhkzzdz_glxgy1sx: 0,
        gychbbhkzzdz_glxgy2sx: 0,
        gychbbhkzzdz_gycsljzbtz: 0,
        zychbbhdz_zddybsdz: 0,
        zychbbhdz_zfxdybsdz: 0,
        zychbbhdz_zfygl1ddz: 0,
        zychbbhdz_zfygl1d1sx: 0,
        zychbbhdz_zfygl1d2sx: 0,
        zychbbhdz_zfygl1d3sx: 0,
        zychbbhdz_zfygl2ddz: 0,
        zychbbhdz_zfygl2d1sx: 0,
        zychbbhdz_zfygl2d2sx: 0,
        zychbbhdz_zfygl2d3sx: 0,
        zychbbhdz_zlxgygjdz: 0,
        zychbbhdz_zlxgygjsj: 0,
        zychbbhdz_zgfhdz: 0,
        zychbbhkzzdz_zfygl1d1sx: 0,
        zychbbhkzzdz_zfygl1d2sx: 0,
        zychbbhkzzdz_zfygl1d3sx: 0,
        zychbbhkzzdz_zfygl2d1sx: 0,
        zychbbhkzzdz_zfygl2d2sx: 0,
        zychbbhkzzdz_zfygl2d3sx: 0,
        zychbbhkzzdz_zfygl1ddfx: 0,
        zychbbhkzzdz_zfygl1dzxmx: 0,
        zychbbhkzzdz_zfygl1djfybs: 0,
        zychbbhkzzdz_zfygl2ddfx: 0,
        zychbbhkzzdz_zfygl2dzxmx: 0,
        zychbbhkzzdz_zfygl2djfybs: 0,
        zychbbhkzzdz_zjqtcfybs: 0,
        zychbbhkzzdz_zlxgygj: 0,
        dy1fzhbbhdz_d1ddybsdz: 0,
        dy1fzhbbhdz_d1fxdybsdz: 0,
        dy1fzhbbhdz_d1fygl1ddz: 0,
        dy1fzhbbhdz_d1fygl1d1sx: 0,
        dy1fzhbbhdz_d1fygl1d2sx: 0,
        dy1fzhbbhdz_d1fygl1d3sx: 0,
        dy1fzhbbhdz_d1fygl2ddz: 0,
        dy1fzhbbhdz_d1fygl2d1sx: 0,
        dy1fzhbbhdz_d1fygl2d2sx: 0,
        dy1fzhbbhdz_d1fygl2d3sx: 0,
        dy1fzhbbhdz_d1lxgygjdz: 0,
        dy1fzhbbhdz_d1lxgygjsj: 0,
        dy1fzhbbhdz_dgfhdz: 0,
        dy1fqhbbhkzzdz_d1fygl1d1sx: 0,
        dy1fqhbbhkzzdz_d1fygl1d2sx: 0,
        dy1fqhbbhkzzdz_d1fygl1d3sx: 0,
        dy1fqhbbhkzzdz_d1fygl2d1sx: 0,
        dy1fqhbbhkzzdz_d1fygl2d2sx: 0,
        dy1fqhbbhkzzdz_d1fygl2d3sx: 0,
        dy1fqhbbhkzzdz_d1fygl1ddfx: 0,
        dy1fqhbbhkzzdz_d1fygl1dzxmx: 0,
        dy1fqhbbhkzzdz_d1fygl1djfybs: 0,
        dy1fqhbbhkzzdz_d1fygl2ddfx: 0,
        dy1fqhbbhkzzdz_d1fygl2dzxmx: 0,
        dy1fqhbbhkzzdz_d1fygl2djfybs: 0,
        dy1fqhbbhkzzdz_d1jqtcfybs: 0,
        dy1fqhbbhkzzdz_d1lxgygj: 0,
        dy2fzhbbhdz_d2ddybsdz: 0,
        dy2fzhbbhdz_d2fxdybsdz: 0,
        dy2fzhbbhdz_d2fygl1ddz: 0,
        dy2fzhbbhdz_d2fygl1d1sx: 0,
        dy2fzhbbhdz_d2fygl1d2sx: 0,
        dy2fzhbbhdz_d2fygl1d3sx: 0,
        dy2fzhbbhdz_d2fygl2ddz: 0,
        dy2fzhbbhdz_d2fygl2d1sx: 0,
        dy2fzhbbhdz_d2fygl2d2sx: 0,
        dy2fzhbbhdz_d2fygl2d3sx: 0,
        dy2fzhbbhdz_d2lxgygjdz: 0,
        dy2fzhbbhdz_d2lxgygjsj: 0,
        dy2fzhbbhkzzdz_d2fygl1d1sx: 0,
        dy2fzhbbhkzzdz_d2fygl1d2sx: 0,
        dy2fzhbbhkzzdz_d2fygl1d3sx: 0,
        dy2fzhbbhkzzdz_d2fygl2d1sx: 0,
        dy2fzhbbhkzzdz_d2fygl2d2sx: 0,
        dy2fzhbbhkzzdz_d2fygl2d3sx: 0,
        dy2fzhbbhkzzdz_d2fygl1ddfx: 0,
        dy2fzhbbhkzzdz_d2fygl1dzxmx: 0,
        dy2fzhbbhkzzdz_d2fygl1djfybs: 0,
        dy2fzhbbhkzzdz_d2fygl2ddfx: 0,
        dy2fzhbbhkzzdz_d2fugl2dzxmx: 0,
        dy2fzhbbhkzzdz_d2fygl2djfybs: 0,
        dy2fzhbbhkzzdz_d2jqtcfybs: 0,
        dy2fzhbbhkzzdz_d2lxgygj: 0,
        dyczxdlxglbhdz_dlxgldz: '',
        dyczxdlxglbhdz_dlxgl1sx: 0,
        dyczxdlxglbhdz_dlxgl2sx: 0,
        dyczxdlxglbhdz_dlxgl3sx: 0,
        dyczxdlxglbhkzzdz_dlxgl1sx: 0,
        dyczxdlxglbhkzzdz_dlxgl2sx: 0,
        dyczxdlxglbhkzzdz_dlxgl3sx: 0,
        zdydz_qdfldldz: '',
        zdydz_bstydldz: 0,
        zdykzzdz_zcgpbhlcdbh: 0,
        zdykzzdz_qdfl: '',
        zdykzzdz_bstj: 0,
        }
}
// 弹窗确定
const enterDialog = async () => {
     elFormRef.value?.validate( async (valid) => {
             if (!valid) return
              let res
              switch (type.value) {
                case 'create':
                  res = await createLD_1(formData.value)
                  break
                case 'update':
                  res = await updateLD_1(formData.value)
                  break
                default:
                  res = await createLD_1(formData.value)
                  break
              }
              if (res.code === 0) {
                ElMessage({
                  type: 'success',
                  message: '创建/更改成功'
                })
                closeDialog()
                getTableData()
              }
      })
}
</script>

<style>
</style>
