<template>
  <div
    class="w-56 h-56 p-2 bg-gradient-to-tl from-primary to-secondary rounded-full custom-shadow-1"
  >
    <div
      class="inside-clock w-full h-full bg-light rounded-full flex items-center justify-center"
    >
      <p class="text-4xl text-center font-bold text-primary">00:30</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerClock",
};
</script>

<style scoped>
.inside-clock {
  box-shadow: 0px 0px 6px #ffffff;
}
</style>
