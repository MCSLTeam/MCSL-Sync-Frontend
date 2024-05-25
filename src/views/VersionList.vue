<script setup lang="ts">
import Loading from '../components/Loading.vue'
import { Ref, ref } from "vue";
import LoadingStatus from "../utils/enums/LoadingStatus.ts";
import { BASE_URL } from "../main.ts";
import Error from "../components/Error.vue";
import axios from "axios";
import router from "../router";
import Back from "../components/Back.vue";
import { getCoreIcon } from "../utils/util.ts";

const core = router.currentRoute.value.params.core;
let version: Ref<String | undefined> = ref(undefined);

const loadStatus = ref(LoadingStatus.LOADING);

let supportedVersions = ref([]);
const versionList = ref([]);

// 获取支持的版本列表
axios.get(BASE_URL + 'core/' + core).then(res => {
  supportedVersions.value = res.data.data.versions;
  if (supportedVersions.value.length !== 0) {
    if (version.value === undefined) {
      // 路径里没有版本就重定向到一个版本
      version.value = supportedVersions.value[0];
    }
    getVersions();
  } else {
    // 返回空数据
    loadStatus.value = LoadingStatus.FAIL_EMPTY
  }
}).catch(e => {
  console.error(e);
  if (e.response) {
    if (e.response.data.msg === 'Error: No data were found.') {
      // 核心不存在 重定向404
      router.push('/404')
    } else {
      loadStatus.value = LoadingStatus.FAIL_CODE;
    }
  } else {
    loadStatus.value = LoadingStatus.FAIL_CONNECT;
  }
});

function getVersions() {
  loadStatus.value = LoadingStatus.LOADING;
  axios.get(BASE_URL + 'core/' + core + '/' + version.value).then(res => {
    versionList.value = res.data.data.builds;
    loadStatus.value = LoadingStatus.SUCCESS;
  }).catch(e => {
    console.error(e);
    if (e.response) {
      loadStatus.value = LoadingStatus.FAIL_CODE;
    } else {
      loadStatus.value = LoadingStatus.FAIL_CONNECT;
    }
  });
}

function changeVersion(e: Event) {
  version.value = (<HTMLSelectElement>e.target).value;
  getVersions();
}

</script>

<template>
  <Back />
  <Loading v-if="loadStatus === LoadingStatus.LOADING" message="加载服务端核心版本列表中..." />
  <div class="version-container" v-else-if="loadStatus === LoadingStatus.SUCCESS">
    <select :value="version" @change="changeVersion">
      <option v-for="version in supportedVersions" :value="version"> {{ version }}</option>
    </select>
    <div class="versions">
      <div class="version" v-for="ver in versionList" @click="router.push('/core/' + core + '/' + version + '/' + ver)">
        <img :src="getCoreIcon(<string>core)" alt="" />
        <div>
          <h2>{{ ver }}</h2>
          <h3>支持版本：{{ version }}</h3>
        </div>
      </div>
    </div>
  </div>
  <Error v-else :message="'加载核心版本列表失败！<br/>' + loadStatus" />
</template>

<style scoped>
.versions {
  width: 100%;
  height: calc(100% - 5rem);
  padding: 1rem;
  overflow: auto;
}

.version {
  margin: 0.5rem auto;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 1.5rem;
  background: #ffffffdd;
  backdrop-filter: blur(5px);
  width: calc(100% - 2rem);
  height: 4rem;
  gap: 1rem;
  padding: 1rem;
  border: 1.5px solid #dddddd55;
  transition: ease-in-out 0.3s;
  cursor: pointer;
}

.version:hover {
  border: 1.5px solid #dddddddd;
}

.version img {
  height: 100%;
  border-radius: 0.5rem;
}

.version-inner div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  justify-content: center;
}

.version h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-color-primary);
  margin: 0;
}

.version h3 {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color-secondary);
  margin: 0;
}

.version-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: start;
}

.version-container select {
  width: 10rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding: 0.25rem;
  margin-left: 3rem;
  border: 1px solid #dddddd99;
  background: #ffffff00;
  color: var(--text-color-regular);
  transition: ease-in-out 0.3s;
}

.version-container select:hover {
  background: #ffffff77;
  border-color: var(--color-primary);
}
</style>