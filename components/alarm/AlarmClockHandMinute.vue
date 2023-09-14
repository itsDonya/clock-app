<template>
  <span
    :class="[rotateDeg]"
    class="absolute top-[50%] w-1/2 h-1 before:absolute before:right-0 before:w-20 before:h-full before:bg-secondary before:rounded-full z-10"
  ></span>
</template>

<script>
export default {
  name: "AlarmClockHandMinute",
};
</script>

<script setup>
import { computed } from "@nuxtjs/composition-api";

// props
const props = defineProps({
  minutes: {
    type: Number,
    required: true,
    default: 0,
  },
});

// computed
const rotateDeg = computed(() => {
  // calculate rotate degree based on current minute
  const degree = 360 / (60 / props.minutes);
  return `rotate-[${degree}deg]`;
});
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
