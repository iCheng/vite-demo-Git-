import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// nutui
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入 echarts
import * as echarts from 'echarts'
const app = createApp(App)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts


createApp(App).use(NutUI).use(ElementPlus).mount('#app')
