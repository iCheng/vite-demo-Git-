<template>
  <!-- echarts -->
  <div class="conatiner">
    <div class="box1">
      <!-- 柱状图 -->
      <div id="echarts-col" class="echarts-col"
           style="width: 1000px;height:400px;"></div>
      <div id="echarts-circle1"
           style="width: 400px;height:400px;"></div>
      <div id="echarts-circle2" class="echarts-circle2"
           style="width: 400px;height:400px;"></div>
      <div id="echarts-circle3" class="echarts-circle3"
           style="width: 400px;height:400px;"></div>
    </div>
    <!-- 折线图 -->
    <div id="echarts-line" class="echarts-line"
         style="width: 100%;height:400px;"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  // 柱状图
  const myChartCol = echarts.init(document.getElementById("echarts-col"));
  myChartCol.setOption({
    title: {
      text: "情感概览分布",
    },
    tooltip: {},
    xAxis: {
      data: ["正向", "负向", "中向"],
    },
    yAxis: {},
    series: [
      {
        name: "haha",
        type: "bar",
        data: [1017, 1757, 1667],
      },
    ],
  });

  // 折线图
  const myChartLine = echarts.init(document.getElementById("echarts-line"));
  myChartLine.setOption({
    title: {
      text: "情感倾向走势",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["正向", "负向", "中向"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "正向",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "负向",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "中向",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  });

  // 扇形图1
  const myChartCircle1 = echarts.init(
    document.getElementById("echarts-circle1")
  );
  myChartCircle1.setOption({
    backgroundColor: "#2c343c",
    title: {
      text: "数据来源",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "财经" },
          { value: 310, name: "证券交易" },
          { value: 274, name: "保险" },
          { value: 235, name: "信托" },
          { value: 400, name: "上市公司新闻" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function () {
          return Math.random() * 200;
        },
      },
    ],
  });

  // 扇形图2
  const myChartCircle2 = echarts.init(
    document.getElementById("echarts-circle2")
  );
  myChartCircle2.setOption({
    // backgroundColor: "#2c343c",
    title: {
      textStyle: {
        color: "blue",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1017, name: "正向" },
          { value: 1757, name: "负向" },
          { value: 1667, name: "中向" },
        ],
      },
    ],
  });
  // 扇形图2
  const myChartCircle3 = echarts.init(
    document.getElementById("echarts-circle3")
  );
  myChartCircle3.setOption({

    title: {
      textStyle: {
        color: "blue",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 4441, name: "已完成" },
          { value: 509, name: "待处理" }
        ],
      },
    ],
  });
});
</script>

<style>
.conatiner{
  margin-top: 20px;
}

.echarts-col{
  border: 1px dashed #dcdfe6;
}

.box1 {
  display: flex;
}

.echarts-circle2{
  border: 1px dashed #dcdfe6;
}
.echarts-circle3{
  border: 1px dashed #dcdfe6;
}

.echarts-line{
  margin-top: 15px;
}
</style>