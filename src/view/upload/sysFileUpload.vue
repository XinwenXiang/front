<template>
  <div id="app">
    <h1 class="title">文件上传</h1>

    <el-upload
      class="upload-demo"
      action="#"
      drag
      multiple
      accept=".jpg,.jpeg,.png,.docx,.doc,.bmp,.pdf,.txt,.ppt,.pptx"
      :auto-upload="false"
      :file-list="fileList"
      :on-change="handleChange"
      :on-remove="removeChange"
    >
      <i class="el-icon-upload" />
      <div class="el-upload_text">将文件拖到此处，或<em>点击选择文件</em></div>
      <!-- <div
        class="el-upload_tip"
        slot="tip"
      >请选择您要上传的文件</div> -->
    </el-upload>
    <div slot="footer">
      <el-button
        type="primary"
        style="margin-left:700px"
        @click="confirmUpload()"
      >文件上链</el-button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  },

  methods: {

    handleChange(file, fileList) {
      this.fileList = fileList
    },

    removeChange(file, fileList) {
      this.fileList = fileList
    },

    confirmUpload() {
      const param = new FormData()

      this.fileList.forEach(
        (item) => {
          param.append('name', item.name)
          param.append('file', item.raw)
        }
      )

      // accessid get what backend return
      this.$axios({
        url: ' http://10.203.14.50:8080/testPOST', // url,need to be change
        method: 'post',
        data: param,
        processData: false, // axios do not handle data
        contentType: false // axios  do not change Content-Type header
      }).then(accessid => {
        if (accessid.data == 404) {
          alert('上链失败')
        } else {
          alert('上链成功,您的访问令牌是：' + accessid.data)
        }
      })
    }
  }
}
</script>
<style>
.title {
  size: 100pt;
  color: rgb(27, 25, 25);
  text-align: center;
}
.el-upload_tip {
  color: gray;
}

.upload-demo {
  margin-left: 570px;
}
</style>
