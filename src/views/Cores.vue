<script setup lang="ts">
import Loading from '../components/Loading.vue'
import {Ref, ref} from "vue";
import LoadingStatus from "../utils/enums/LoadingStatus.ts";
import {BASE_URL} from "../main.ts";
import Error from "../components/Error.vue";
import axios from "axios";
import {getCoreIcon, getCoreType} from "../utils/util.ts";
import router from "../router";
import pinyin from "pinyin";

const loadStatus = ref(LoadingStatus.LOADING);
let composition = <boolean>false;
let coreList: { name: string, type: string, icon: string }[] = [];
let showedCoreList: Ref<{ name: string, type: string, icon: string }[]> = ref([]);
axios.get(BASE_URL + 'core').then(res => {
  const cores = res.data.data.sort();
  for (const core of cores) {
    coreList.push({
      name: core,
      type: getCoreType(core),
      icon: getCoreIcon(core)
    })
  }
  search()
  loadStatus.value = LoadingStatus.SUCCESS;
}).catch(e => {
  console.error(e);
  if (e.response) {
    loadStatus.value = LoadingStatus.FAIL_CODE;
  } else {
    loadStatus.value = LoadingStatus.FAIL_CONNECT;
  }
});

function search(text?: string) {
  if (!composition) {
    if (text && text.length > 0) {
      text = text.toLowerCase().trim()
      showedCoreList.value = coreList.filter(core =>
          core.name.toLowerCase().includes(<string>text) ||
          core.type.toLowerCase().includes(<string>text) ||
          pinyin(core.name, {style: pinyin.STYLE_NORMAL}).join('').includes(<string>text) ||
          pinyin(core.type, {style: pinyin.STYLE_NORMAL}).join('').includes(<string>text)
      );
    } else {
      showedCoreList.value = coreList;
    }
  }
}
</script>

<template>
  <Loading v-if="loadStatus === LoadingStatus.LOADING" message="加载服务端核心中..."/>
  <div class="cores-container" v-else-if="loadStatus === LoadingStatus.SUCCESS">
    <input class="search"
           type="text"
           @input="search((<HTMLInputElement | null>$event.target)?.value)"
           @compositionend="composition = false;search((<HTMLInputElement | null>$event.target)?.value)"
           @compositionstart="composition = true"
           placeholder="搜索（核心名称、核心类型）">
    <div class="cores">
      <div class="core" v-for="core in showedCoreList" @click="router.push('/core/' + core.name)">
        <img :src="core.icon" alt="">
        <div>
          <h3>{{ core.name }}</h3>
          <h4>{{ core.type }}</h4>
        </div>
      </div>
    </div>
  </div>
  <Error v-else :message="'加载核心列表失败！<br/>' + loadStatus"/>
</template>

<style scoped>
.cores-container {
  width: 100%;
  height: 100%;
}

.cores {
  display: flex;
  width: 100%;
  height: fit-content;
  max-height: calc(100% - 4rem);
  justify-content: space-evenly;
  align-items: start;
  flex-wrap: wrap;
  overflow: auto;
}

.search {
  width: calc(100% - 2rem);
  height: 2rem;
  margin: 1rem 0.5rem;
  outline: none;
  border: 1.5px solid var(--text-color-secondary);
  border-radius: 0.5rem;
  padding: 0 8px;
  transition: 0.3s ease-in-out;
  background: var(--bg-color-transparent);
}

[dark] .search {
  border-color: var(--bg-color-transparent);
}

.search:hover {
  border-color: var(--text-color-primary);
}

[dark] .search:hover {
  border-color: var(--text-color-secondary);
}

.search:focus {
  border-color: var(--color-primary) !important;
}

.core {
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background: var(--bg-color-transparent);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 4rem;
  margin: 0.5rem;
  gap: 1rem;
  padding: 0.5rem;
  border: 1.5px solid var(--bg-color-transparent);
  transition: ease-in-out 0.3s;
  cursor: pointer;

  @media (min-width: 75rem) {
    max-width: 12rem;
    justify-content: center;
  }
}

.core:hover {
  border-color: #dddddddd;
}

[dark] .core:hover {
  border-color: var(--text-color-secondary);
}

.core div {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 7rem;
}

.core h3 {
  margin: 0;
  font-size: 1.1rem;
  width: 7rem;
  word-break: break-all;
  font-weight: 500;
  color: var(--text-color-primary);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.core h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-color-secondary);
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}

.core img {
  width: 4rem;
  border-radius: 0.5rem;
}
</style>