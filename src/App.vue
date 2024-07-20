<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import {mainLoadingStatus, statistics} from "./main.ts";
import Loading from './components/Loading.vue'
import LoadingStatus from "./utils/enums/LoadingStatus.ts";
import Error from "./components/Error.vue";
import router from "./router";

const title = ref();
const frontendVersion = import.meta.env.PACKAGE_VERSION;
let interval: number = -1;

onMounted(() => {
  let titleColor1 = [0x19, 0xE8, 0xA2, 0, 0, 0];
  let titleColor2 = [0x41, 0x99, 0xb7, 0, 0, 0];
  interval = setInterval(() => {
    if (title.value) {
      h2ColorChange(titleColor1);
      h2ColorChange(titleColor2);
      const color1 = titleColor1[0] * 0x10000 + titleColor1[1] * 0x100 + titleColor1[2];
      const color2 = titleColor2[0] * 0x10000 + titleColor2[1] * 0x100 + titleColor2[2];
      title.value.style.background = `linear-gradient(120deg, #${color1.toString(16).padStart(6, '0')}, #${color2.toString(16).padStart(6, '0')}) text`
    }
  }, 50);
});

function h2ColorChange(color: number[]) {
  for (let i = 0; i < 3; i++) {
    if (color[i] < 0xff && color[i + 3] === 0) {
      color[i] += 0x01;
    } else if (color[i] > 0 && color[i + 3] === 1) {
      color[i] -= 0x01;
    } else if (color[i] === 0xff && color[i + 3] === 0) {
      color[i] -= 0x01;
      color[i + 3] = 1;
    } else if (color[i] === 0 && color[i + 3] === 1) {
      color[i] += 0x01;
      color[i + 3] = 0;
    }
  }
}

onUnmounted(() => {
  if (interval !== -1)
    clearInterval(interval);
})
</script>

<template>
  <Loading v-if="mainLoadingStatus === LoadingStatus.LOADING"/>
  <div class="container" :class="{ 'container-big': router.currentRoute.value.fullPath !== '/' }"
       v-else-if="mainLoadingStatus === LoadingStatus.SUCCESS">
    <div class="title">
      <h1>欢迎使用</h1>
      <h2 ref="title">MCSL-Sync</h2>
      <h4>一个MC服务器核心镜像站</h4>
      <p>请在右侧选择一个服务端以下载</p>
      <p>
        或者
        <a href="https://apidoc.sync.mcsl.com.cn/" target="_blank">访问 API 文档</a>
        |
        <router-link to="/nodes">节点列表</router-link>
      </p>
      <h6>MCSL-Sync-Frontend v{{ frontendVersion }}<br>MCSL-Sync-Backend&ensp;{{ statistics.version }}</h6>
      <h5>© 2022 - {{ new Date().getFullYear() }} <a href="https://mcsl.com.cn/">MCSL</a>开发组 保留所有权利。</h5>
    </div>
    <div class="router-container">
      <router-view/>
    </div>
  </div>
  <Error v-else :message="'无法加载 MCSL Sync！<br/>' + mainLoadingStatus"/>
</template>

<style scoped>
.container {
  width: 80%;
  height: 85%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.title {
  transition: width 0.5s ease-in-out, opacity 0.2s ease-in-out;
}

.title h1 {
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  color: var(--text-color-primary);
}

.title h2 {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  color: #00000000;
}

.title h4 {
  font-size: 1.4rem;
  font-weight: 450;
  color: var(--text-color-regular);
  margin: 0 0 1.5rem 0;
}

.title h6 {
  font-size: 0.8rem;
  font-weight: 350;
  margin: 1rem 0;
  color: var(--text-color-regular);
}

.title h5,
.title h5 a {
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  color: var(--text-color-primary);
}

.title p {
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--text-color-regular);
  margin: 0;
}

.title a {
  text-decoration: none;
  font-weight: 400;
  color: var(--text-color-primary);
  transition: 0.3s color ease-in-out;
}

.title a:hover {
  color: var(--color-primary);
}

.router-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32.5rem;
  width: calc(100% - 30rem);
  min-width: 20rem;
  padding: 2rem;
  background: #ffffff55;
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  transition: width 0.5s ease-in-out;
}

.container-big .title {
  width: 0;
  opacity: 0;
}

.container-big .title * {
  text-wrap: nowrap;
}

.container-big .router-container {
  width: 100%;
}
</style>