<template>
  <div
    class="absolute bg-light top-0 right-0 w-full h-full rounded-full rotate-90 -z-20"
  >
    <span
      v-for="i in 24"
      :key="i"
      :class="[
        `rotate-[${i * 15}deg]`,
        `${i * 15 <= degree ? 'before:bg-primary' : 'before:bg-secondary'}`,
      ]"
      class="absolute content-[''] bottom-[50%] top-[50%] w-full h-[2px] inline-block before:absolute before:top-0 before:left-0 before:w-4 before:h-full before:rounded-xl"
    ></span>
  </div>
</template>

<script>
export default {
  name: "StopwatchClockIndicators",
};
</script>

<script setup>
// props
const props = defineProps({
  degree: {
    type: Number,
    required: true,
    default: 360,
  },
});
</script>
