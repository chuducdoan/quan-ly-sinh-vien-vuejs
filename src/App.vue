<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

.route-enter-from {
}

.route-enter-active {
  animation: slice-scale 0.4s ease-out;
}

.route-enter-to {
}

.route-leave-active {
  animation: slice-scale 0.4s ease-in;
}

@keyframes slice-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
