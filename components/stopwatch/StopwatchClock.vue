<template>
  <div
    class="timer-container relative w-56 h-56 p-1 bg-light rounded-full custom-shadow-1 z-[1] flex items-center justify-center"
  >
    <!-- clock indicators -->
    <stopwatch-clock-indicators></stopwatch-clock-indicators>

    <!-- clock -->
    <div
      class="w-[90%] h-[90%] rounded-full flex items-center justify-center z-40"
    >
      <p class="text-3xl text-center font-bold text-primary">01:00:00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StopwatchClock",
};
</script>
