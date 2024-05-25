<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    default: 'MCSL Sync 加载中...'
  },
  textSize: {
    type: Number,
    default: 20
  }
})
</script>

<template>
  <div class="loading-container">
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h2 :style="{ fontSize: textSize }" v-html="message"></h2>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading,
.loading>div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  margin: 30px;
  color: var(--text-color-regular);
  opacity: 0;
  animation: 0.5s ease-in-out both fadeIn;
}

.loading>div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 18px;
  height: 18px;
}

.loading>div {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 0;
  opacity: 0;
  transform: translate(100%, 100%);
  animation: ball-8bits 1s ease infinite;
}

.loading>div:nth-child(1) {
  top: -100%;
  left: 0;
  animation-delay: 0.0625s;
}

.loading>div:nth-child(2) {
  top: -100%;
  left: 33.3333333333%;
  animation-delay: 0.125s;
}

.loading>div:nth-child(3) {
  top: -66.6666666667%;
  left: 66.6666666667%;
  animation-delay: 0.1875s;
}

.loading>div:nth-child(4) {
  top: -33.3333333333%;
  left: 100%;
  animation-delay: 0.25s;
}

.loading>div:nth-child(5) {
  top: 0;
  left: 100%;
  animation-delay: 0.3125s;
}

.loading>div:nth-child(6) {
  top: 33.3333333333%;
  left: 100%;
  animation-delay: 0.375s;
}

.loading>div:nth-child(7) {
  top: 66.6666666667%;
  left: 66.6666666667%;
  animation-delay: 0.4375s;
}

.loading>div:nth-child(8) {
  top: 100%;
  left: 33.3333333333%;
  animation-delay: 0.5s;
}

.loading>div:nth-child(9) {
  top: 100%;
  left: 0;
  animation-delay: 0.5625s;
}

.loading>div:nth-child(10) {
  top: 100%;
  left: -33.3333333333%;
  animation-delay: 0.625s;
}

.loading>div:nth-child(11) {
  top: 66.6666666667%;
  left: -66.6666666667%;
  animation-delay: 0.6875s;
}

.loading>div:nth-child(12) {
  top: 33.3333333333%;
  left: -100%;
  animation-delay: 0.75s;
}

.loading>div:nth-child(13) {
  top: 0;
  left: -100%;
  animation-delay: 0.8125s;
}

.loading>div:nth-child(14) {
  top: -33.3333333333%;
  left: -100%;
  animation-delay: 0.875s;
}

.loading>div:nth-child(15) {
  top: -66.6666666667%;
  left: -66.6666666667%;
  animation-delay: 0.9375s;
}

.loading>div:nth-child(16) {
  top: -100%;
  left: -33.3333333333%;
  animation-delay: 1s;
}

@keyframes ball-8bits {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  50.1% {
    opacity: 0;
  }
}

h2 {
  opacity: 0;
  animation: 0.5s ease-in-out 0.25s both fadeIn;
  font-weight: 500;
  text-align: center;
  color: var(--text-color-regular);
}
</style>