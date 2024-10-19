<script setup lang="ts">
import Back from "../components/Back.vue";
import { formatNodeClientType } from "../utils/util.ts";
import { statistics } from "../main.ts";
</script>

<template>
  <Back />
  <div class="node-container">
    <div class="nodes">
      <div class="node" v-for="node in statistics.config.node_list" :key="node.name">
        <h3>{{ node.name }}</h3>
        <p>地址：<span>{{ node.endpoint }}<span v-if="formatNodeClientType(node.type) === 'AList'">{{ node.alist_subpath.startsWith('/') ? node.alist_subpath.slice(1) : node.alist_subpath }}</span></span></p>
        <p>类型：<span>{{ formatNodeClientType(node.type) }}</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nodes {
  width: calc(100% - 2rem);
  height: calc(100% - 5rem);
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
}

.node {
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-radius: 1rem;
  background: var(--bg-color-transparent);
  backdrop-filter: blur(5px);
  width: calc(100% - 2rem - 3px);
  height: fit-content;
  gap: 1rem;
  padding: 1rem;
  border: 1.5px solid var(--text-color-secondary);
  transition: ease-in-out 0.3s;
}

.node h3 {
  font-size: 1.25rem;
  font-weight: 550;
  color: var(--text-color-primary);
  margin: 0;
  width: 100%;
}

.node p {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color-regular);
  margin: 0;
  width: 100%;
}

.node span {
  font-weight: 450;
}

.node-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: start;
}
</style>