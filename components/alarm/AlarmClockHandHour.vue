<template>
  <span
    :class="[rotateDeg]"
    class="absolute top-[50%] w-1/2 h-1 before:absolute before:right-0 before:w-16 before:h-full before:bg-secondary before:rounded-full z-10"
  ></span>
</template>

<script>
export default {
  name: "AlarmClockHandHour",
};
</script>

<script setup>
import { computed } from "@nuxtjs/composition-api";

// props
const props = defineProps({
  hours: {
    type: Number,
    required: true,
    default: 0,
  },
});

// computed
const rotateDeg = computed(() => {
  // calculate rotate degree based on current hour
  let degree;
  if (props.hours < 13) {
    degree = 360 / (12 / props.hours);
  } else {
    degree = 360 / (12 / (props.hours - 12));
  }
  return `rotate-[${degree}deg]`;
});
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
