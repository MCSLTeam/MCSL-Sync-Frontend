import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import LoadingStatus from "./utils/enums/LoadingStatus.ts";
import axios from 'axios';

export const BASE_URL = "https://sync.mcsl.com.cn/api/";

export let mainLoadingStatus = ref(LoadingStatus.LOADING);

export let statistics: Statistics;

interface Statistics {
    "name": string,
    "author": string,
    "version": string,
    "config": {
        "url": string,
        "port": number,
        "ssl_cert_path": string,
        "ssl_key_path": string,
        "node_list": nodeList[],
    }
}

interface nodeList {
    "endpoint": string,
    "name": string,
    "type": string,
}

const app = createApp(App);
app.use(router);
app.mount('#app');

axios.get(BASE_URL + 'public/statistics').then(res => {
    statistics = res.data.data;
    mainLoadingStatus.value = LoadingStatus.SUCCESS;
}).catch(e => {
    console.error(e);
    if (e.response) {
        mainLoadingStatus.value = LoadingStatus.FAIL_CODE;
    } else {
        mainLoadingStatus.value = LoadingStatus.FAIL_CONNECT;
    }
});