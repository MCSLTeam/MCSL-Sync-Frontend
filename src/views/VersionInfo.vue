<script setup lang="ts">
import Loading from '../components/Loading.vue'
import { ref } from "vue";
import LoadingStatus from "../utils/enums/LoadingStatus.ts";
import { BASE_URL } from "../main.ts";
import Error from "../components/Error.vue";
import axios from "axios";
import router from "../router";
import Back from "../components/Back.vue";
import { getCoreIcon } from "../utils/util.ts";

const core = router.currentRoute.value.params.core;
let supportedVersion = router.currentRoute.value.params.supportedVersion;
let version = router.currentRoute.value.params.version;

const loadStatus = ref(LoadingStatus.LOADING);

let versionInfo: {
  "type": string,
  "build": {
    "sync_time": string,
    "download_url": string,
    "core_type": string,
    "mc_version": string,
    "core_version": string
  }
};

// 获取支持的版本列表
axios.get(BASE_URL + 'core/' + core + '/' + supportedVersion + '/' + version).then(res => {
  versionInfo = res.data.data;
  loadStatus.value = LoadingStatus.SUCCESS;
}).catch(e => {
  console.error(e);
  if (e.response) {
    if (e.response.data.msg === 'Error: No data were found.') {
      // 版本不存在 重定向404
      router.push('/404')
    } else {
      loadStatus.value = LoadingStatus.FAIL_CODE;
    }
  } else {
    loadStatus.value = LoadingStatus.FAIL_CONNECT;
  }
});

function download() {
  window.open(versionInfo.build.download_url, '_blank');
}
</script>

<template>
  <Back :to="'/core/' + core" />
  <Loading v-if="loadStatus === LoadingStatus.LOADING" message="加载服务端核心信息中..." />
  <div class="version-info" v-else-if="loadStatus === LoadingStatus.SUCCESS">
    <img :src="getCoreIcon(<string>core)" alt="" />
    <div>
      <h2>{{ version }}</h2>
      <h3>核心类型：{{ core }}</h3>
      <h3>支持版本：{{ supportedVersion }}</h3>
      <h3>同步时间：{{ versionInfo.build.sync_time === '1970-01-01T00:00:00Z' ? '未同步' : versionInfo.build.sync_time }}</h3>
      <button @click="download" :disabled="versionInfo.build.download_url.startsWith('errorcore')">
        {{ versionInfo.build.download_url.startsWith('errorcore') ? '无法获取下载链接' : '立即下载' }}
      </button>
    </div>
  </div>
  <Error v-else :message="'加载核心版本列表失败！<br/>' + loadStatus" />
</template>

<style scoped>
.version-info {
  margin: 0.5rem auto;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 2rem;
  background: #ffffffdd;
  backdrop-filter: blur(5px);
  width: 80%;
  height: fit-content;
  gap: 2rem;
  padding: 1rem;
  border: 1.5px solid #dddddd55;
  transition: ease-in-out 0.3s;
  cursor: pointer;
}

.version-info img {
  height: 100%;
  border-radius: 1rem;
}

.version-info h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.7rem 0;
  color: var(--text-color-primary);
}

.version-info h3 {
  font-size: 1.25rem;
  font-weight: 450;
  margin: 0.2rem 0;
  color: var(--text-color-regular);
}

.version-info button {
  margin: 1rem 0;
  width: 10rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding: 0.25rem;
  border: 1px solid #dddddd99;
  background: #ffffff00;
  color: var(--text-color-regular);
  transition: ease-in-out 0.3s;
  cursor: pointer;
}

.version-info button:hover {
  background: #ffffff77;
  border-color: var(--color-primary);
  scale: 1.01;
}

.version-info button:active {
  background: #ffffffaa;
  scale: 0.9;
  transition-duration: 0.1s;
}

.version-info button:disabled {
  background: #cccccc77;
  border: 1px solid #aaaaaa99;
  scale: 1;
  cursor: not-allowed;
}
</style>