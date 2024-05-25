<script setup lang="ts">
import Loading from '../components/Loading.vue'
import { ref } from "vue";
import LoadingStatus from "../utils/enums/LoadingStatus.ts";
import { BASE_URL } from "../main.ts";
import Error from "../components/Error.vue";
import axios from "axios";
import { getCoreIcon, getCoreType } from "../utils/util.ts";
import router from "../router";

const loadStatus = ref(LoadingStatus.LOADING);
let coreList: string[];
axios.get(BASE_URL + 'core').then(res => {
  coreList = res.data.data.sort();
  loadStatus.value = LoadingStatus.SUCCESS;
}).catch(e => {
  console.error(e);
  if (e.response) {
    loadStatus.value = LoadingStatus.FAIL_CODE;
  } else {
    loadStatus.value = LoadingStatus.FAIL_CONNECT;
  }
});
</script>

<template>
  <Loading v-if="loadStatus === LoadingStatus.LOADING" message="加载服务端核心中..." />
  <div class="cores" v-else-if="loadStatus === LoadingStatus.SUCCESS">
    <div class="core" v-for="core in coreList" @click="router.push('/core/' + core)">
      <img :src="getCoreIcon(core)" alt="">
      <div>
        <h3>{{ core }}</h3>
        <h4>{{ getCoreType(core) }}</h4>
      </div>
    </div>
  </div>
  <Error v-else :message="'加载核心列表失败！<br/>' + loadStatus" />
</template>

<style scoped>
.cores {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
}

.core {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #ffffffdd;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 4rem;
  max-width: 14rem;
  margin: 0.5rem;
  gap: 1rem;
  padding: 0.5rem;
  border: 1.5px solid #dddddd55;
  transition: ease-in-out 0.3s;
  cursor: pointer;
}

.core:hover {
  border: 1.5px solid #dddddddd;
}

.core div {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 9rem;
}

.core h3 {
  margin: 0;
  font-size: 1.25rem;
  width: 9rem;
  word-break: break-all;
  font-weight: 500;
  color: var(--text-color-primary);
}

.text-small {
  font-size: 1rem;
}

.core h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color-secondary);
}

.core img {
  width: 4rem;
  border-radius: 0.5rem;
}
</style>