<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";
import {mainLoadingStatus, statistics} from "./main.ts";
import Loading from './components/Loading.vue'
import LoadingStatus from "./utils/enums/LoadingStatus.ts";
import Error from "./components/Error.vue";
import router from "./router";
import {DarkMode, useDarkMode} from "./utils/darkmode.ts";

useDarkMode().loadTheme();

const title = ref();
const frontendVersion = import.meta.env.PACKAGE_VERSION;
let interval: number = -1;

const theme = computed(() => {
  const theme = useDarkMode().value
  switch (theme) {
    case 'auto':
      return '系统';
    case 'dark':
      return '深色';
    default:
      return '浅色';
  }
})

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
    } else if (color[i] > 0x55 && color[i + 3] === 1) {
      color[i] -= 0x01;
    } else if (color[i] === 0xff && color[i + 3] === 0) {
      color[i] -= 0x01;
      color[i + 3] = 1;
    } else if (color[i] === 0x55 && color[i + 3] === 1) {
      color[i] += 0x01;
      color[i + 3] = 0;
    }
  }
}

function changeTheme(event: MouseEvent) {
  let target: DarkMode
  switch (useDarkMode().value) {
    case 'auto':
      target = 'light';
      break;
    case "light":
      target = 'dark';
      break;
    case 'dark':
    default:
      target = 'auto';
      break;
  }
  useDarkMode().changeTheme(target, event)
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
      <br>
      <p>或者</p>
      <a href="https://apidoc.sync.mcsl.com.cn/" target="_blank">访问 API 文档</a>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/nodes">节点列表</router-link>
      <span>&nbsp;|&nbsp;</span>
      <a href="javascript:void(0)" @click="changeTheme">主题：{{ theme }}</a>
      <h6>MCSL-Sync-Frontend v{{ frontendVersion }}<br>MCSL-Sync-Backend&ensp;{{ statistics.version }}</h6>
      <h5>©2022 - {{ new Date().getFullYear() }} <a href="https://mcsl.com.cn/">MCSL开发组</a> | <a
          href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2025436238号-2</a></h5>
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
  @media (max-width: 768px) {
    width: 100%;
    height: calc(100% - 4rem);
    padding: 2rem;
    flex-direction: column;
  }
}

.title {
  transition: width 0.5s ease-in-out, opacity 0.2s ease-in-out;
  @media (max-width: 768px) {
    text-align: center;
  }
}

.title h1 {
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  font-weight: 500;
  margin: 0;
  color: var(--text-color-primary);
}

.title h2 {
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  font-weight: bold;
  margin: 0;
  color: #00000000;
}

.title h4 {
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  font-weight: 450;
  color: var(--text-color-regular);
  margin: 0 0 1.5rem 0;
}

.title h6 {
  font-size: 0.8rem;
  font-weight: 350;
  margin: 1rem 0;
  @media (max-width: 768px) {
    display: none;
  }
  color: var(--text-color-regular);
}

.title h5,
.title h5 a {
  font-size: 0.8rem;
  margin: 0;
  font-weight: 500;
  color: var(--text-color-primary);
}

.title p, .title span {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--text-color-regular);
  margin: 0;
}

.title p, .title br {
  @media (max-width: 768px) {
    display: none;
  }
}

.title a {
  display: inline-block;
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
  height: calc(100% - 5rem);
  max-height: 33rem;
  width: calc(100% - 30rem);
  min-width: 20rem;
  padding: 2rem;
  background: var(--bg-color-transparent);
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  transition: width 0.5s ease-in-out;
  @media (max-width: 768px) {
    min-width: 0;
    width: calc(100% - 4rem);
    height: calc(100% - 15rem);
    max-height: unset;
  }
}

[dark] .router-container {
  box-shadow: inset 0.1rem 0.1rem 0.2rem rgba(255, 255, 255, 0.05), 0.2rem 0.2rem 0.2rem rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
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
}
</style>