<template>
  <div class="container">
    <div class="box">
      <h2>金融领域情感分析系统, 第二次更改</h2>
      <button>按钮</button>
      <router-link> 首页 </router-link>
      <router-link> 分析平台 </router-link>
      <router-link> 技术文档 </router-link>
      <router-link> 模型 </router-link>
    </div>
  </div>
</template>

<script>
export default {

}


function countPerfectSquares(n, matrix) {
    // 初始化前缀和数组
    let prefixSum0 = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
    let prefixSum1 = Array.from({length: n + 1}, () => Array(n + 1).fill(0));

    // 填充前缀和数组
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            prefixSum0[i][j] = prefixSum0[i - 1][j] + prefixSum0[i][j - 1] - prefixSum0[i - 1][j - 1] + (matrix[i - 1][j - 1] === '0' ? 1 : 0);
            prefixSum1[i][j] = prefixSum1[i - 1][j] + prefixSum1[i][j - 1] - prefixSum1[i - 1][j - 1] + (matrix[i - 1][j - 1] === '1' ? 1 : 0);
        }
    }

    // 用于存储每个大小的完美矩形数量的数组
    let perfectCounts = Array(n).fill(0);

    // 遍历所有可能的正方形大小
    for (let size = 1; size <= n; size++) {
        for (let i = size; i <= n; i++) {
            for (let j = size; j <= n; j++) {
                // 计算当前正方形内0和1的数量
                let count0 = prefixSum0[i][j] - prefixSum0[i - size][j] - prefixSum0[i][j - size] + prefixSum0[i - size][j - size];
                let count1 = prefixSum1[i][j] - prefixSum1[i - size][j] - prefixSum1[i][j - size] + prefixSum1[i - size][j - size];

                // 如果0和1的数量相等，则为完美矩形
                if (count0 === count1) {
                    perfectCounts[size - 1]++;
                }
            }
        }
    }

    // 返回完美矩形的数量
    return perfectCounts;
}

// 示例输入
let n = 4;
let matrix = [
    "1010",
    "0101",
    "1100",
    "0011"
];

// 调用函数并打印结果
let result = countPerfectSquares(n, matrix);
result.forEach(count => console.log(count));

</script>

<style scoped>
.container {
  background-color: 	#E6E6FA;
  display: flex;
  align-items: center;
}
.box {
  display: flex;
  align-items: center;
  color: white;
}
</style> 