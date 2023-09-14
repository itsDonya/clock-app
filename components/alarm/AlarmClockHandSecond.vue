<template>
  <span
    :class="[rotateDeg]"
    class="absolute top-[50%] right-[50%] h-[2px] before:absolute before:right-0 before:w-24 before:h-full before:bg-rose-900 before:rounded-full"
  ></span>
</template>

<script>
export default {
  name: "AlarmClockHandSecond",
};
</script>

<script setup>
import { ref, computed } from "@nuxtjs/composition-api";

// variables
const seconds = ref(0);

// emit
const emit = defineEmits("minutes-up");

// computed
const rotateDeg = computed(() => {
  // calculate rotate degree based on current second
  const degree = 360 / (60 / seconds.value);
  return `rotate-[${degree}deg]`;
});

// methods
const runTimerSeconds = () => {
  setInterval(() => {
    if (seconds.value < 59) {
      seconds.value++;
    } else {
      seconds.value = 0;
      emit("minutes-up");
    }
  }, 1000);
};
runTimerSeconds();
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
