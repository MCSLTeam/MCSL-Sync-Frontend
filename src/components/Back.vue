<script setup lang="ts">
import router from "../router";

defineProps({
  to: {
    type: String,
    required: false,
    default: "/"
  }
});
</script>

<template>
  <button @click="router.push(to)" class="back-btn"><i class="fa fa-angle-left fa-lg"/></button>
</template>

<style scoped>
.back-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  margin: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 114rem;
  border: 1.5px solid var(--text-color-secondary);
  background: #ffffff00;
  color: var(--text-color-regular);
  transition: ease-in-out 0.3s;
  cursor: pointer;
}

.back-btn:hover {
  background: #ffffff77;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

[dark] .back-btn:hover {
  background: #31323377;
}
</style>