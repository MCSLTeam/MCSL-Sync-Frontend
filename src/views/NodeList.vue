<script setup lang="ts">
import Back from "../components/Back.vue";
import {statistics} from "../main.ts";
</script>

<template>
  <Back/>
  <div class="node-container">
    <div class="nodes">
      <div class="node" v-for="node in statistics.config.node_list">
        <h2>{{ node }}</h2>
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
}

.node {
  margin: 0.5rem auto;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 1rem;
  background: #ffffffdd;
  backdrop-filter: blur(5px);
  width: calc(100% - 2rem - 3px);
  height: 2rem;
  gap: 1rem;
  padding: 1rem;
  border: 1.5px solid #dddddd55;
  transition: ease-in-out 0.3s;
}

.node h2 {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color-primary);
  margin: 0;
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