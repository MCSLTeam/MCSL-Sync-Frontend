<script lang="ts" setup>
import {onMounted, ref} from "vue";
import router from "../router";
import {randomNum} from "../utils/util.ts";
import Back from "../components/Back.vue";

const countdown = ref('?');

const quotes = [
  "Sssss... 什么声音? Sss... 啊... BOOM!",
  "你要找的页面坐着矿车逃走了...",
  "你要找的页面被人丢进了碎纸机..",
  "你要找的页面被铁傀儡一巴掌拍飞了!",
  "你或许可以为此页面造一个“刷页笼”...",
  "你要找的页面掉!漆!了!",
  "你要找的页面掉出了这个世界...",
  "你要找的页面上面坐着一只猫...",
  "你要找的页面被雨淋湿了...",
  "你要找的页面随着一声巨响消失了...",
  "你要找的页面正处于量子叠加态...",
  "你要找的页面被史莱姆一屁股坐扁了...",
  "你要找的页面被恶魂烧成灰了...",
  "从前有座山，山上有座庙，庙里有个页面，现在找不到！"
];

const quote = quotes[randomNum(0, quotes.length)];

onMounted(async () => {
  const endTime = Date.now() + 5000;
  const interval = setInterval(async () => {
    if (Date.now() < endTime) {
      try {
        countdown.value = Math.ceil((endTime - Date.now()) / 1000).toString();
      } catch (e) {
        clearInterval(interval);
      }
    } else {
      await router.push('/');
      clearInterval(interval);
    }
  }, 50);
});
</script>

<template>
  <Back/>
  <div class="pagenotfound-container">
    <h2>404 - 页面未找到</h2>
    <h3>将在 <span>{{ countdown }}</span> 秒后自动跳转到主页</h3>
    <p>{{ quote }}</p>
  </div>
</template>

<style scoped>
.pagenotfound-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pagenotfound-container h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: 550;
  color: var(--text-color-primary);
}

.pagenotfound-container h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 550;
  color: var(--text-color-regular);
}

.pagenotfound-container p {
  font-size: 1rem;
  margin: 0;
  color: var(--text-color-secondary);
}
</style>