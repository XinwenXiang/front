<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="装置参数_定值区号:" prop="zzcs_dzqh">
          <el-input v-model="formData.zzcs_dzqh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_厂站名称:" prop="zzcsczmc">
          <el-input v-model="formData.zzcsczmc" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_一次设备名称:" prop="zzcs_ycsbmc">
          <el-input v-model="formData.zzcs_ycsbmc" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_主变高中压侧额定容量:" prop="zzcs_zbgzycedrl">
          <el-input-number v-model="formData.zzcs_zbgzycedrl" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_主变低压侧额定容量:" prop="zzcs_zbdycedrl">
          <el-input-number v-model="formData.zzcs_zbdycedrl" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_高压侧接线方式:" prop="zzcs_gycjxfs">
          <el-input v-model.number="formData.zzcs_gycjxfs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_中压侧接线方式钟点数:" prop="zzcs_zycjxfszds">
          <el-input v-model.number="formData.zzcs_zycjxfszds" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压侧接线方式钟点数:" prop="zzcs_dycjxfszds">
          <el-input v-model.number="formData.zzcs_dycjxfszds" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧额定电压:" prop="zzcs_gyceddy">
          <el-input-number v-model="formData.zzcs_gyceddy" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_中压侧额定电压:" prop="zzcs_zyceddy">
          <el-input-number v-model="formData.zzcs_zyceddy" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_低压侧额定电压:" prop="zzcs_dyceddy">
          <el-input-number v-model="formData.zzcs_dyceddy" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_高压侧PT一次值:" prop="zzcs_gycptycz">
          <el-input-number v-model="formData.zzcs_gycptycz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_中压侧PT一次值:" prop="zzcs_zycptcyz">
          <el-input-number v-model="formData.zzcs_zycptcyz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_低压侧PT一次值:" prop="zzcs_dycptycz">
          <el-input-number v-model="formData.zzcs_dycptycz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_高压侧CT一次值:" prop="zzcs_gycctycz">
          <el-input-number v-model="formData.zzcs_gycctycz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="装置参数_高压侧CT二次值:" prop="zzcs_gycctecz">
          <el-input v-model.number="formData.zzcs_gycctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压桥CT一次值:" prop="zzcs_gyqctycz">
          <el-input v-model.number="formData.zzcs_gyqctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压桥CT二次值:" prop="zzcs_gyqctecz">
          <el-input v-model.number="formData.zzcs_gyqctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧零序CT一次值:" prop="zzcs_gyclxctycz">
          <el-input v-model.number="formData.zzcs_gyclxctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧零序CT二次值:" prop="zzcs_gyclxctecz">
          <el-input v-model.number="formData.zzcs_gyclxctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧间隙CT一次值:" prop="zzcs_gycjxctycz">
          <el-input v-model.number="formData.zzcs_gycjxctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_高压侧间隙CT二次值:" prop="zzcs_gycjxctecz">
          <el-input v-model.number="formData.zzcs_gycjxctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_中压侧CT一次值:" prop="zzcs_zycctycz">
          <el-input v-model.number="formData.zzcs_zycctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_中压侧CT二次值:" prop="zzcs_zycctecz">
          <el-input v-model.number="formData.zzcs_zycctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压1分支CT一次值:" prop="zzcs_dy1fzctycz">
          <el-input v-model.number="formData.zzcs_dy1fzctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压1分支CT二次值:" prop="zzcs_dy1fzctecz">
          <el-input v-model.number="formData.zzcs_dy1fzctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压2分支CT一次值:" prop="zzcs_dy2fzctycz">
          <el-input v-model.number="formData.zzcs_dy2fzctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压2分支CT二次值:" prop="zzcs_dy2fzctecz">
          <el-input v-model.number="formData.zzcs_dy2fzctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压侧零序CT一次值:" prop="zzcs_dyclxctycz">
          <el-input v-model.number="formData.zzcs_dyclxctycz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="装置参数_低压侧零序CT二次值:" prop="zzcs_dyclxctecz">
          <el-input v-model.number="formData.zzcs_dyclxctecz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_差动保护:" prop="tzjz_cdbh">
          <el-input v-model="formData.tzjz_cdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高复压过流Ⅰ段:" prop="tzjz_gfygl1d">
          <el-input v-model="formData.tzjz_gfygl1d" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高复压过流Ⅱ段:" prop="tzjz_gyfgl2d">
          <el-input v-model="formData.tzjz_gyfgl2d" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅰ段1时限:" prop="tzjz_glxgl1d1sx">
          <el-input v-model="formData.tzjz_glxgl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅰ段2时限:" prop="tzjz_glxgl1d2sx">
          <el-input v-model="formData.tzjz_glxgl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅱ段1时限:" prop="tzjz_glxgl2d1sx">
          <el-input v-model="formData.tzjz_glxgl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过流Ⅱ段2时限:" prop="tzjz_glxgl2d2sx">
          <el-input v-model="formData.tzjz_glxgl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高间隙过流1时限:" prop="tzjz_gjxgl1sx">
          <el-input v-model="formData.tzjz_gjxgl1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高间隙过流2时限:" prop="tzjz_gjxgl2sx">
          <el-input v-model="formData.tzjz_gjxgl2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过压1时限:" prop="tzjz_glxgy1sx">
          <el-input v-model="formData.tzjz_glxgy1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高零序过压2时限:" prop="tzjz_glxgy2sx">
          <el-input v-model="formData.tzjz_glxgy2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_高压侧失灵经主变跳闸:" prop="tzjz_gycsljzbtz">
          <el-input v-model="formData.tzjz_gycsljzbtz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅰ段1时限:" prop="tzjz_zfygl1d1sx">
          <el-input v-model="formData.tzjz_zfygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅰ段2时限:" prop="tzjz_zfygl1d2sx">
          <el-input v-model="formData.tzjz_zfygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅰ段3时限:" prop="tzjz_zfygl1d3sx">
          <el-input v-model="formData.tzjz_zfygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅱ段1时限:" prop="tzjz_zfygl2d1sx">
          <el-input v-model="formData.tzjz_zfygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅱ段2时限:" prop="tzjz_zfygl2d2sx">
          <el-input v-model="formData.tzjz_zfygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_中复压过流Ⅱ段3时限:" prop="tzjz_zfygl2d3sx">
          <el-input v-model="formData.tzjz_zfygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅰ段1时限:" prop="tzjz_d1fygl1d1sx">
          <el-input v-model="formData.tzjz_d1fygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅰ段2时限:" prop="tzjz_d1fygl1d2sx">
          <el-input v-model="formData.tzjz_d1fygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅰ段3时限:" prop="tzjz_d1fygl1d3sx">
          <el-input v-model="formData.tzjz_d1fygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅱ段1时限:" prop="tzjz_d1fygl2d1sx">
          <el-input v-model="formData.tzjz_d1fygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅱ段2时限:" prop="tzjz_d1fygl2d2sx">
          <el-input v-model="formData.tzjz_d1fygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低1复压过流Ⅱ段3时限:" prop="tzjz_d1fygl2d3sx">
          <el-input v-model="formData.tzjz_d1fygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅰ段1时限:" prop="tzjz_d2fygl1d1sx">
          <el-input v-model="formData.tzjz_d2fygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅰ段2时限:" prop="tzjz_d2fygl1d2sx">
          <el-input v-model="formData.tzjz_d2fygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅰ段3时限:" prop="tzjz_d2fygl1d3sx">
          <el-input v-model="formData.tzjz_d2fygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅱ段1时限:" prop="tzjz_d2fygl2d1sx">
          <el-input v-model="formData.tzjz_d2fygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅱ段2时限:" prop="tzjz_d2fygl2d2sx">
          <el-input v-model="formData.tzjz_d2fygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低2复压过流Ⅱ段3时限:" prop="tzjz_d2fygl2d3sx">
          <el-input v-model="formData.tzjz_d2fygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低中性点零序过流1时限:" prop="tzjz_dzxdlxgl1sx">
          <el-input v-model="formData.tzjz_dzxdlxgl1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低中性点零序过流2时限:" prop="tzjz_dzxdlxgl2sx">
          <el-input v-model="formData.tzjz_dzxdlxgl2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="跳闸矩阵_低中性点零序过流3时限:" prop="tzjz_dzxdlxgl3sx">
          <el-input v-model="formData.tzjz_dzxdlxgl3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="差动保护定值_纵差差动速断电流定值:" prop="czbhdz_zccdsddldz">
          <el-input-number v-model="formData.czbhdz_zccdsddldz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="差动保护定值_纵差保护启动电流定值:" prop="cdbhdz_zcbhqddldz">
          <el-input-number v-model="formData.cdbhdz_zcbhqddldz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="差动保护定值_二次谐波制动系数:" prop="cdbhdz_ecxbzdxs">
          <el-input-number v-model="formData.cdbhdz_ecxbzdxs" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="差动保护控制字定值_纵差差动速断:" prop="cdbhkzzdz_zccdsd">
          <el-input v-model.number="formData.cdbhkzzdz_zccdsd" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="差动保护控制字定值_纵差差动保护:" prop="cdbhkzzdz_zccdbh">
          <el-input v-model.number="formData.cdbhkzzdz_zccdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="差动保护控制字定值_CT断线闭锁差动保护:" prop="cdbhkzzdz_ctdxbscdbh">
          <el-input v-model.number="formData.cdbhkzzdz_ctdxbscdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高低电压闭锁定值:" prop="gychbbhdz_gddybsdz">
          <el-input-number v-model="formData.gychbbhdz_gddybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高负序电压闭锁定值:" prop="gychbbhdz_gfxdybsdz">
          <el-input-number v-model="formData.gychbbhdz_gfxdybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅰ段定值:" prop="gychbbhdz_gfygl1ddz">
          <el-input-number v-model="formData.gychbbhdz_gfygl1ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅰ段时间:" prop="gychbbhdz_gfygl1ddz">
          <el-input-number v-model="formData.gychbbhdz_gfygl1ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅱ段定值:" prop="gychbbhdz_gfygl2ddz">
          <el-input-number v-model="formData.gychbbhdz_gfygl2ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高复压过流Ⅱ段时间:" prop="gychbbhdz_gfygl2dsj">
          <el-input-number v-model="formData.gychbbhdz_gfygl2dsj" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅰ段定值:" prop="gychbbhdz_glxgl1ddz">
          <el-input-number v-model="formData.gychbbhdz_glxgl1ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅰ段1时限:" prop="gychbbhdz_glxgl1d1sx">
          <el-input-number v-model="formData.gychbbhdz_glxgl1d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅰ段2时限:" prop="gychbbhdz_glxgl1d2sx">
          <el-input-number v-model="formData.gychbbhdz_glxgl1d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅱ段定值:" prop="gychbbhdz_glxgl2ddz">
          <el-input-number v-model="formData.gychbbhdz_glxgl2ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅱ段1时限:" prop="gychbbhdz_glxgl2d1sx">
          <el-input-number v-model="formData.gychbbhdz_glxgl2d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过流Ⅱ段2时限:" prop="gychbbhdz_glxgl2d2sx">
          <el-input-number v-model="formData.gychbbhdz_glxgl2d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高间隙过流定值:" prop="gychbbhdz_gjxgldz">
          <el-input-number v-model="formData.gychbbhdz_gjxgldz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高间隙过流1时限:" prop="gychbbhdz_gjxgl1sx">
          <el-input-number v-model="formData.gychbbhdz_gjxgl1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高间隙过流2时限:" prop="gychbbhdz_gjxgl2sx">
          <el-input-number v-model="formData.gychbbhdz_gjxgl2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过压定值:" prop="gychbbhdz_glxgydz">
          <el-input-number v-model="formData.gychbbhdz_glxgydz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过压1时限:" prop="gychbbhdz_glxgy1sx">
          <el-input-number v-model="formData.gychbbhdz_glxgy1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高零序过压2时限:" prop="gychbbhdz_glxgy2sx">
          <el-input-number v-model="formData.gychbbhdz_glxgy2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护定值_高过负荷定值:" prop="gychbbhdz_ggfhdz">
          <el-input-number v-model="formData.gychbbhdz_ggfhdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段:" prop="gychbbhkzzdz_gfygl1d">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1d" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段:" prop="gychbbhkzzdz_gfygl2d">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2d" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段带方向:" prop="gychbbhkzzdz_gfygl1ddfx">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段指向母线:" prop="gychbbhkzzdz_gfygl1dzxmx">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅰ段经复压闭锁:" prop="gychbbhkzzdz_gfygl1djfybs">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段带方向:" prop="gychbbhkzzdz_gfygl2ddfx">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段指向母线:" prop="gychbbhkzzdz_gfygl2dzxmx">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高复压过流Ⅱ段经复压闭锁:" prop="gychbbhkzzdz_gfygl2djfybs">
          <el-input v-model.number="formData.gychbbhkzzdz_gfygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高经其它侧复压闭锁:" prop="gychbbhkzzdz_gjqtcfybs">
          <el-input v-model.number="formData.gychbbhkzzdz_gjqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段1时限:" prop="gychbbhkzzdz_glxgl1d1sx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段2时限:" prop="gychbbhkzzdz_glxgl1d2sx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段1时限:" prop="gychbbhkzzdz_glxgl2d1sx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段2时限:" prop="gychbbhkzzdz_glxgl2d2sx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段带方向:" prop="gychbbhkzzdz_glxgl1ddfx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段指向母线:" prop="gychbbhkzzdz_glxgl1dzxmx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅰ段采用自产零流:" prop="gychbbhkzzdz_glxgy1dcyzcll">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgy1dcyzcll" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段带方向:" prop="gychbbhkzzdz_glxgl2ddfx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段指向母线:" prop="gychbbhkzzdz_glxgl2dzxmx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过流Ⅱ段采用自产零流:" prop="gychbbhkzzdz_glxgl2dcyzcll">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgl2dcyzcll" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高间隙过流1时限:" prop="gychbbhkzzdz_gjxgl1sx">
          <el-input v-model.number="formData.gychbbhkzzdz_gjxgl1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高间隙过流2时限:" prop="gychbbhkzzdz_gjxgl2sx">
          <el-input v-model.number="formData.gychbbhkzzdz_gjxgl2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过压1时限:" prop="gychbbhkzzdz_glxgy1sx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgy1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高零序过压2时限:" prop="gychbbhkzzdz_glxgy2sx">
          <el-input v-model.number="formData.gychbbhkzzdz_glxgy2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="高压侧后备保护控制字定值_高压侧失灵经主变跳闸:" prop="gychbbhkzzdz_gycsljzbtz">
          <el-input v-model.number="formData.gychbbhkzzdz_gycsljzbtz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中低电压闭锁定值:" prop="zychbbhdz_zddybsdz">
          <el-input-number v-model="formData.zychbbhdz_zddybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中负序电压闭锁定值:" prop="zychbbhdz_zfxdybsdz">
          <el-input-number v-model="formData.zychbbhdz_zfxdybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段定值:" prop="zychbbhdz_zfygl1ddz">
          <el-input-number v-model="formData.zychbbhdz_zfygl1ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段1时限:" prop="zychbbhdz_zfygl1d1sx">
          <el-input-number v-model="formData.zychbbhdz_zfygl1d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段2时限:" prop="zychbbhdz_zfygl1d2sx">
          <el-input-number v-model="formData.zychbbhdz_zfygl1d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅰ段3时限:" prop="zychbbhdz_zfygl1d3sx">
          <el-input-number v-model="formData.zychbbhdz_zfygl1d3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段定值:" prop="zychbbhdz_zfygl2ddz">
          <el-input-number v-model="formData.zychbbhdz_zfygl2ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段1时限:" prop="zychbbhdz_zfygl2d1sx">
          <el-input-number v-model="formData.zychbbhdz_zfygl2d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段2时限:" prop="zychbbhdz_zfygl2d2sx">
          <el-input-number v-model="formData.zychbbhdz_zfygl2d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中复压过流Ⅱ段3时限:" prop="zychbbhdz_zfygl2d3sx">
          <el-input-number v-model="formData.zychbbhdz_zfygl2d3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中零序过压告警定值:" prop="zychbbhdz_zlxgygjdz">
          <el-input-number v-model="formData.zychbbhdz_zlxgygjdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中零序过压告警时间:" prop="zychbbhdz_zlxgygjsj">
          <el-input-number v-model="formData.zychbbhdz_zlxgygjsj" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护定值_中过负荷定值:" prop="zychbbhdz_zgfhdz">
          <el-input-number v-model="formData.zychbbhdz_zgfhdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段1时限:" prop="zychbbhkzzdz_zfygl1d1sx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段2时限:" prop="zychbbhkzzdz_zfygl1d2sx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段3时限:" prop="zychbbhkzzdz_zfygl1d3sx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段1时限:" prop="zychbbhkzzdz_zfygl2d1sx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段2时限:" prop="zychbbhkzzdz_zfygl2d2sx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段3时限:" prop="zychbbhkzzdz_zfygl2d3sx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段带方向:" prop="zychbbhkzzdz_zfygl1ddfx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段指向母线:" prop="zychbbhkzzdz_zfygl1dzxmx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅰ段经复压闭锁:" prop="zychbbhkzzdz_zfygl1djfybs">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段带方向:" prop="zychbbhkzzdz_zfygl2ddfx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段指向母线:" prop="zychbbhkzzdz_zfygl2dzxmx">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中复压过流Ⅱ段经复压闭锁:" prop="zychbbhkzzdz_zfygl2djfybs">
          <el-input v-model.number="formData.zychbbhkzzdz_zfygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中经其它侧复压闭锁:" prop="zychbbhkzzdz_zjqtcfybs">
          <el-input v-model.number="formData.zychbbhkzzdz_zjqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="中压侧后备保护控制字定值_中零序过压告警:" prop="zychbbhkzzdz_zlxgygj">
          <el-input v-model.number="formData.zychbbhkzzdz_zlxgygj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1低电压闭锁定值:" prop="dy1fzhbbhdz_d1ddybsdz">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1ddybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1负序电压闭锁定值:" prop="dy1fzhbbhdz_d1fxdybsdz">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fxdybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段定值:" prop="dy1fzhbbhdz_d1fygl1ddz">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段1时限:" prop="dy1fzhbbhdz_d1fygl1d1sx">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段2时限:" prop="dy1fzhbbhdz_d1fygl1d2sx">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅰ段3时限:" prop="dy1fzhbbhdz_d1fygl1d3sx">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl1d3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段定值:" prop="dy1fzhbbhdz_d1fygl2ddz">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段1时限:" prop="dy1fzhbbhdz_d1fygl2d1sx">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段2时限:" prop="dy1fzhbbhdz_d1fygl2d2sx">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1复压过流Ⅱ段3时限:" prop="dy1fzhbbhdz_d1fygl2d3sx">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1fygl2d3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1零序过压告警定值:" prop="dy1fzhbbhdz_d1lxgygjdz">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1lxgygjdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低1零序过压告警时间:" prop="dy1fzhbbhdz_d1lxgygjsj">
          <el-input-number v-model="formData.dy1fzhbbhdz_d1lxgygjsj" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护定值_低过负荷定值:" prop="dy1fzhbbhdz_dgfhdz">
          <el-input-number v-model="formData.dy1fzhbbhdz_dgfhdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段1时限:" prop="dy1fqhbbhkzzdz_d1fygl1d1sx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段2时限:" prop="dy1fqhbbhkzzdz_d1fygl1d2sx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段3时限:" prop="dy1fqhbbhkzzdz_d1fygl1d3sx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段1时限:" prop="dy1fqhbbhkzzdz_d1fygl2d1sx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段2时限:" prop="dy1fqhbbhkzzdz_d1fygl2d2sx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段3时限:" prop="dy1fqhbbhkzzdz_d1fygl2d3sx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段带方向:" prop="dy1fqhbbhkzzdz_d1fygl1ddfx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段指向母线:" prop="dy1fqhbbhkzzdz_d1fygl1dzxmx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅰ段经复压闭锁:" prop="dy1fqhbbhkzzdz_d1fygl1djfybs">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段带方向:" prop="dy1fqhbbhkzzdz_d1fygl2ddfx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段指向母线:" prop="dy1fqhbbhkzzdz_d1fygl2dzxmx">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1复压过流Ⅱ段经复压闭锁:" prop="dy1fqhbbhkzzdz_d1fygl2djfybs">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1fygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1经其它侧复压闭锁:" prop="dy1fqhbbhkzzdz_d1jqtcfybs">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1jqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压1分支后备保护控制字定值_低1零序过压告警:" prop="dy1fqhbbhkzzdz_d1lxgygj">
          <el-input v-model.number="formData.dy1fqhbbhkzzdz_d1lxgygj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2低电压闭锁定值:" prop="dy2fzhbbhdz_d2ddybsdz">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2ddybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2负序电压闭锁定值:" prop="dy2fzhbbhdz_d2fxdybsdz">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fxdybsdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段定值:" prop="dy2fzhbbhdz_d2fygl1ddz">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段1时限:" prop="dy2fzhbbhdz_d2fygl1d1sx">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段2时限:" prop="dy2fzhbbhdz_d2fygl1d2sx">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅰ段3时限:" prop="dy2fzhbbhdz_d2fygl1d3sx">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl1d3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段定值:" prop="dy2fzhbbhdz_d2fygl2ddz">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2ddz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段1时限:" prop="dy2fzhbbhdz_d2fygl2d1sx">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2d1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段2时限:" prop="dy2fzhbbhdz_d2fygl2d2sx">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2d2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2复压过流Ⅱ段3时限:" prop="dy2fzhbbhdz_d2fygl2d3sx">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2fygl2d3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2零序过压告警定值:" prop="dy2fzhbbhdz_d2lxgygjdz">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2lxgygjdz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护定值_低2零序过压告警时间:" prop="dy2fzhbbhdz_d2lxgygjsj">
          <el-input-number v-model="formData.dy2fzhbbhdz_d2lxgygjsj" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段1时限:" prop="dy2fzhbbhkzzdz_d2fygl1d1sx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段2时限:" prop="dy2fzhbbhkzzdz_d2fygl1d2sx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段3时限:" prop="dy2fzhbbhkzzdz_d2fygl1d3sx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段1时限:" prop="dy2fzhbbhkzzdz_d2fygl2d1sx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2d1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段2时限:" prop="dy2fzhbbhkzzdz_d2fygl2d2sx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2d2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段3时限:" prop="dy2fzhbbhkzzdz_d2fygl2d3sx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2d3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段带方向:" prop="dy2fzhbbhkzzdz_d2fygl1ddfx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段指向母线:" prop="dy2fzhbbhkzzdz_d2fygl1dzxmx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅰ段经复压闭锁:" prop="dy2fzhbbhkzzdz_d2fygl1djfybs">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl1djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段带方向:" prop="dy2fzhbbhkzzdz_d2fygl2ddfx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2ddfx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段指向母线:" prop="dy2fzhbbhkzzdz_d2fugl2dzxmx">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fugl2dzxmx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2复压过流Ⅱ段经复压闭锁:" prop="dy2fzhbbhkzzdz_d2fygl2djfybs">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2fygl2djfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2经其它侧复压闭锁:" prop="dy2fzhbbhkzzdz_d2jqtcfybs">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2jqtcfybs" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压2分支后备保护控制字定值_低2零序过压告警:" prop="dy2fzhbbhkzzdz_d2lxgygj">
          <el-input v-model.number="formData.dy2fzhbbhkzzdz_d2lxgygj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流定值:" prop="dyczxdlxglbhdz_dlxgldz">
          <el-input v-model="formData.dyczxdlxglbhdz_dlxgldz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流1时限:" prop="dyczxdlxglbhdz_dlxgl1sx">
          <el-input-number v-model="formData.dyczxdlxglbhdz_dlxgl1sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流2时限:" prop="dyczxdlxglbhdz_dlxgl2sx">
          <el-input-number v-model="formData.dyczxdlxglbhdz_dlxgl2sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护定值_低零序过流3时限:" prop="dyczxdlxglbhdz_dlxgl3sx">
          <el-input-number v-model="formData.dyczxdlxglbhdz_dlxgl3sx" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护控制字定值_低零序过流1时限:" prop="dyczxdlxglbhkzzdz_dlxgl1sx">
          <el-input v-model.number="formData.dyczxdlxglbhkzzdz_dlxgl1sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护控制字定值_低零序过流2时限:" prop="dyczxdlxglbhkzzdz_dlxgl2sx">
          <el-input v-model.number="formData.dyczxdlxglbhkzzdz_dlxgl2sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="低压侧中性点零序过流保护控制字定值_低零序过流3时限:" prop="dyczxdlxglbhkzzdz_dlxgl3sx">
          <el-input v-model.number="formData.dyczxdlxglbhkzzdz_dlxgl3sx" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义定值_启动风冷电流定值:" prop="zdydz_qdfldldz">
          <el-input v-model="formData.zdydz_qdfldldz" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义定值_闭锁调压电流定值:" prop="zdydz_bstydldz">
          <el-input-number v-model="formData.zdydz_bstydldz" :precision="2" :clearable="true"></el-input-number>
        </el-form-item>
        <el-form-item label="自定义控制字定值_纵差工频变化量差动保护:" prop="zdykzzdz_zcgpbhlcdbh">
          <el-input v-model.number="formData.zdykzzdz_zcgpbhlcdbh" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义控制字定值_启动风冷:" prop="zdykzzdz_qdfl">
          <el-input v-model="formData.zdykzzdz_qdfl" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="自定义控制字定值_闭锁调压:" prop="zdykzzdz_bstj">
          <el-input v-model.number="formData.zdykzzdz_bstj" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="save">保存</el-button>
          <el-button size="mini" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
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
  updateLD_1,
  findLD_1
} from '@/api/sysLD1'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
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

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findLD_1({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.reLD_type_1
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
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
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
