<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
      >
        <n-flex>
          <img
              src="https://img.fastmirror.net/s/2023/12/03/656c4416b04b8.png"
              alt="MCSL Logo"
              style="max-width:100px; width: 100%; height: auto; margin: 0 auto"
          >
        </n-flex>
        <n-menu
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import {h, ref} from "vue";
import { NIcon, NMenu, NSpace, NLayout, NLayoutSider, NFlex } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  LogOutOutline as HomeIcon
} from "@vicons/ionicons5";

let activeKey = ref(null)
let collapsed = ref(true)

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