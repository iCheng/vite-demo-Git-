<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="50" />
      <!-- 情感 -->
      <el-table-column
        prop="state"
        label="State"
        width="120"
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.state === '正向' ? '' : 'danger'"
            disable-transitions
            >{{ scope.row.state }}</el-tag
          >
        </template>
      </el-table-column>
      <!-- 来源 -->
      <el-table-column fixed prop="source" label="Source" width="110" />
      <!-- 时间 -->
      <el-table-column label="Date" width="160">
        <template #default="scope">
          <div>
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="Content" width="400" />
      <el-table-column
        prop="tag"
        label="Tag"
        width="120"
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.tag === 'Home' ? '' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small">Edit</el-button>
          <el-button size="small" type="danger">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Upload, Timer  } from '@element-plus/icons-vue';

const tableData = reactive([{
    source: 'LoveXian',
    date: '2023-11-03',
    content: '金贝猫还能上车吗？利用多家连号，公司发标疑似自融',
    tag: 'Finance',
    state: '负向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-03',
    content: '小资钱包自九月份开始，到期就逾期，不回本金，曾经承诺90天后开启逾期兑付，后又用金融办不允许兑付搪塞',
    tag: 'finance',
    state: '负向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-03',
    content: '此外，蒂姆还成功地在考普钦辛格&弗里兰德公司开展了资本市场业务，涉及企业融资和经纪业务，重点是中端市场公司',
    tag: 'finance',
    state: '正向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-03',
    content: '唐小僧是行业高规模与高返利跑路的第一家，后又陆续出现平台爆雷事件，和大量资金出逃 ',
    tag: 'finance',
    state: '正向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-04',
    content: '随着公司公布超出市场预期的季度盈利报告，其股价在盘后交易中显著上涨，投资者信心大幅提升 ',
    tag: 'finance',
    state: '正向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-04',
    content: '该银行成功地扩大了其资产负债表，减少了不良贷款比率，并宣布了一项新的股票回购计划，预示着强劲的财务健康状况',
    tag: 'finance',
    state: '正向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-04',
    content: '分析师下调了对该科技巨头的评级，从“买入”降至“持有”，原因是其最新产品销售不及预期，市场份额受到竞争对手的侵蚀',
    tag: 'finance',
    state: '负向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-04',
    content: '该投资基金由于在高风险资产上的过度投资，面临流动性危机，迫使其以折扣价急售部分资产以筹集现金',
    tag: 'finance',
    state: '负向'
  },
  {
    source: 'LoveXian',
    date: '2023-11-03',
    content: '经济数据显示，零售销售额连续第三个月增长，消费者信心指数达到五年来的最高点，为市场带来乐观情绪',
    tag: 'finance',
    state: '正向'
  }])
</script>

<style>

</style>