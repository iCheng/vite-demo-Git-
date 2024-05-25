<template>
  <div class="container">
    <el-button plain @click="dialogVisible = true">
      Click to open the Dialog
    </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="添加文件"
    width="500"
  >
    <h5>上传本地文件</h5>
    <div class="dialog-uploader-conatiner">
      <div class="uploader-box">
        <el-button type="primary">
          上传
          <el-icon class="el-icon--right"><Upload /></el-icon>
        </el-button>
        <span class="uploader-msg">支持批量上传，支持拖动上传</span>
      </div>
    </div>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 表格 -->
  <div class="list-container">
    <el-button @click="tableVisible = !tableVisible">展示 Table or Echarts</el-button>
    <Table v-show="tableVisible"></Table>
    <Echarts  v-show="!tableVisible"></Echarts>
  </div>
  </div>
</template>

<script setup  lang="ts">
import { ref, reactive } from 'vue';
import { Upload, Timer  } from '@element-plus/icons-vue'
import Table from './datashow/table.vue';
import Echarts from './datashow/echarts.vue';


let dialogVisible = ref(false);
let tableVisible = ref(false)




</script>

<style scoped>
/* .uploader-box{
  margin-top: 100px;
  margin-left: 100px;
  width: 400px;
  height: 400px;
  border: 1px solid #dcdfe6;
  border-radius: 2%;
} */

.dialog-uploader-conatiner{
  display: flex;
  justify-content: center;
  align-items: center;
}

.uploader-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 1px dashed #dcdfe6;
  border-radius: 2%;
  background-color: #F0F8FF;
}

.uploader-msg{
  margin-top: 7px;
  font-size: 10px;
  color: #696969;
}
</style>