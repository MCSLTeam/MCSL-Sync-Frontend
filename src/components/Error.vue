<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    default: 'MCSL Sync 加载失败...'
  },
  textSize: {
    type: Number,
    default: 20
  }
})
</script>

<template>
  <div class="banned-container">
    <div class="banned">
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
    <h2 :style="{fontSize: textSize}" v-html="message"></h2>
  </div>
</template>

<style scoped>
.banned-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banned {
  font-size: 0;
  width: 78px;
  height: 78px;
}

.banned div {
  display: inline-block;
  background-color: var(--text-color-regular);
  width: 6px;
  height: 6px;
  margin: 0;
}

.banned div:nth-child(1) {
  margin-left: 24px;
  animation: 0.25s ease-in-out both fadeInDown;
}

.banned div:nth-child(2) {
  animation: 0.25s ease-in-out 0.05s both fadeInDown;
}

.banned div:nth-child(3) {
  animation: 0.25s ease-in-out 0.1s both fadeInDown;
}

.banned div:nth-child(4) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(5) {
  margin-right: 24px;
  animation: 0.25s ease-in-out 0.2s both fadeInDown;
}

.banned div:nth-child(6) {
  margin-left: 18px;
  animation: 0.25s ease-in-out both fadeInDown;
}

.banned div:nth-child(7) {
  animation: 0.25s ease-in-out 0.05s both fadeInDown;
}

.banned div:nth-child(8) {
  animation: 0.25s ease-in-out 0.1s both fadeInDown;
}

.banned div:nth-child(9) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(10) {
  animation: 0.25s ease-in-out 0.2s both fadeInDown;
}

.banned div:nth-child(11) {
  animation: 0.25s ease-in-out 0.25s both fadeInDown;
}

.banned div:nth-child(12) {
  margin-right: 18px;
  animation: 0.25s ease-in-out 0.3s both fadeInDown;
}

.banned div:nth-child(13) {
  margin-left: 12px;
  animation: 0.25s ease-in-out both fadeInDown;
}

.banned div:nth-child(14) {
  animation: 0.25s ease-in-out 0.05s both fadeInDown;
}

.banned div:nth-child(15) {
  margin-left: 30px;
  animation: 0.25s ease-in-out 0.35s both fadeInDown;
}

.banned div:nth-child(16) {
  margin-right: 12px;
  animation: 0.25s ease-in-out 0.4s both fadeInDown;
}

.banned div:nth-child(17) {
  margin-left: 6px;
  animation: 0.25s ease-in-out both fadeInDown;
}

.banned div:nth-child(18) {
  animation: 0.25s ease-in-out 0.05s both fadeInDown;
}

.banned div:nth-child(19) {
  animation: 0.25s ease-in-out 0.1s both fadeInDown;
}

.banned div:nth-child(20) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(21) {
  margin-left: 30px;
  animation: 0.25s ease-in-out 0.45s both fadeInDown;
}

.banned div:nth-child(22) {
  margin-right: 6px;
  animation: 0.25s ease-in-out 0.5s both fadeInDown;
}

.banned div:nth-child(23) {
  animation: 0.25s ease-in-out both fadeInDown;
}

.banned div:nth-child(24) {
  margin-right: 6px;
  animation: 0.25s ease-in-out 0.05s both fadeInDown;
}

.banned div:nth-child(25) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(26) {
  animation: 0.25s ease-in-out 0.2s both fadeInDown;
}

.banned div:nth-child(27) {
  animation: 0.25s ease-in-out 0.25s both fadeInDown;
}

.banned div:nth-child(28) {
  margin-left: 30px;
  animation: 0.25s ease-in-out 0.55s both fadeInDown;
}

.banned div:nth-child(29) {
  animation: 0.25s ease-in-out 0.6s both fadeInDown;
}

.banned div:nth-child(30) {
  animation: 0.25s ease-in-out 0.05s both fadeInDown;
}

.banned div:nth-child(31) {
  margin-right: 12px;
  animation: 0.25s ease-in-out 0.1s both fadeInDown;
}

.banned div:nth-child(32) {
  animation: 0.25s ease-in-out 0.25s both fadeInDown;
}

.banned div:nth-child(33) {
  animation: 0.25s ease-in-out 0.3s both fadeInDown;
}

.banned div:nth-child(34) {
  animation: 0.25s ease-in-out 0.35s both fadeInDown;
}

.banned div:nth-child(35) {
  margin-left: 24px;
  animation: 0.25s ease-in-out 0.6s both fadeInDown;
}

.banned div:nth-child(36) {
  animation: 0.25s ease-in-out 0.65s both fadeInDown;
}

.banned div:nth-child(37) {
  animation: 0.25s ease-in-out 0.1s both fadeInDown;
}

.banned div:nth-child(38) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(39) {
  margin-left: 18px;
  animation: 0.25s ease-in-out 0.35s both fadeInDown;
}

.banned div:nth-child(40) {
  animation: 0.25s ease-in-out 0.4s both fadeInDown;
}

.banned div:nth-child(41) {
  animation: 0.25s ease-in-out 0.45s both fadeInDown;
}

.banned div:nth-child(42) {
  margin-left: 18px;
  animation: 0.25s ease-in-out 0.65s both fadeInDown;
}

.banned div:nth-child(43) {
  animation: 0.25s ease-in-out 0.7s both fadeInDown;
}

.banned div:nth-child(44) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(45) {
  animation: 0.25s ease-in-out 0.2s both fadeInDown;
}

.banned div:nth-child(46) {
  margin-left: 24px;
  animation: 0.25s ease-in-out 0.45s both fadeInDown;
}

.banned div:nth-child(47) {
  animation: 0.25s ease-in-out 0.5s both fadeInDown;
}

.banned div:nth-child(48) {
  animation: 0.25s ease-in-out 0.55s both fadeInDown;
}

.banned div:nth-child(49) {
  margin-left: 12px;
  animation: 0.25s ease-in-out 0.7s both fadeInDown;
}

.banned div:nth-child(50) {
  animation: 0.25s ease-in-out 0.75s both fadeInDown;
}

.banned div:nth-child(51) {
  animation: 0.25s ease-in-out 0.15s both fadeInDown;
}

.banned div:nth-child(52) {
  animation: 0.25s ease-in-out 0.2s both fadeInDown;
}

.banned div:nth-child(53) {
  margin-left: 30px;
  animation: 0.25s ease-in-out 0.5s both fadeInDown;
}

.banned div:nth-child(54) {
  animation: 0.25s ease-in-out 0.55s both fadeInDown;
}

.banned div:nth-child(55) {
  animation: 0.25s ease-in-out 0.6s both fadeInDown;
}

.banned div:nth-child(56) {
  margin-left: 6px;
  animation: 0.25s ease-in-out 0.7s both fadeInDown;
}

.banned div:nth-child(57) {
  animation: 0.25s ease-in-out 0.75s both fadeInDown;
}

.banned div:nth-child(58) {
  margin-left: 6px;
  animation: 0.25s ease-in-out 0.25s both fadeInDown;
}

.banned div:nth-child(59) {
  animation: 0.25s ease-in-out 0.3s both fadeInDown;
}

.banned div:nth-child(60) {
  margin-left: 30px;
  animation: 0.25s ease-in-out 0.6s both fadeInDown;
}

.banned div:nth-child(61) {
  animation: 0.25s ease-in-out 0.65s both fadeInDown;
}

.banned div:nth-child(62) {
  animation: 0.25s ease-in-out 0.7s both fadeInDown;
}

.banned div:nth-child(63) {
  margin-right: 6px;
  animation: 0.25s ease-in-out 0.75s both fadeInDown;
}

.banned div:nth-child(64) {
  margin-left: 12px;
  animation: 0.25s ease-in-out 0.4s both fadeInDown;
}

.banned div:nth-child(65) {
  animation: 0.25s ease-in-out 0.45s both fadeInDown;
}

.banned div:nth-child(66) {
  margin-left: 30px;
  animation: 0.25s ease-in-out 0.75s both fadeInDown;
}

.banned div:nth-child(67) {
  margin-right: 12px;
  animation: 0.25s ease-in-out 0.8s both fadeInDown;
}

.banned div:nth-child(68) {
  margin-left: 18px;
  animation: 0.25s ease-in-out 0.5s both fadeInDown;
}

.banned div:nth-child(69) {
  animation: 0.25s ease-in-out 0.55s both fadeInDown;
}

.banned div:nth-child(70) {
  animation: 0.25s ease-in-out 0.6s both fadeInDown;
}

.banned div:nth-child(71) {
  animation: 0.25s ease-in-out 0.65s both fadeInDown;
}

.banned div:nth-child(72) {
  animation: 0.25s ease-in-out 0.7s both fadeInDown;
}

.banned div:nth-child(73) {
  animation: 0.25s ease-in-out 0.75s both fadeInDown;
}

.banned div:nth-child(74) {
  margin-right: 18px;
  animation: 0.25s ease-in-out 0.8s both fadeInDown;
}

.banned div:nth-child(75) {
  margin-left: 24px;
  animation: 0.25s ease-in-out 0.6s both fadeInDown;
}

.banned div:nth-child(76) {
  animation: 0.25s ease-in-out 0.65s both fadeInDown;
}

.banned div:nth-child(77) {
  animation: 0.25s ease-in-out 0.7s both fadeInDown;
}

.banned div:nth-child(78) {
  animation: 0.25s ease-in-out 0.75s both fadeInDown;
}

.banned div:nth-child(79) {
  animation: 0.25s ease-in-out 0.8s both fadeInDown;
}

h2 {
  opacity: 0;
  animation: 0.5s ease-in-out 0.25s both fadeIn;
  font-weight: 500;
  text-align: center;
  color: var(--text-color-regular);
}
</style>