<template>
  <n-flex>
    <img
        src="https://img.fastmirror.net/s/2023/12/03/656c4416b04b8.png"
        alt="MCSL Logo"
        style="max-width:100px; width: 100%; height: auto; margin: 0 auto"
    >
  </n-flex>
  <n-menu
      :options="menuOptions"
  />
</template>

<script setup>
import {h} from "vue";
import { NIcon, NMenu, NFlex } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  LogOutOutline as HomeIcon
} from "@vicons/ionicons5";


function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "Home",
          }
        },
        {default: () => "回家"}
    ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon)
  }
];
</script>
