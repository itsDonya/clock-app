<template>
  <div
    class="relative w-56 h-56 bg-light flex flex-col items-center justify-center rounded-full custom-shadow-1"
  >
    <!-- alarm indicators -->
    <alarm-clock-indicators></alarm-clock-indicators>

    <!-- inner circle -->
    <div class="w-32 h-32 bg-light rounded-full custom-shadow-3"></div>
  </div>
</template>

<script>
export default {
  name: "AlarmClock",
};
</script>
