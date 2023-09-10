<template>
  <div class="w-full flex flex-col-reverse items-center justify-start gap-4">
    <stopwatch-lap-item v-for="(lap, i) in laps" :key="i" :index="i + 1">
      {{ lap }}
    </stopwatch-lap-item>
  </div>
</template>

<script>
export default {
  name: "StopwatchLaps",
};
</script>

<script setup>
// props
defineProps({
  laps: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>
