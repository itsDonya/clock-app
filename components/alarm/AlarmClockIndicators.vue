<template>
  <div class="absolute bg-none w-full h-full rounded-full">
    <span
      class="absolute bottom-[50%] top-[50%] w-full h-[1px] before:absolute before:left-0 before:w-4 before:h-full before:bg-primary"
    ></span>
    <span
      class="absolute bottom-[50%] top-[50%] w-full h-[1px] before:absolute before:left-0 before:w-4 before:h-full before:bg-primary rotate-90"
    ></span>
    <span
      class="absolute bottom-[50%] top-[50%] w-full h-[1px] before:absolute before:left-0 before:w-4 before:h-full before:bg-primary rotate-180"
    ></span>
    <span
      class="absolute bottom-[50%] top-[50%] w-full h-[1px] before:absolute before:left-0 before:w-4 before:h-full before:bg-primary -rotate-90"
    ></span>
  </div>
</template>

<script>
export default {
  name: "AlarmClockIndicators",
};
</script>
