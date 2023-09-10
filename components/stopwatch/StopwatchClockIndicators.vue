<template>
  <div
    class="absolute bg-light top-0 right-0 w-full h-full rounded-full rotate-90 -z-20"
  >
    <span
      v-for="i in 24"
      :key="i"
      :class="[`rotate-[${i * 15}deg]`]"
      class="absolute content-[''] bottom-[50%] top-[50%] w-full h-[3px] inline-block before:absolute before:top-0 before:left-1 before:w-3 before:h-full before:rounded-xl before:bg-primary"
    ></span>
  </div>
</template>

<script>
export default {
  name: "StopwatchClockIndicators",
};
</script>
