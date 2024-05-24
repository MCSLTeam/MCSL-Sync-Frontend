<script setup lang="ts">
import Loading from '../components/Loading.vue'
import {ref} from "vue";
import LoadingStatus from "../utils/enums/LoadingStatus.ts";
import {BASE_URL} from "../main.ts";
import Error from "../components/Error.vue";
import axios from "axios";
import router from "../router";

const core = router.currentRoute.value.params.core;
const version = router.currentRoute.value.params.version;

const loadStatus = ref(LoadingStatus.LOADING);

let mcVersions;
let versionList;
axios.get(BASE_URL + 'core/' + core).then(res => {
  mcVersions = res.data.data.versions.sort(compareMcVersions);
  if (mcVersions.length !== 0) {
    if (version === undefined) {
      router.push(BASE_URL + 'core/' + core + '/' + mcVersions[0]);
    } else if (!mcVersions.includes(version)) {
      router.push('/404');
    } else {
      axios.get(BASE_URL + 'core/' + core + '/' + version).then(res => {
        mcVersions = res.data.data.builds;
        if (mcVersions.length !== 0) {
          if (version === undefined) {
            router.push(BASE_URL + 'core/' + core + '/' + mcVersions[0]);
          } else if (!mcVersions.includes(version)) {
            router.push('/404');
          } else {

          }
        } else {
          loadStatus.value = LoadingStatus.FAIL_EMPTY
        }
      }).catch(e => {
        console.error(e);
        if (e.response) {
          if (e.response.data.msg === 'Error: No data were found.') {
            router.push('/404')
          } else {
            loadStatus.value = LoadingStatus.FAIL_CODE;
          }
        } else {
          loadStatus.value = LoadingStatus.FAIL_CONNECT;
        }
      });
    }
  } else {
    loadStatus.value = LoadingStatus.FAIL_EMPTY
  }
}).catch(e => {
  console.error(e);
  if (e.response) {
    if (e.response.data.msg === 'Error: No data were found.') {
      router.push('/404')
    } else {
      loadStatus.value = LoadingStatus.FAIL_CODE;
    }
  } else {
    loadStatus.value = LoadingStatus.FAIL_CONNECT;
  }
});

function compareMcVersions(a: string, b: string) {
  const versionA = a.split('.');
  const versionB = b.split('.');
  for (let i = 0; i < 3; i++) {
    const numA = parseInt(versionA[i]);
    const numB = parseInt(versionB[i]);
    if (numA < numB) {
      return 1;
    }
    if (numA > numB) {
      return -1;
    }
  }
  return 0;
}
</script>

<template>
  <Loading v-if="loadStatus === LoadingStatus.LOADING" message="加载服务端核心版本列表中..."/>
  <div class="versions" v-else-if="loadStatus === LoadingStatus.SUCCESS">

  </div>
  <Error v-else
         :message="'加载核心版本列表失败！<br/>' + loadStatus"/>
</template>

<style scoped>
.versions {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  align-items: center;
}

.version {
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
</style>