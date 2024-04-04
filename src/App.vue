<template>
  <n-split direction="horizontal" default-size=0.17>
    <template #1>
      <Menu />
    </template>
    <template #2>
      <n-split direction="vertical" min=0.92 max=0.92 default-size=0.92>
        <template #1>
          <router-view />
        </template>
        <template #2>
          <Footer />
        </template>
      </n-split>
    </template>
  </n-split>
</template>

<script setup>
import { NSplit } from "naive-ui";
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
</script>
