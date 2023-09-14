<template>
  <span
    :class="[rotateDeg]"
    class="absolute top-[50%] w-1/2 h-1 before:absolute before:right-0 before:w-24 before:h-full before:bg-blue-400 before:rounded-full"
  ></span>
</template>

<script>
export default {
  name: "AlarmClockHandMinute",
};
</script>

<script setup>
import { ref, computed } from "@nuxtjs/composition-api";

// variables
const seconds = ref(0);

// computed
const rotateDeg = computed(() => {
  const x = 60 / seconds.value;
  const y = 360 / x;
  return `rotate-[${y}deg]`;
});

// interval
// setInterval(() => {
//   seconds.value++;
// }, 1000);
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
